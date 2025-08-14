(function initNavMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const logo = document.getElementById("logo-link");
  if (!menuToggle || !nav) return;

  function closeMenu() {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  }

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  logo?.addEventListener("click", (e) => {
    const onHome = location.pathname.endsWith("/index.html") || location.pathname === "/" || location.pathname === "";
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
    }
    // fora da home: navega normal
  });

  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const section = link.getAttribute("data-section");
    const onHome = location.pathname.endsWith("/index.html") || location.pathname === "/" || location.pathname === "";

    if (section) {
      if (onHome) {
        e.preventDefault();
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      } else {
        // fora da home → deixa navegar para index.html#section
        closeMenu();
      }
    } else if (onHome && link.getAttribute("href")?.includes("#top")) {
      // Início já na home (index.html#top) → rola pro topo suavemente
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
    } else {
      // demais links (equipe.html etc) seguem normal
      closeMenu();
    }
  });
})();
