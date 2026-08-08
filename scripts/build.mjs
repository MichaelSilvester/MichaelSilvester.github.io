import { copyFile, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../content/site.mjs";
import { apps } from "../content/apps.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");
let assetVersion = "";

const ui = {
  home: { zh: "首页", en: "Home" },
  journal: { zh: "文章", en: "Journal" },
  apps: { zh: "App", en: "Apps" },
  about: { zh: "关于", en: "About" },
  readArticle: { zh: "阅读文章", en: "Read article" },
  exploreApp: { zh: "查看 App", en: "Explore app" },
  allWriting: { zh: "查看所有文章", en: "All writing" },
  allApps: { zh: "查看所有 App", en: "All apps" },
};

// Article front matter uses these stable keys; keep both languages here so new
// categories cannot silently drift between cards and article detail pages.
const articleCategories = {
  product: { zh: "产品", en: "Product" },
  design: { zh: "设计", en: "Design" },
  thought: { zh: "思考", en: "Thinking" },
  legal: { zh: "法律", en: "Legal" },
  support: { zh: "支持", en: "Support" },
};

function articleCategory(post) {
  const category = articleCategories[post.category];
  if (!category) throw new Error("Unknown article category: " + post.category);
  return category;
}

function postUrl(post) {
  return "/journal/" + encodeURIComponent(post.routeName) + "/";
}

function journalFilterUrl(filter) {
  return "/journal/?filter=" + encodeURIComponent(filter);
}

function escapeHtml(value = "") {
  return value
    .split("&").join("&amp;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split('"').join("&quot;");
}

// Asset URLs must change with their contents so a Pages deploy cannot reuse stale interaction code.
function versionedAsset(path) {
  if (!assetVersion) throw new Error("Asset version must be prepared before rendering pages.");
  return path + "?v=" + assetVersion;
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

function markdownToHtml(markdown) {
  const lines = markdown.trim().split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let listOpen = false;

  function flushParagraph() {
    if (paragraph.length) {
      html.push("<p>" + inlineMarkdown(paragraph.join(" ")) + "</p>");
      paragraph = [];
    }
  }

  function closeList() {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      closeList();
    } else if (line.startsWith("## ")) {
      flushParagraph();
      closeList();
      html.push("<h2>" + inlineMarkdown(line.slice(3)) + "</h2>");
    } else if (line.startsWith("### ")) {
      flushParagraph();
      closeList();
      html.push("<h3>" + inlineMarkdown(line.slice(4)) + "</h3>");
    } else if (line.startsWith("> ")) {
      flushParagraph();
      closeList();
      html.push("<blockquote>" + inlineMarkdown(line.slice(2)) + "</blockquote>");
    } else if (line.startsWith("- ")) {
      flushParagraph();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push("<li>" + inlineMarkdown(line.slice(2)) + "</li>");
    } else {
      paragraph.push(line);
    }
  }

  flushParagraph();
  closeList();
  return html.join("\n");
}

function resolvePostText(meta, name, filename) {
  const shared = meta[name];
  const zh = meta[name + "Zh"];
  const en = meta[name + "En"];

  if (shared) return { zh: shared, en: shared, bilingual: false };
  if (zh && en) return { zh, en, bilingual: true };
  if (zh) return { zh, en: zh, bilingual: false };
  if (en) return { zh: en, en, bilingual: false };
  throw new Error(filename + " must define " + name + " or a localized " + name + " field.");
}

function renderPostText(field, tag, className) {
  if (field.bilingual) {
    return bi(escapeHtml(field.zh), escapeHtml(field.en), tag, className);
  }
  return "<" + tag + ' class="' + className + '">' + escapeHtml(field.zh) + "</" + tag + ">";
}

function parsePostDate(value, filename) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?$/);
  if (!match) {
    throw new Error(filename + " date must use YYYY-MM-DD or YYYY-MM-DD HH:mm:ss.");
  }

  const date = match[1] + "-" + match[2] + "-" + match[3];
  const time = match[4] ? match[4] + ":" + match[5] + ":" + match[6] : "00:00:00";
  const numbers = [match[1], match[2], match[3], match[4] || "0", match[5] || "0", match[6] || "0"].map(Number);
  const checked = new Date(Date.UTC(numbers[0], numbers[1] - 1, numbers[2], numbers[3], numbers[4], numbers[5]));
  const valid = checked.getUTCFullYear() === numbers[0] &&
    checked.getUTCMonth() === numbers[1] - 1 &&
    checked.getUTCDate() === numbers[2] &&
    checked.getUTCHours() === numbers[3] &&
    checked.getUTCMinutes() === numbers[4] &&
    checked.getUTCSeconds() === numbers[5];
  if (!valid) throw new Error(filename + " contains an invalid article date.");

  // Article times are authored in Michael's local time. They affect ordering
  // and machine-readable dates, while the visual label intentionally stays date-only.
  return {
    sortValue: date + "T" + time,
    isoValue: date + "T" + time + "+08:00",
    display: date.split("-").join("."),
  };
}

function calculateReadingMinutes(markdown) {
  const plainText = markdown
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[#>*_\x60~\-]/g, " ");
  const hanCharacters = (plainText.match(/[\u3400-\u4dbf\u4e00-\u9fff]/g) || []).length;
  const words = plainText
    .replace(/[\u3400-\u4dbf\u4e00-\u9fff]/g, " ")
    .match(/[A-Za-z0-9]+(?:['’.-][A-Za-z0-9]+)*/g) || [];

  // Chinese and Latin text are counted separately so mixed technical articles
  // do not become artificially short. Always show at least one minute.
  return Math.max(1, Math.ceil(hanCharacters / 300 + words.length / 200));
}

function parsePost(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(filename + " front matter is missing.");

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    meta[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }

  const languageSections = match[2].split("<!-- en -->");
  if (languageSections.length !== 2 || !languageSections[0].includes("<!-- zh -->")) {
    throw new Error(filename + " must include both zh and en sections.");
  }

  const routeName = filename.replace(/\.md$/i, "");
  if (!routeName || routeName === "." || routeName === "..") {
    throw new Error(filename + " cannot be used as an article URL.");
  }
  const bodyZh = languageSections[0].replace("<!-- zh -->", "").trim();
  const bodyEn = languageSections[1].trim();

  return {
    ...meta,
    routeName,
    titleText: resolvePostText(meta, "title", filename),
    excerptText: resolvePostText(meta, "excerpt", filename),
    published: parsePostDate(meta.date, filename),
    featured: meta.featured === "true",
    bodyZh,
    bodyEn,
    readingTime: {
      zh: calculateReadingMinutes(bodyZh) + " 分钟阅读",
      en: calculateReadingMinutes(bodyEn) + " min read",
    },
  };
}

function bi(zh, en, tag = "span", className = "") {
  const cls = className ? " " + className : "";
  return (
    "<" + tag + ' class="lang-copy lang-zh' + cls + '">' + zh + "</" + tag + ">" +
    "<" + tag + ' class="lang-copy lang-en' + cls + '">' + en + "</" + tag + ">"
  );
}

function navLink(key, href, active) {
  const current = key === active ? ' aria-current="page" class="active"' : "";
  return '<a href="' + href + '"' + current + ">" + bi(ui[key].zh, ui[key].en) + "</a>";
}

function header(active) {
  return (
    '<header class="site-header">' +
      '<a class="brand" href="/" aria-label="Michael Silvester home">' +
        '<span class="brand-mark">MS</span><span class="brand-name">Michael Silvester</span>' +
      "</a>" +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">' +
        '<span class="lang-copy lang-zh">菜单</span><span class="lang-copy lang-en">Menu</span>' +
      "</button>" +
      '<nav class="site-nav" id="site-nav" aria-label="Primary navigation">' +
        navLink("home", "/", active) +
        navLink("journal", "/journal/", active) +
        navLink("apps", "/apps/", active) +
        navLink("about", "/about/", active) +
      "</nav>" +
      '<div class="header-tools">' +
        '<button class="icon-button theme-toggle" type="button" aria-label="切换深浅色 / Toggle theme"><span aria-hidden="true">◐</span></button>' +
        '<button class="language-toggle" type="button" aria-label="切换语言 / Switch language"><span class="lang-zh">EN</span><span class="lang-en">中</span></button>' +
      "</div>" +
    "</header>"
  );
}

function footer() {
  const year = new Date().getFullYear();
  return (
    '<footer class="site-footer">' +
      '<div><div class="footer-name">Michael Silvester</div>' +
        bi("PrimePlayer 与 MagicDesk 开发者。", "Developer of PrimePlayer and MagicDesk.", "p") +
      "</div>" +
      '<div class="footer-links">' +
        '<a href="/journal/">' + bi("文章", "Journal") + "</a>" +
        '<a href="/apps/">' + bi("App", "Apps") + "</a>" +
        // Keep footer navigation aligned with header labels and bilingual consistency: Journal -> App -> About.
        '<a href="/about/">' + bi("关于", "About") + "</a>" +
      "</div>" +
      '<p class="copyright">© ' + year + " Michael Silvester</p>" +
    "</footer>"
  );
}

function pageDocument({ titleZh, titleEn, descriptionZh, descriptionEn, path, active, content, bodyClass = "" }) {
  const canonical = site.url + (path === "/" ? "" : path);
  const title = titleZh === "Michael Silvester" ? titleZh : titleZh + " — Michael Silvester";
  const socialTitle = titleZh === titleEn ? titleZh : titleZh + " / " + titleEn;
  // Read an explicit URL language before CSS paints; it must override a saved device preference.
  const bootScript = "try{const p=new URLSearchParams(location.search).get('lang');const l=p==='en'||p==='zh'?p:localStorage.getItem('ms-language');if(l)document.documentElement.dataset.lang=l;const t=localStorage.getItem('ms-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}";
  return (
    "<!doctype html>" +
    '<html lang="zh-CN" data-lang="zh">' +
    "<head>" +
      '<meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<meta name="theme-color" content="#f3f0e8">' +
      "<title>" + escapeHtml(title) + "</title>" +
      '<meta name="description" content="' + escapeHtml(descriptionZh) + '">' +
      '<link rel="canonical" href="' + canonical + '">' +
      '<meta property="og:type" content="website">' +
      '<meta property="og:title" content="' + escapeHtml(socialTitle) + '">' +
      '<meta property="og:description" content="' + escapeHtml(descriptionZh) + '">' +
      '<meta property="og:url" content="' + canonical + '">' +
      '<meta property="og:image" content="' + site.url + '/og.png">' +
      '<meta name="twitter:card" content="summary_large_image">' +
      '<link rel="alternate" type="application/rss+xml" title="Michael Silvester RSS" href="/rss.xml">' +
      '<link rel="manifest" href="/site.webmanifest">' +
      '<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%23151515%22/><text x=%2232%22 y=%2241%22 text-anchor=%22middle%22 font-size=%2226%22 fill=%22%23c8ff3d%22 font-family=%22Arial%22>MS</text></svg>">' +
      '<link rel="stylesheet" href="' + versionedAsset("/assets/styles.css") + '">' +
      "<script>" + bootScript + "</script>" +
    "</head>" +
    '<body class="' + bodyClass + '">' +
      '<a class="skip-link" href="#content">' + bi("跳到正文", "Skip to content") + "</a>" +
      '<div class="page-shell">' + header(active) + '<main id="content">' + content + "</main>" + footer() + "</div>" +
      '<script src="' + versionedAsset("/assets/site.js") + '" defer></script>' +
    "</body></html>"
  );
}

function visual(app, compact = false) {
  const compactClass = compact ? " compact" : "";
  if (app.slug === "primeplayer") {
    return (
      '<div class="product-visual primeplayer-visual' + compactClass + '" aria-hidden="true">' +
        '<div class="player-top"><span></span><span></span><span></span><b>PrimePlayer</b></div>' +
        '<div class="player-scene"><i class="sun"></i><i class="ridge ridge-one"></i><i class="ridge ridge-two"></i></div>' +
        '<div class="player-controls"><span class="play">▶</span><span class="timeline"><i></i></span><span>01:24</span></div>' +
      "</div>"
    );
  }
  return (
    '<div class="product-visual magicdesk-visual' + compactClass + '" aria-hidden="true">' +
      '<div class="desktop-menu"><b>●</b><span>MagicDesk</span><span>File</span><span>Edit</span><i>09:41</i></div>' +
      '<div class="desktop-sky"><span class="cloud cloud-one"></span><span class="cloud cloud-two"></span><i class="mountain mountain-one"></i><i class="mountain mountain-two"></i></div>' +
      '<div class="desktop-dock"><span></span><span></span><span></span><span></span></div>' +
    "</div>"
  );
}

function articleCard(post, large = false) {
  const app = apps.find((item) => item.slug === post.app);
  const category = articleCategory(post);
  return (
    '<article class="article-card' + (large ? " article-card-large" : "") + '" data-category="' + post.category + '" data-app="' + post.app + '">' +
      '<div class="article-card-top"><a class="eyebrow article-category" href="' + journalFilterUrl(post.category) + '">' + bi(category.zh, category.en) + "</a>" +
        (app ? '<a class="article-app" href="' + journalFilterUrl(app.slug) + '">' + app.name + "</a>" : "") +
      "</div>" +
      '<a class="article-card-link" href="' + postUrl(post) + '" aria-label="' + escapeHtml(post.titleText.zh) + '">' +
        renderPostText(post.titleText, "h3", "article-title") +
        renderPostText(post.excerptText, "p", "article-excerpt") +
        '<div class="article-meta"><time datetime="' + post.published.isoValue + '">' + post.published.display + "</time>" +
          '<span>' + bi(post.readingTime.zh, post.readingTime.en) + '</span><span class="round-arrow">↗</span></div>' +
      "</a>" +
    "</article>"
  );
}

function appCard(app) {
  return (
    '<article class="app-card app-' + app.accent + '">' +
      '<div class="app-card-copy"><div class="app-card-head"><span class="app-icon">' + app.monogram + '</span><span class="eyebrow">' +
        bi(app.kind.zh, app.kind.en) + "</span></div>" +
        '<h3>' + app.name + "</h3>" +
        bi(app.tagline.zh, app.tagline.en, "p", "app-tagline") +
        bi(app.description.zh, app.description.en, "p", "app-description") +
        '<a class="text-link" href="/apps/' + app.slug + '/">' + bi(ui.exploreApp.zh, ui.exploreApp.en) + " <span>↗</span></a>" +
      "</div>" + visual(app, true) +
    "</article>"
  );
}

function homePage(posts) {
  const featured = posts.filter((post) => post.featured).slice(0, 2);
  const content =
    '<section class="hero section">' +
      '<div class="hero-copy"><span class="eyebrow">' + bi("设计 · 开发 · 记录", "Design · Build · Notes") + "</span>" +
        bi("记录 App 功能、<br>使用方式与<br><em>开发进展。</em>", "App features,<br>usage guides, and<br><em>development notes.</em>", "h1") +
        bi("我是 Michael，PrimePlayer 与 MagicDesk 的开发者。这里集中介绍两款 App，并发布基于实际功能的相关文章。", "I am Michael, the developer of PrimePlayer and MagicDesk. This site introduces both apps and publishes articles based on their actual features.", "p", "hero-intro") +
        '<div class="hero-actions"><a class="button button-dark" href="/journal/">' + bi("开始阅读", "Start reading") + ' <span>↗</span></a>' +
          '<a class="button button-ghost" href="/apps/">' + bi("看看我的 App", "Explore my apps") + "</a></div>" +
      "</div>" +
      '<div class="hero-stage" aria-label="PrimePlayer and MagicDesk previews">' +
        '<div class="stage-note"><span>01</span>' + bi("正在构建", "Now building") + "</div>" +
        '<div class="stage-card stage-prime">' + visual(apps[0], true) + "</div>" +
        '<div class="stage-card stage-magic">' + visual(apps[1], true) + "</div>" +
        '<div class="stage-caption"><span>PrimePlayer</span><i></i><span>MagicDesk</span></div>' +
      "</div>" +
    "</section>" +
    '<section class="ticker" aria-hidden="true"><div>PRIMEPLAYER <i>✦</i> MAGICDESK <i>✦</i> ' +
      bi("APP 功能与开发记录", "APP FEATURES & DEVELOPMENT") + " <i>✦</i> PRIMEPLAYER <i>✦</i> MAGICDESK</div></section>" +
    '<section class="section latest-section"><div class="section-heading"><div><span class="section-number">01</span>' +
      bi("最近文章", "Latest writing", "h2") + "</div><a class=\"text-link\" href=\"/journal/\">" + bi(ui.allWriting.zh, ui.allWriting.en) + " <span>↗</span></a></div>" +
      '<div class="article-grid">' + featured.map((post) => articleCard(post, true)).join("") + "</div></section>" +
    '<section class="section apps-section"><div class="section-heading"><div><span class="section-number">02</span>' +
      bi("我的 App", "My apps", "h2") + "</div><a class=\"text-link\" href=\"/apps/\">" + bi(ui.allApps.zh, ui.allApps.en) + " <span>↗</span></a></div>" +
      '<div class="app-grid">' + apps.map(appCard).join("") + "</div></section>" +
    '<section class="section manifesto"><span class="manifesto-mark">✦</span>' +
      bi("PrimePlayer 面向 iPhone 与 iPad，<br>MagicDesk 面向 Mac。", "PrimePlayer is for iPhone and iPad.<br>MagicDesk is for Mac.", "h2") +
      '<p>FEATURES · GUIDES · DEVELOPMENT</p></section>';

  return pageDocument({
    titleZh: "Michael Silvester",
    titleEn: "Michael Silvester",
    descriptionZh: "Michael Silvester 的博客与 App 展示，介绍 PrimePlayer、MagicDesk 的功能、使用方式与开发记录。",
    descriptionEn: "Michael Silvester's blog and app showcase for PrimePlayer and MagicDesk features, guides, and development notes.",
    path: "/",
    active: "home",
    content,
    bodyClass: "home-page",
  });
}

function journalPage(posts) {
  const appFilters = [
    ["all", "全部", "All"],
    ["primeplayer", "PrimePlayer", "PrimePlayer"],
    ["magicdesk", "MagicDesk", "MagicDesk"],
  ];
  const usedCategories = Array.from(new Set(posts.map((post) => post.category)))
    .map((key) => [key, articleCategories[key]?.zh, articleCategories[key]?.en])
    .filter((item) => item[1] && item[2]);
  const filterButtons = (items, firstActive = false) => items.map((item, index) =>
    '<button type="button" data-filter="' + item[0] + '"' + (firstActive && index === 0 ? ' class="active"' : "") + ">" + bi(item[1], item[2]) + "</button>"
  ).join("");
  const filterGroup = (labelZh, labelEn, items, panelId, firstActive = false) =>
    '<div class="filter-group"><span class="filter-label">' + bi(labelZh, labelEn) + "</span>" +
      '<div class="filter-options" id="' + panelId + '">' + filterButtons(items, firstActive) + "</div></div>";
  const content =
    '<section class="page-intro section"><span class="eyebrow">JOURNAL / ' + bi("文章", "Writing") + "</span>" +
      bi("App 功能、<br><em>使用方式与更新记录</em>。", "App features,<br><em>usage guides, and updates.</em>", "h1") +
      bi("文章内容以 PrimePlayer 与 MagicDesk 当前项目中已经实现的功能为依据。", "Articles are based on features currently implemented in PrimePlayer and MagicDesk.", "p") +
    "</section>" +
    '<section class="section journal-listing"><div class="filter-bar" role="group" aria-label="Article filters">' +
      filterGroup("查看", "View", appFilters, "app-filter-options", true) +
      filterGroup("文章分类", "Categories", usedCategories, "category-filter-options") +
    '</div><div class="journal-grid">' + posts.map((post) => articleCard(post)).join("") + "</div>" +
      '<p class="empty-state" hidden>' + bi("这个分类里还没有文章。", "No articles in this category yet.") + "</p></section>";

  return pageDocument({
    titleZh: "文章",
    titleEn: "Journal",
    descriptionZh: "PrimePlayer 与 MagicDesk 的功能说明、使用方式和开发记录。",
    descriptionEn: "Feature descriptions, usage guides, and development notes for PrimePlayer and MagicDesk.",
    path: "/journal/",
    active: "journal",
    content,
    bodyClass: "journal-page",
  });
}

function adjacentPostLink(target, direction) {
  const previous = direction === "previous";
  return (
    '<a class="post-nav-link post-nav-' + direction + '" href="' + postUrl(target) + '">' +
      '<span class="post-nav-label">' + bi(previous ? "上一篇" : "下一篇", previous ? "Previous article" : "Next article") + "</span>" +
      renderPostText(target.titleText, "h3", "post-nav-title") +
      '<span class="post-nav-arrow" aria-hidden="true">' + (previous ? "←" : "→") + "</span>" +
    "</a>"
  );
}

function postPage(post, allPosts) {
  const app = apps.find((item) => item.slug === post.app);
  const position = allPosts.indexOf(post);
  // allPosts is newest-first: the older neighbor is the previous article,
  // while the newer neighbor is the next article in chronological reading order.
  const previous = position < allPosts.length - 1 ? allPosts[position + 1] : null;
  const next = position > 0 ? allPosts[position - 1] : null;
  const category = articleCategory(post);
  const content =
    '<article class="post"><header class="post-header section"><a class="back-link" href="/journal/">← ' + bi("所有文章", "All writing") + "</a>" +
      '<div class="post-kicker"><a href="' + journalFilterUrl(post.category) + '">' + bi(category.zh, category.en) + "</a>" +
        (app ? '<a href="' + journalFilterUrl(app.slug) + '">' + app.name + "</a>" : "") +
      "</div>" +
      renderPostText(post.titleText, "h1", "post-title") +
      renderPostText(post.excerptText, "p", "post-deck") +
    '</header><div class="post-rule"></div><div class="post-layout section"><aside class="post-author"><div class="post-byline"><div class="avatar">MS</div>' +
      '<div><strong>Michael Silvester</strong><span><time datetime="' + post.published.isoValue + '">' + post.published.display + "</time> · " +
        bi(post.readingTime.zh, post.readingTime.en) + '</span></div></div></aside><div class="post-body">' +
      bi(markdownToHtml(post.bodyZh), markdownToHtml(post.bodyEn), "div", "prose") + "</div>" +
    "</div></article>" +
    (app ? '<section class="section related-app"><div class="related-app-copy"><span class="eyebrow">' + bi("文中提到", "Mentioned in this story") + "</span><h2>" + app.name + "</h2>" +
      bi(app.description.zh, app.description.en, "p") + '<a class="button button-dark" href="/apps/' + app.slug + '/">' + bi("查看 App 信息", "View app details") + " ↗</a></div>" + visual(app, true) + "</section>" : "") +
    '<section class="section more-writing"><div class="section-heading"><div><span class="section-number">→</span>' + bi("继续阅读", "Keep reading", "h2") +
      '</div></div><nav class="post-navigation" aria-label="上一篇和下一篇 / Previous and next articles">' +
        (previous ? adjacentPostLink(previous, "previous") : '<div class="post-nav-empty" aria-hidden="true"></div>') +
        (next ? adjacentPostLink(next, "next") : '<div class="post-nav-empty" aria-hidden="true"></div>') +
      "</nav></section>";

  return pageDocument({
    titleZh: post.titleText.zh,
    titleEn: post.titleText.en,
    descriptionZh: post.excerptText.zh,
    descriptionEn: post.excerptText.en,
    path: postUrl(post),
    active: "journal",
    content,
    bodyClass: "post-page",
  });
}

function appsPage() {
  const content =
    '<section class="page-intro apps-intro section"><span class="eyebrow">APPS / ' + bi("作品", "Software") + "</span>" +
      bi("iPhone、iPad 与 Mac 上的<br><em>两款 App。</em>", "Two apps for<br><em>iPhone, iPad, and Mac.</em>", "h1") +
      bi("PrimePlayer 是 iPhone 与 iPad 视频播放器；MagicDesk 是 Mac 动态壁纸播放器。", "PrimePlayer is a video player for iPhone and iPad; MagicDesk is a live wallpaper player for Mac.", "p") +
    '</section><section class="section app-showcase-list">' + apps.map((app, index) =>
      '<article class="app-showcase app-' + app.accent + '"><div class="app-showcase-copy"><div class="app-index">0' + (index + 1) + "</div>" +
        '<div class="app-title-row"><span class="app-icon">' + app.monogram + "</span><div><span class=\"eyebrow\">" + bi(app.kind.zh, app.kind.en) + "</span><h2>" + app.name + "</h2></div></div>" +
        bi(app.tagline.zh, app.tagline.en, "p", "app-tagline") + bi(app.description.zh, app.description.en, "p", "app-description") +
        '<ul class="feature-pills">' + app.features.map((feature) => "<li>" + bi(feature.zh, feature.en) + "</li>").join("") + "</ul>" +
        '<a class="button button-dark" href="/apps/' + app.slug + '/">' + bi("进入 App 页面", "Open app page") + " <span>↗</span></a></div>" +
        '<div class="app-showcase-visual">' + visual(app) + "</div></article>"
    ).join("") + "</section>";

  return pageDocument({
    titleZh: "App",
    titleEn: "Apps",
    descriptionZh: "Michael Silvester 的 App：iPhone 与 iPad 视频播放器 PrimePlayer，以及 macOS 动态壁纸播放器 MagicDesk。",
    descriptionEn: "PrimePlayer for iPhone and iPad, and MagicDesk for macOS, by Michael Silvester.",
    path: "/apps/",
    active: "apps",
    content,
    bodyClass: "apps-page",
  });
}

function appDownloadAction(app) {
  if (app.appStore) {
    // App Store 地址必须来自内容配置；新窗口属性可避免外部页面控制本站标签页。
    return '<a class="button button-dark" href="' + app.appStore.url + '" target="_blank" rel="noopener noreferrer" aria-label="' +
      app.name + ' App Store">' +
      bi(app.appStore.label.zh, app.appStore.label.en) + " ↗</a>";
  }

  return '<a class="button button-dark" href="' + app.download + '">' +
    bi("下载即将开放", "Download coming soon") + "</a>";
}

function appPage(app, posts) {
  const appPosts = posts.filter((post) => post.app === app.slug);
  const content =
    '<section class="app-hero section app-' + app.accent + '"><div class="app-hero-copy"><a class="back-link" href="/apps/">← ' + bi("所有 App", "All apps") + "</a>" +
      '<div class="app-title-row"><span class="app-icon app-icon-large">' + app.monogram + "</span><div><span class=\"eyebrow\">" + bi(app.kind.zh, app.kind.en) + "</span><h1>" + app.name + "</h1></div></div>" +
      bi(app.tagline.zh, app.tagline.en, "p", "app-hero-tagline") + bi(app.description.zh, app.description.en, "p", "app-hero-description") +
      '<div class="app-hero-actions"' + (app.appStore ? "" : ' id="download-coming-soon"') + ">" + appDownloadAction(app) + '<span class="status-dot">' + bi(app.status.zh, app.status.en) + "</span></div>" +
    '</div><div class="app-hero-visual">' + visual(app) + "</div></section>" +
    '<section class="app-facts"><div><span>' + bi("平台", "Platform") + "</span><strong>" + app.platform + "</strong></div><div><span>" +
      bi("版本", "Version") + "</span><strong>" + app.version + "</strong></div><div><span>" + bi("系统要求", "Requires") + "</span><strong>" + app.system + "</strong></div></section>" +
    '<section class="section app-features"><div class="section-heading"><div><span class="section-number">01</span>' + bi("核心特点", "Highlights", "h2") +
      '</div></div><div class="feature-grid">' + app.features.map((feature, index) => '<div class="feature-item"><span>0' + (index + 1) + "</span><h3>" + bi(feature.zh, feature.en) + "</h3></div>").join("") + "</div></section>" +
    '<section class="section app-story"><div><span class="section-number">02</span>' + bi("功能概览", "How it works", "h2") + "</div><div>" +
      (app.slug === "primeplayer"
        ? bi("PrimePlayer 可以从相册与“文件”导入视频，也支持同一 Wi-Fi 下通过浏览器传输文件和添加网络视频。导入内容可通过媒体库、文件夹、收藏和播放列表整理；播放时可以使用字幕与音轨、画中画、倍速、截图和 GIF 录制等功能。", "PrimePlayer imports video from Photos and Files, transfers files through a browser on the same Wi-Fi network, and opens network video. Organize media with a library, folders, favorites, and playlists, then use subtitles and audio tracks, Picture in Picture, playback speed, screenshots, and GIF capture while watching.", "p")
        : bi("MagicDesk 可导入本地图片、GIF 和视频，也可通过 URL 添加在线图片、视频或网页。壁纸素材可使用搜索、标签、收藏和自定义列表整理，并能分别设置到不同显示器；菜单栏与全局快捷键用于控制播放，智能省电会在游戏、全屏工作或使用电池时暂停动态内容。", "MagicDesk imports local images, GIFs, and videos, and adds online images, videos, or webpages by URL. Organize wallpapers with search, tags, favorites, and custom lists, assign them per display, control playback from the menu bar or global shortcuts, and pause motion automatically during games, full-screen work, or battery use.", "p")) +
      '<a class="text-link" href="/about/">' + bi("了解开发者", "Meet the developer") + " ↗</a></div></section>" +
    '<section class="section app-writing"><div class="section-heading"><div><span class="section-number">03</span>' + bi("相关文章", "Related writing", "h2") +
      '</div><a class="text-link" href="/journal/">' + bi(ui.allWriting.zh, ui.allWriting.en) + ' ↗</a></div><div class="article-grid">' +
      (appPosts.length ? appPosts.map((post) => articleCard(post)).join("") : '<p class="empty-state">' + bi("文章正在准备中。", "Writing is on the way.") + "</p>") +
    "</div></section>";

  return pageDocument({
    titleZh: app.name + " — " + app.kind.zh,
    titleEn: app.name + " — " + app.kind.en,
    descriptionZh: app.description.zh,
    descriptionEn: app.description.en,
    path: "/apps/" + app.slug + "/",
    active: "apps",
    content,
    bodyClass: "app-detail-page",
  });
}

function aboutPage() {
  const content =
    '<section class="about-hero section"><span class="eyebrow about-page-label">ABOUT / ' + bi("关于", "About") + "</span>" +
      '<div class="about-portrait" aria-hidden="true"><span>MS</span><i></i><b>MICHAEL<br>SILVESTER</b></div>' +
      '<div class="about-intro">' + bi("你好，我是<br><em>Michael。</em>", "Hello, I’m<br><em>Michael.</em>", "h1") +
        bi(site.bio.zh, site.bio.en, "p", "about-lead") +
        '<div class="about-location"><span>●</span>' + bi(site.location.zh, site.location.en) + "</div>" +
      "</div></section>" +
    '<section class="section about-story"><div><span class="section-number">01</span>' + bi("我在做什么", "What I do", "h2") + "</div><div class=\"about-prose\">" +
      bi("我是 PrimePlayer 与 MagicDesk 的开发者。PrimePlayer 是面向 iPhone 与 iPad 的视频播放器；MagicDesk 是面向 macOS 的动态壁纸播放器。", "I develop PrimePlayer and MagicDesk. PrimePlayer is a video player for iPhone and iPad; MagicDesk is a live wallpaper player for macOS.", "p") +
      bi("这个博客集中展示两款 App 的信息，并发布功能说明、使用方式与开发记录。", "This blog presents both apps and publishes feature descriptions, usage guides, and development notes.", "p") +
    "</div></section>" +
    '<section class="values"><div class="section"><div class="section-heading"><div><span class="section-number">02</span>' + bi("站点内容", "What you will find", "h2") +
      '</div></div><div class="value-grid"><div><span>01</span>' + bi("App 信息", "App details", "h3") + bi("查看 PrimePlayer 与 MagicDesk 的平台、系统要求和功能清单。", "View platforms, system requirements, and feature lists for PrimePlayer and MagicDesk.", "p") +
      '</div><div><span>02</span>' + bi("功能文章", "Feature guides", "h3") + bi("根据 App 中已经实现的功能整理使用说明。", "Read guides based on features already implemented in each app.", "p") +
      '</div><div><span>03</span>' + bi("开发记录", "Development notes", "h3") + bi("后续用于发布版本变化和新增功能。", "A place for future release changes and newly added features.", "p") +
      "</div></div></div></section>" +
    '<section class="section contact-section"><span class="eyebrow">CONTACT</span>' +
      bi("有想法，或者只是想打个招呼？", "Have an idea, or just want to say hello?", "h2") +
      bi("你可以通过电子邮件联系我。", "You can reach me by email.", "p") +
      '<div><a class="button button-dark" href="mailto:' + site.email + '">' + bi("发送邮件", "Send email") + "</a></div></section>";

  return pageDocument({
    titleZh: "关于",
    titleEn: "About",
    descriptionZh: "关于 Michael Silvester，以及 PrimePlayer 和 MagicDesk 的基本信息。",
    descriptionEn: "About Michael Silvester, PrimePlayer, and MagicDesk.",
    path: "/about/",
    active: "about",
    content,
    bodyClass: "about-page",
  });
}

function notFoundPage() {
  const content =
    '<section class="not-found section"><span>404</span>' + bi("这一页走远了。", "This page wandered off.", "h1") +
    bi("回到首页，或者去看看最近写下的内容。", "Head home, or browse the latest writing.", "p") +
    '<a class="button button-dark" href="/">' + bi("返回首页", "Back home") + " ↗</a></section>";
  return pageDocument({
    titleZh: "页面未找到",
    titleEn: "Page not found",
    descriptionZh: "页面未找到。",
    descriptionEn: "Page not found.",
    path: "/404.html",
    active: "",
    content,
    bodyClass: "not-found-page",
  });
}

async function writeRoute(route, html) {
  const destination = route === "/" ? join(output, "index.html") : join(output, route, "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

// Keep the generator dependency-free and compatible with the local Node 14
// installation; fs.promises.cp is only available in newer Node releases.
async function copyDirectory(source, destination) {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const from = join(source, entry.name);
    const to = join(destination, entry.name);
    if (entry.isDirectory()) await copyDirectory(from, to);
    else if (entry.isFile()) await copyFile(from, to);
  }
}

async function buildFeeds(posts) {
  const urls = ["/", "/journal/", "/apps/", "/apps/primeplayer/", "/apps/magicdesk/", "/about/"]
    .concat(posts.map(postUrl));
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((path) => "  <url><loc>" + site.url + (path === "/" ? "" : path) + "</loc></url>").join("\n") + "\n</urlset>";
  await writeFile(join(output, "sitemap.xml"), sitemap);

  const rss = '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Michael Silvester</title><link>' +
    site.url + '</link><description>Product, design, and independent development.</description>' +
    posts.map((post) => "<item><title>" + escapeHtml(post.titleText.zh) + "</title><link>" + site.url + postUrl(post) +
      "</link><guid>" + site.url + postUrl(post) + "</guid><pubDate>" + new Date(post.published.isoValue).toUTCString() +
      "</pubDate><description>" + escapeHtml(post.excerptText.zh) + "</description></item>").join("") + "</channel></rss>";
  await writeFile(join(output, "rss.xml"), rss);
}

async function main() {
  // dist is generated output only. Cleaning it first prevents deleted articles
  // from surviving a later deployment as stale pages.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await copyDirectory(join(root, "public"), output);
  await writeFile(join(output, ".nojekyll"), "");

  const styles = await readFile(join(root, "public", "assets", "styles.css"));
  const script = await readFile(join(root, "public", "assets", "site.js"));
  assetVersion = createHash("sha256").update(styles).update(script).digest("hex").slice(0, 12);

  const filenames = (await readdir(join(root, "content", "posts"))).filter((name) => name.endsWith(".md"));
  const posts = [];
  for (const filename of filenames) {
    posts.push(parsePost(await readFile(join(root, "content", "posts", filename), "utf8"), filename));
  }
  posts.sort((a, b) =>
    b.published.sortValue.localeCompare(a.published.sortValue) ||
    a.routeName.localeCompare(b.routeName)
  );

  await writeRoute("/", homePage(posts));
  await writeRoute("journal", journalPage(posts));
  for (const post of posts) await writeRoute("journal/" + post.routeName, postPage(post, posts));
  await writeRoute("apps", appsPage());
  for (const app of apps) await writeRoute("apps/" + app.slug, appPage(app, posts));
  await writeRoute("about", aboutPage());
  await writeFile(join(output, "404.html"), notFoundPage());
  await buildFeeds(posts);

  console.log("Built " + (posts.length + apps.length + 4) + " pages in dist/");
}

await main();
