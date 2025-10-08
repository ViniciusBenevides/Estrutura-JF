(function initNossosSoftwares() {
  const services = [
    {
      id: 1,
      image: "assets/carteira-de-trabalho.webp",
      title: "TCU Monitor",
      description: "Sistema para verificação automática de status de aposentadoria no TCU.",
      link: "components/TCU/tcu.html" 
    }
  ];

  function buildCard(s) {
    return `
      <a href="${s.link}" class="service-card-link" rel="noopener">
        <div class="service-card">
          <div class="card-image-container">
            <img src="${s.image}" alt="${s.title}" class="service-image" width="400" height="300" loading="lazy"/>
            <div class="project-button">Ver Projeto</div>
          </div>

          <h3 class="card-title">${s.title}</h3>
          <p class="card-description">${s.description}</p>

          <div class="project-button-container">
            <span class="project-button-link">
              <span class="icon-container">
                <img src="assets/arrow-up-right-svgrepo-com.svg" class="arrow-icon" alt="Abrir"/>
              </span>
              Ver Projeto
            </span>
          </div>
        </div>
      </a>
    `;
  }

  function render() {
    let grid = document.querySelector("#softwares .servicos-grid");
    if (!grid) {
      const section = document.getElementById("softwares");
      if (!section) {
        console.warn("[nossosSoftwares] Seção #softwares não encontrada.");
        return;
      }
      grid = document.createElement("div");
      grid.className = "servicos-grid";
      section.appendChild(grid);
    }

    grid.innerHTML = services.map(buildCard).join("");
    console.log(`[nossosSoftwares] Renderizou ${services.length} item(ns).`);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
