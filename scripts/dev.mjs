import { spawn } from "node:child_process";
import { readFile, readdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, relative } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const reloadClients = new Set();
let buildRunning = false;
let fingerprintRunning = false;
let sourceFingerprint = "";
let pollTimer;

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".xml": "application/xml; charset=utf-8",
};

async function build() {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ["scripts/build.mjs"], { stdio: "inherit" });
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error("Build failed")));
  });
}

async function fingerprintPath(target) {
  const info = await stat(target);
  if (info.isFile()) {
    return relative(root, target) + ":" + info.mtimeMs + ":" + info.size;
  }

  const entries = await readdir(target, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  const parts = [];
  for (const entry of entries) {
    parts.push(await fingerprintPath(join(target, entry.name)));
  }
  return parts.join("|");
}

async function getSourceFingerprint() {
  const targets = [
    join(root, "content"),
    join(root, "public"),
    join(root, "scripts", "build.mjs"),
  ];
  const parts = [];
  for (const target of targets) parts.push(await fingerprintPath(target));
  return parts.join("||");
}

function notifyReload() {
  for (const response of reloadClients) {
    response.write("event: reload\ndata: ready\n\n");
  }
}

async function rebuild() {
  if (buildRunning) return;
  buildRunning = true;
  try {
    await build();
    sourceFingerprint = await getSourceFingerprint();
    notifyReload();
    console.log("Preview refreshed.");
  } catch (error) {
    console.error(error.message);
  } finally {
    buildRunning = false;
  }
}

async function checkForChanges() {
  if (buildRunning || fingerprintRunning) return;
  fingerprintRunning = true;
  try {
    const nextFingerprint = await getSourceFingerprint();
    if (nextFingerprint !== sourceFingerprint) {
      sourceFingerprint = nextFingerprint;
      await rebuild();
    }
  } catch (error) {
    console.error("Unable to check preview files:", error.message);
  } finally {
    fingerprintRunning = false;
  }
}

await build();
sourceFingerprint = await getSourceFingerprint();

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);

    if (pathname === "/__live-reload") {
      response.writeHead(200, {
        "content-type": "text/event-stream",
        "cache-control": "no-cache",
        connection: "keep-alive",
      });
      response.write("event: connected\ndata: ready\n\n");
      reloadClients.add(response);
      request.on("close", () => reloadClients.delete(response));
      return;
    }

    // Resolve only inside dist; the normalization check blocks traversal requests.
    let relativePath = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "").replace(/^[/\\]+/, "");
    let target = join(root, "dist", relativePath);
    if (pathname.endsWith("/")) target = join(target, "index.html");
    else if (!extname(target)) {
      try {
        if ((await stat(target)).isDirectory()) target = join(target, "index.html");
      } catch {
        target = join(target, "index.html");
      }
    }

    let body = await readFile(target);
    if (extname(target) === ".html") {
      const liveReload = '<script>new EventSource("/__live-reload").addEventListener("reload",function(){location.reload()})</script>';
      body = body.toString("utf8").replace("</body>", liveReload + "</body>");
    }
    response.writeHead(200, { "content-type": types[extname(target)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    response.end(await readFile(join(root, "dist", "404.html")));
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("Local: http://127.0.0.1:" + port);
  console.log("Watching content/, public/, and the page generator for live changes.");
});

// Poll modification metadata instead of filesystem events. macOS can emit
// events when build tools merely read files, which otherwise causes loops.
pollTimer = setInterval(checkForChanges, 500);

function shutdown() {
  clearInterval(pollTimer);
  for (const response of reloadClients) response.end();
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
