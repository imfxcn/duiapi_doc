const DUIAPI_HOME_URL = "https://www.duiapi.com";

function isReturnHomeLink(link) {
  if (!link) {
    return false;
  }

  try {
    const url = new URL(link.href);
    return url.origin === DUIAPI_HOME_URL && (url.pathname === "/" || url.pathname === "");
  } catch {
    return false;
  }
}

function normalizeReturnHomeLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    if (!isReturnHomeLink(link)) {
      return;
    }

    link.removeAttribute("target");
    link.removeAttribute("rel");
  });
}

document.addEventListener(
  "click",
  (event) => {
    const link = event.target.closest?.("a[href]");
    if (!isReturnHomeLink(link)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    window.location.assign(DUIAPI_HOME_URL);
  },
  true
);

normalizeReturnHomeLinks();
new MutationObserver(normalizeReturnHomeLinks).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
