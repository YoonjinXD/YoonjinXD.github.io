// Open every absolute http(s) link in a new tab. This site's own links are relative,
// so this also covers sibling GitHub Pages sites on the same host (e.g. demo pages),
// which jekyll-link-attributes treats as internal.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
