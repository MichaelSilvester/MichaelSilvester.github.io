import https from "node:https";

const lookupEndpoint = "https://itunes.apple.com/lookup";
const lookupTimeoutMs = 5_000;
const maximumResponseBytes = 1_000_000;

export function versionFromLookupPayload(payload, expectedID) {
  if (!payload || !Array.isArray(payload.results)) return null;

  const matchingResult = payload.results.find((result) =>
    String(result?.trackId ?? "") === String(expectedID)
  );
  const version = matchingResult?.version?.trim();

  // App Store versions are numeric dot-separated values. Rejecting any other
  // response keeps untrusted remote text out of generated HTML.
  return version && /^\d+(?:\.\d+){0,3}$/.test(version) ? version : null;
}

function requestLookup(appID, country) {
  const url = new URL(lookupEndpoint);
  url.searchParams.set("id", appID);
  url.searchParams.set("country", country);

  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: { "user-agent": "MichaelSilvester.github.io build" },
    }, (response) => {
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error("HTTP " + response.statusCode));
        return;
      }

      response.setEncoding("utf8");
      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
        if (Buffer.byteLength(body, "utf8") > maximumResponseBytes) {
          request.destroy(new Error("response exceeded size limit"));
        }
      });
      response.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch {
          reject(new Error("response was not valid JSON"));
        }
      });
    });

    request.setTimeout(lookupTimeoutMs, () => {
      request.destroy(new Error("request timed out"));
    });
    request.on("error", reject);
  });
}

async function fetchAppStoreVersion(appID) {
  // Try both storefronts because an app can become visible in one region before
  // another during release. The version number itself is shared by this site.
  for (const country of ["cn", "us"]) {
    const payload = await requestLookup(appID, country);
    const version = versionFromLookupPayload(payload, appID);
    if (version) return version;
  }
  return null;
}

export async function synchronizeAppStoreVersions(apps, { enabled = false } = {}) {
  if (!enabled) return;

  for (const app of apps) {
    if (!app.appStore?.id) continue;

    try {
      const storeVersion = await fetchAppStoreVersion(app.appStore.id);
      if (storeVersion) {
        app.version = storeVersion;
        console.log("Resolved " + app.name + " App Store version: " + storeVersion);
      } else {
        console.warn("App Store metadata unavailable for " + app.name + "; using fallback " + app.version + ".");
      }
    } catch (error) {
      console.warn("Unable to resolve " + app.name + " App Store version; using fallback " + app.version + ": " + error.message);
    }
  }
}
