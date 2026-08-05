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
    const next = normalizeLanguage(language) || "zh";
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
  const articleCards = document.querySelectorAll(".journal-grid .article-card");
  const emptyState = document.querySelector(".empty-state");

  function applyArticleFilter(filter, updateUrl) {
    const activeButton = Array.from(filterButtons).find(function (button) {
      return button.dataset.filter === filter;
    });
    const selected = activeButton ? filter : "all";
    let visibleCount = 0;

    filterButtons.forEach(function (button) {
      const active = button.dataset.filter === selected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    articleCards.forEach(function (card) {
      const visible = selected === "all" ||
        card.dataset.category === selected ||
        card.dataset.app === selected;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyState) emptyState.hidden = visibleCount !== 0;

    if (updateUrl && window.history?.replaceState) {
      const url = new URL(window.location.href);
      if (selected === "all") url.searchParams.delete("filter");
      else url.searchParams.set("filter", selected);
      window.history.replaceState({}, "", url);
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyArticleFilter(button.dataset.filter, true);
    });
  });

  if (filterButtons.length) {
    const requestedFilter = new URLSearchParams(window.location.search).get("filter") || "all";
    applyArticleFilter(requestedFilter, false);
  }

})();
