(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("show");
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    });

    // Close menu on click
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });
  }

  // Theme toggle (dark/light)
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  function updateThemeIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    if (themeToggle) themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
  }
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data
