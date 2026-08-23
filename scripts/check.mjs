import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = process.cwd();
const required = [
  "dist/index.html",
  "dist/journal/index.html",
  "dist/apps/index.html",
  "dist/apps/primeplayer/index.html",
  "dist/apps/magicdesk/index.html",
  "dist/apps/picturium/index.html",
  "dist/about/index.html",
  "dist/sitemap.xml",
  "dist/rss.xml",
];

for (const file of required) {
  const content = await readFile(join(root, file), "utf8");
  if (!content.trim()) throw new Error(file + " is empty");
  if (file.endsWith(".html") && (!content.includes("<title>") || !content.includes('id="content"'))) {
    throw new Error(file + " is missing required page structure");
  }
}

const postDirs = await readdir(join(root, "dist", "journal"), { withFileTypes: true });
const postPages = postDirs.filter((entry) => entry.isDirectory()).length;
const sourcePosts = (await readdir(join(root, "content", "posts"))).filter((name) => name.endsWith(".md"));
if (postPages !== sourcePosts.length) {
  throw new Error("Generated article count does not match content/posts");
}
const requiredProductDocuments = [
  "primeplayer-privacy-policy",
  "primeplayer-terms-of-use",
  "primeplayer-technical-support",
  "magicdesk-privacy-policy",
  "magicdesk-terms-of-use",
  "magicdesk-technical-support",
  "picturium-privacy-policy",
  "picturium-terms-of-use",
  "picturium-technical-support",
];
for (const routeName of requiredProductDocuments) {
  if (!postDirs.some((entry) => entry.isDirectory() && entry.name === routeName)) {
    throw new Error("Missing required product document: " + routeName);
  }
}

function articleSortValue(source, filename) {
  const frontMatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontMatter) throw new Error(filename + " front matter is missing");
  if (/^slug\s*:/m.test(frontMatter[1])) throw new Error(filename + " still defines a manual slug");
  if (/^readTime(?:Zh|En)?\s*:/m.test(frontMatter[1])) throw new Error(filename + " still defines a manual reading time");

  const dateLine = frontMatter[1].match(/^date\s*:\s*(.+)$/m);
  const date = dateLine && dateLine[1].trim().match(/^(\d{4}-\d{2}-\d{2})(?:[ T](\d{2}:\d{2}:\d{2}))?$/);
  if (!date) throw new Error(filename + " has an invalid date");
  return date[1] + "T" + (date[2] || "00:00:00");
}

const sourceRecords = [];
for (const filename of sourcePosts) {
  const source = await readFile(join(root, "content", "posts", filename), "utf8");
  const category = source.match(/^category\s*:\s*(.+)$/m);
  const app = source.match(/^app\s*:\s*(.+)$/m);
  if (!category) throw new Error(filename + " is missing an article category");
  if (!app) throw new Error(filename + " is missing an app association");
  sourceRecords.push({
    routeName: filename.replace(/\.md$/i, ""),
    sortValue: articleSortValue(source, filename),
    category: category[1].trim(),
    app: app[1].trim(),
  });
}
sourceRecords.sort((a, b) =>
  b.sortValue.localeCompare(a.sortValue) ||
  a.routeName.localeCompare(b.routeName)
);

const journal = await readFile(join(root, "dist", "journal", "index.html"), "utf8");
const generatedOrder = Array.from(journal.matchAll(/class="article-card-link" href="\/journal\/([^/]+)\//g))
  .map((match) => decodeURIComponent(match[1]));
const expectedOrder = sourceRecords.map((post) => post.routeName);
if (generatedOrder.join("\n") !== expectedOrder.join("\n")) {
  throw new Error("Journal articles are not sorted by their full publication time");
}

// These entries define the intended timeline from earliest to latest. The
// journal renders newest-first, so its generated card order must be the reverse.
const requiredChronologicalOrder = requiredProductDocuments.concat([
  "primeplayer-playback-gestures",
  "primeplayer-import-and-library",
  "magicdesk-wallpaper-workflow",
  "picturium-gif-crop-and-image-stacking",
]);
const requiredPublicationOrder = [...requiredChronologicalOrder].reverse();
if (generatedOrder.join("\n") !== requiredPublicationOrder.join("\n")) {
  throw new Error("Articles do not match the required earliest-to-latest timeline");
}

if (!journal.includes("分钟阅读") || !journal.includes("min read")) {
  throw new Error("Generated article cards are missing automatic reading time");
}
for (const panelId of ["app-filter-options", "category-filter-options"]) {
  if (!journal.includes('class="filter-options" id="' + panelId + '">')) {
    throw new Error("Journal is missing an always-visible filter panel for " + panelId);
  }
}
if (journal.includes("data-filter-toggle") || journal.includes("filter-toggle-icon")) {
  throw new Error("Journal still contains collapsible filter controls");
}
for (const category of new Set(sourceRecords.map((post) => post.category))) {
  if (!journal.includes('data-filter="' + category + '"')) {
    throw new Error("Journal is missing a filter for category " + category);
  }
  const expectedLinks = sourceRecords.filter((post) => post.category === category).length;
  const link = 'class="eyebrow article-category" href="/journal/?filter=' + encodeURIComponent(category) + '"';
  if (journal.split(link).length - 1 !== expectedLinks) {
    throw new Error("Journal cards have incorrect links for category " + category);
  }
}
for (const app of new Set(sourceRecords.map((post) => post.app).filter((value) => value !== "general"))) {
  const expectedLinks = sourceRecords.filter((post) => post.app === app).length;
  const link = 'class="article-app" href="/journal/?filter=' + encodeURIComponent(app) + '"';
  if (journal.split(link).length - 1 !== expectedLinks) {
    throw new Error("Journal cards have incorrect links for app " + app);
  }
}

for (let index = 0; index < sourceRecords.length; index += 1) {
  const current = sourceRecords[index];
  const html = await readFile(join(root, "dist", "journal", current.routeName, "index.html"), "utf8");
  const actual = Array.from(html.matchAll(/class="post-nav-link[^"]*" href="\/journal\/([^/]+)\//g))
    .map((match) => decodeURIComponent(match[1]));
  // sourceRecords is newest-first. Detail navigation intentionally labels the
  // newer neighbor as previous and the older neighbor as next.
  const expected = [];
  if (index > 0) expected.push(sourceRecords[index - 1].routeName);
  if (index < sourceRecords.length - 1) expected.push(sourceRecords[index + 1].routeName);
  if (actual.join("\n") !== expected.join("\n")) {
    throw new Error(current.routeName + " has incorrect previous/next article links");
  }
  if (!html.includes('/journal/?filter=' + encodeURIComponent(current.category))) {
    throw new Error(current.routeName + " is missing its category link");
  }
  if (current.app !== "general" && !html.includes('/journal/?filter=' + encodeURIComponent(current.app))) {
    throw new Error(current.routeName + " is missing its app filter link");
  }
  if (html.includes("data-copy-link") || html.includes("Share on X") || html.includes('class="post-aside"')) {
    throw new Error(current.routeName + " still contains article sharing controls");
  }
  const layoutPosition = html.indexOf('class="post-layout section"');
  const authorPosition = html.indexOf('class="post-author"');
  const headerEnd = html.indexOf("</header>");
  if (layoutPosition === -1 || authorPosition < layoutPosition || authorPosition < headerEnd) {
    throw new Error(current.routeName + " does not place author information beside the article body");
  }
}

const homepage = await readFile(join(root, "dist", "index.html"), "utf8");
for (const name of ["PrimePlayer", "MagicDesk", "Picturium", "Michael Silvester"]) {
  if (!homepage.includes(name)) throw new Error("Homepage is missing " + name);
}

const primePlayerPage = await readFile(join(root, "dist", "apps", "primeplayer", "index.html"), "utf8");
const primePlayerStoreUrl = "https://apps.apple.com/app/id6799107071";
if (!primePlayerPage.includes('href="' + primePlayerStoreUrl + '"') ||
    !primePlayerPage.includes('target="_blank" rel="noopener noreferrer" aria-label="PrimePlayer App Store"')) {
  throw new Error("PrimePlayer page is missing its safe App Store link");
}
for (const label of ["前往 App Store", "View on the App Store"]) {
  if (!primePlayerPage.includes(label)) {
    throw new Error("PrimePlayer App Store link is missing label: " + label);
  }
}

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(target));
    else if (entry.name.endsWith(".html")) files.push(target);
  }
  return files;
}

// Resolve every root-relative link so deployment cannot ship a dead navigation path.
const htmlFiles = await collectHtml(join(root, "dist"));
const siteScript = await readFile(join(root, "dist", "assets", "site.js"), "utf8");
const siteStyles = await readFile(join(root, "dist", "assets", "styles.css"), "utf8");
if (!siteStyles.includes(".journal-grid .article-card[hidden]")) {
  throw new Error("Article filters are missing an explicit hidden-card display rule");
}
for (const requiredLanguageBehavior of [
  'searchParams.get("lang")',
  'searchParams.set("lang", language)',
  "syncInternalLanguageLinks",
]) {
  if (!siteScript.includes(requiredLanguageBehavior)) {
    throw new Error("Language-aware links are missing: " + requiredLanguageBehavior);
  }
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const styleVersion = html.match(/\/assets\/styles\.css\?v=([a-f0-9]{12})/);
  const scriptVersion = html.match(/\/assets\/site\.js\?v=([a-f0-9]{12})/);
  if (!styleVersion || !scriptVersion || styleVersion[1] !== scriptVersion[1]) {
    throw new Error(file + " does not use matching content-versioned assets");
  }
  if (!html.includes("new URLSearchParams(location.search).get('lang')")) {
    throw new Error(file + " does not read the URL language before first paint");
  }
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = decodeURIComponent(match[1]);
    const target = extname(href)
      ? join(root, "dist", href)
      : join(root, "dist", href, "index.html");
    try {
      await readFile(target);
    } catch {
      throw new Error(file + " links to missing path " + href);
    }
  }
}

console.log("Checked " + htmlFiles.length + " pages, feeds, bilingual structure, language-aware links, and " + postPages + " article pages.");
