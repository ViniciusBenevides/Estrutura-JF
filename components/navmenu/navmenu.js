(function initNavMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const logo = document.getElementById("logo-link");

  if (!menuToggle || !nav) return;

  // Fecha o menu (usado em várias interações)
  function closeMenu() {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");
  }

  // Alterna o menu hamburguer
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Clique no logo: se estiver na home, faz scroll suave até o topo
  logo?.addEventListener("click", (e) => {
    const onHome =
      location.pathname.endsWith("/index.html") ||
      location.pathname === "/" ||
      location.pathname === "";

    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
    }
  });

  // Clique em qualquer link do menu
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const section = link.getAttribute("data-section");
    const onHome =
      location.pathname.endsWith("/index.html") ||
      location.pathname === "/" ||
      location.pathname === "";

    // Se o link tem um data-section, faz scroll suave dentro da página inicial
    if (section) {
      if (onHome) {
        e.preventDefault();
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      } else {
        closeMenu();
      }
    }
    // Se for o link para o topo (logo)
    else if (onHome && link.getAttribute("href")?.includes("#top")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMenu();
    } else {
      closeMenu();
    }
  });
})();
