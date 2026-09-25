(function () {
  const root = document.documentElement;
  const languageButton = document.querySelector(".language-toggle");
  const themeButton = document.querySelector(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  function normalizeLanguage(language) {
    return language === "en" || language === "zh" ? language : null;
  }

  function languageFromUrl() {
    return normalizeLanguage(new URL(window.location.href).searchParams.get("lang"));
  }

  // Keep the explicit language on same-origin page links while preserving filters and hashes.
  function syncInternalLanguageLinks(language) {
    document.querySelectorAll("a[href]").forEach(function (link) {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (_) {
        return;
      }
      if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return;

      url.searchParams.set("lang", language);
      link.setAttribute("href", url.pathname + url.search + url.hash);
    });
  }

  function setLanguage(language, updateUrl) {
    const next = normalizeLanguage(language) || "en";
    root.dataset.lang = next;
    root.lang = next === "en" ? "en" : "zh-CN";
    try {
      localStorage.setItem("ms-language", next);
    } catch (_) {
      // The preference is optional when storage is unavailable.
    }

    if (updateUrl && window.history?.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState({}, "", url);
    }
    syncInternalLanguageLinks(next);
    document.querySelectorAll(".like-count[data-count]").forEach(renderLikeCount);
  }

  function setTheme(theme) {
    if (theme === "dark") root.dataset.theme = "dark";
    else delete root.dataset.theme;
    try {
      localStorage.setItem("ms-theme", theme);
    } catch (_) {
      // The preference is optional when storage is unavailable.
    }
  }

  languageButton?.addEventListener("click", function () {
    setLanguage(root.dataset.lang === "en" ? "zh" : "en", true);
  });

  // An explicit link language wins over the saved preference prepared by the inline boot script.
  setLanguage(languageFromUrl() || root.dataset.lang, false);

  window.addEventListener("popstate", function () {
    setLanguage(languageFromUrl() || root.dataset.lang, false);
  });

  themeButton?.addEventListener("click", function () {
    const current = root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(current === "dark" ? "light" : "dark");
  });

  menuButton?.addEventListener("click", function () {
    const open = nav?.classList.toggle("open") || false;
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav?.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });

  const filterButtons = document.querySelectorAll("[data-filter]");
  const appButtons = Array.from(filterButtons).filter(function (button) {
    return button.dataset.filterGroup !== "category";
  });
  const categoryButtons = Array.from(filterButtons).filter(function (button) {
    return button.dataset.filterGroup === "category";
  });
  const articleCards = document.querySelectorAll(".journal-grid .article-card");
  const emptyState = document.querySelector(".empty-state");

  // The View (app) and Categories groups are independent filters that combine
  // with AND, not one shared "selected" value: picking a category narrows
  // within whichever app is already showing, and vice versa. Only the View
  // group's "all" button clears both back to unfiltered.
  let currentApp = "all";
  let currentCategory = "all";

  function applyFilters(app, category, updateUrl) {
    const validApp = appButtons.some(function (button) { return button.dataset.filter === app; }) ? app : "all";
    const validCategory = categoryButtons.some(function (button) { return button.dataset.filter === category; }) ? category : "all";

    appButtons.forEach(function (button) {
      // The "all" button represents "nothing is filtered anywhere" — it
      // only lights up when both groups are clear, not just this one, even
      // though it physically lives in the View group.
      const isAllButton = button.dataset.filter === "all";
      const active = isAllButton
        ? validApp === "all" && validCategory === "all"
        : button.dataset.filter === validApp;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    categoryButtons.forEach(function (button) {
      const active = button.dataset.filter === validCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    let visibleCount = 0;
    articleCards.forEach(function (card) {
      const appMatch = validApp === "all" || card.dataset.app === validApp;
      const categoryMatch = validCategory === "all" || card.dataset.category === validCategory;
      const visible = appMatch && categoryMatch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyState) emptyState.hidden = visibleCount !== 0;

    if (updateUrl && window.history?.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.delete("filter"); // legacy single-filter param
      if (validApp === "all") url.searchParams.delete("app"); else url.searchParams.set("app", validApp);
      if (validCategory === "all") url.searchParams.delete("category"); else url.searchParams.set("category", validCategory);
      window.history.replaceState({}, "", url);
    }

    currentApp = validApp;
    currentCategory = validCategory;
  }

  appButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.dataset.filter === "all") {
        // "all" is the shared reset: it clears the category selection too.
        applyFilters("all", "all", true);
        return;
      }
      // A second click on the already-selected app clears just the app,
      // keeping whichever category was already selected — same as the
      // Categories group. If nothing ends up selected in either group,
      // this naturally lands back on "all" (validApp/validCategory both
      // resolve to "all"), which is the correct default state.
      const alreadyActive = button.classList.contains("active");
      applyFilters(alreadyActive ? "all" : button.dataset.filter, currentCategory, true);
    });
  });

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // No dedicated "all" button in this group, so a second click on the
      // already-selected category clears just the category, keeping
      // whichever app filter was already selected.
      const alreadyActive = button.classList.contains("active");
      applyFilters(currentApp, alreadyActive ? "all" : button.dataset.filter, true);
    });
  });

  if (filterButtons.length) {
    const params = new URLSearchParams(window.location.search);
    // A link generated before this filter split still points at either an
    // app slug or a category slug via ?filter=; route it to whichever group
    // it actually belongs to instead of dropping it.
    const legacyFilter = params.get("filter");
    const legacyIsCategory = legacyFilter && categoryButtons.some(function (button) { return button.dataset.filter === legacyFilter; });
    const requestedApp = params.get("app") || (legacyFilter && !legacyIsCategory ? legacyFilter : "all");
    const requestedCategory = params.get("category") || (legacyIsCategory ? legacyFilter : "all");
    applyFilters(requestedApp, requestedCategory, false);
  }

  // Page view counters and article likes: article pages show their own count,
  // the homepage shows a site-wide count under a fixed "home" slug. One request
  // per slug returns both numbers, so the byline reveals in a single step. The
  // Worker lives on a workers.dev subdomain, which can occasionally fail to
  // resolve on some networks, so any failure or slow response just leaves the
  // counter and the like button hidden instead of showing an error.
  const COUNTER_ENDPOINT = "https://ms-blog-views-counter.michaellynxcn.workers.dev";

  function likeKey(slug) {
    return "ms-liked:" + slug;
  }

  // localStorage is only a fast local echo so a returning reader sees the
  // liked state without waiting for the network; the Worker keeps the
  // authoritative per-IP record and refuses a second like either way.
  function readLocalLike(slug) {
    try {
      return localStorage.getItem(likeKey(slug)) === "1";
    } catch (error) {
      return false;
    }
  }

  function writeLocalLike(slug, liked) {
    try {
      if (liked) localStorage.setItem(likeKey(slug), "1");
      else localStorage.removeItem(likeKey(slug));
    } catch (error) {
      // Private browsing or blocked storage: the Worker still dedupes.
    }
  }

  function setLiked(button, liked) {
    button.classList.toggle("is-liked", liked);
    button.disabled = liked;
    button.setAttribute("aria-pressed", liked ? "true" : "false");
  }

  function renderLikeCount(node) {
    const value = Number(node.dataset.count);
    const locale = root.dataset.lang === "en" ? "en" : "zh-CN";
    const fullCount = new Intl.NumberFormat(locale).format(value);
    node.textContent = new Intl.NumberFormat(locale, {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
    // The exact count remains available to assistive technology and on hover.
    node.setAttribute("aria-label", fullCount);
    node.closest(".like-button").title = fullCount;
  }

  function setCount(nodes, value) {
    if (!Number.isFinite(value)) return;
    nodes.forEach(function (node) {
      if (node.classList.contains("like-count")) {
        // Never use the formatted text for arithmetic: "1.2万" is not a number.
        node.dataset.count = String(value);
        renderLikeCount(node);
      } else {
        node.textContent = String(value);
      }
    });
  }

  // Group every counter element by slug so each slug costs one request, and so
  // the elements are held directly instead of re-queried by an interpolated
  // attribute selector.
  const counterGroups = Object.create(null);

  function group(slug) {
    if (!counterGroups[slug]) counterGroups[slug] = { views: [], likeButtons: [] };
    return counterGroups[slug];
  }

  document.querySelectorAll(".view-counter[data-slug]").forEach(function (element) {
    group(element.dataset.slug).views.push(element);
  });

  document.querySelectorAll(".like-button[data-slug]").forEach(function (button) {
    const slug = button.dataset.slug;
    group(slug).likeButtons.push(button);

    if (readLocalLike(slug)) setLiked(button, true);

    button.addEventListener("click", function () {
      if (button.disabled) return;
      const countNodes = Array.prototype.slice.call(button.querySelectorAll(".like-count"));
      const previous = Number(countNodes.length ? countNodes[0].dataset.count : 0) || 0;

      // Optimistic: the button locks and the number moves on click, then the
      // Worker's own total replaces it. On failure both roll back so the
      // reader can try again.
      setLiked(button, true);
      writeLocalLike(slug, true);
      setCount(countNodes, previous + 1);

      // The pop only plays on a real click, never when the Worker reports an
      // earlier like on page load.
      button.classList.add("just-liked");
      setTimeout(function () { button.classList.remove("just-liked"); }, 500);

      fetch(COUNTER_ENDPOINT + "/like?slug=" + encodeURIComponent(slug), { method: "POST" })
        .then(function (response) {
          if (!response.ok) throw new Error("like request failed");
          return response.json();
        })
        .then(function (data) {
          setCount(countNodes, Number(data && data.likes));
        })
        .catch(function () {
          setLiked(button, false);
          writeLocalLike(slug, false);
          setCount(countNodes, previous);
        });
    });
  });

  Object.keys(counterGroups).forEach(function (slug) {
    if (!window.fetch) return;
    const target = counterGroups[slug];
    const endpoint = COUNTER_ENDPOINT + "/?slug=" + encodeURIComponent(slug);
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(function () { controller.abort(); }, 6000) : null;

    fetch(endpoint, controller ? { signal: controller.signal } : {})
      .then(function (response) {
        if (!response.ok) throw new Error("views request failed");
        return response.json();
      })
      .then(function (data) {
        const views = Number(data && data.views);
        if (Number.isFinite(views)) {
          target.views.forEach(function (viewsEl) {
            setCount(Array.prototype.slice.call(viewsEl.querySelectorAll(".view-counter-count")), views);
            viewsEl.hidden = false;
          });
        }

        target.likeButtons.forEach(function (button) {
          setCount(Array.prototype.slice.call(button.querySelectorAll(".like-count")), Number(data && data.likes));
          if (data && data.liked) {
            setLiked(button, true);
            writeLocalLike(slug, true);
          }
          button.hidden = false;
        });
      })
      .catch(function () {
        // Silent: no count is better than a broken-looking page.
      })
      .finally(function () {
        if (timeoutId) clearTimeout(timeoutId);
      });
  });

})();
