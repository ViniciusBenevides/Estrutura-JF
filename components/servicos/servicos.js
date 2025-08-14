(function initServicos() {
  function buildCard(s) {
    const href = `projeto.html?id=${s.id}`;
    const img =
      s.imagemHeroi ||
      (Array.isArray(s.images) ? s.images[0] : '') ||
      'assets/mockup.jpg';

    return `
      <a href="${href}" class="service-card-link" rel="noopener">
        <div class="service-card">
          <div class="card-image-container">
            <img src="${img}" alt="${s.titulo}" class="service-image" width="400" height="300" loading="lazy"/>
          </div>

          <div class="card-content">
            <h3 class="card-title">${s.titulo}</h3>
            <p class="card-description">${s.descricao}</p>

            <div class="project-button-container">
              <!-- “Botão” visual; clique continua funcionando no <a> externo -->
              <div class="project-button2">
                <img src="assets/arrow-up-right-svgrepo-com.svg" alt="" aria-hidden="true"/>
                Ver Projeto
              </div>
            </div>
          </div>
        </div>
      </a>`;
  }

  function render() {
    const grid = document.getElementById("servicos-grid");
    if (!grid) return console.warn("#servicos-grid não encontrado");
    const data = (window.servicesDetails || window.dadosDosServicos || []);
    grid.innerHTML = data.map(buildCard).join("");
    console.log(`[servicos] render: ${data.length} cards`);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
