// === Configuração dos slides (equivalente ao array do React) ===
const _carouselItems = [
  {
    id: 1,
    imageSrc: "assets/carousel-1.jpg", // ajuste de caminho p/ sua estrutura
    altText: "Slide 1",
    title: "Projeto de Residência em Sistemas e Agentes Inteligentes para o Judiciário Federal",
  },
  {
    id: 2,
    imageSrc: "assets/carousel-2.jpg",
    altText: "Slide 2",
    title: "Projeto de Residência em Sistemas e Agentes Inteligentes para o Judiciário Federal",
  },
  {
    id: 3,
    imageSrc: "assets/carousel-3.jpg",
    altText: "Slide 3",
    title: "Projeto de Residência em Sistemas e Agentes Inteligentes para o Judiciário Federal",
  },
];

(function initCarousel() {
  const wrapper = document.getElementById("_carouselWrapper");
  const indicators = document.getElementById("_carouselIndicators");
  if (!wrapper || !indicators) return;

  // Renderiza slides dinamicamente (como o map do React)
  wrapper.innerHTML = _carouselItems
    .map((item, index) => {
      const activeClass = index === 0 ? "active-item" : "inactive-item";
      return `
        <div class="carousel-item ${activeClass}" data-index="${index}">
          <img src="${item.imageSrc}" class="carousel-image" alt="${item.altText}">
          <div class="overlay">
            <div class="overlay-content">
              ${item.title ? `<h2 class="overlay-title">${item.title}</h2>` : ""}
              <button class="fancy-button" data-role="saiba-mais">
                <span class="text-span">Saiba mais</span>
                <span class="mask-area"></span>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  indicators.innerHTML = _carouselItems
    .map((_, index) => {
      const active = index === 0 ? "active-indicator" : "";
      return `<button type="button" class="indicator ${active}" data-slide="${index}" aria-label="Slide ${index + 1}"></button>`;
    })
    .join("");

  // Estado
  let currentIndex = 0;
  let isAutoPlaying = true;
  let autoInterval = null;

  // Funções equivalentes às do React
  function setActiveSlide(index) {
    const items = wrapper.querySelectorAll(".carousel-item");
    const dots = indicators.querySelectorAll(".indicator");
    items.forEach((el, i) => {
      el.classList.toggle("active-item", i === index);
      el.classList.toggle("inactive-item", i !== index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active-indicator", i === index);
      dot.setAttribute("aria-current", i === index ? "true" : "false");
    });
    currentIndex = index;
  }

  function goToSlide(index) {
    setActiveSlide(index);
    pauseAutoPlay();
  }

  function startAutoPlay() {
    stopAutoPlay();
    isAutoPlaying = true;
    autoInterval = setInterval(() => {
      const next = currentIndex === _carouselItems.length - 1 ? 0 : currentIndex + 1;
      setActiveSlide(next);
    }, 10000); // 10s (igual ao React)
  }

  function stopAutoPlay() {
    isAutoPlaying = false;
    if (autoInterval) clearInterval(autoInterval);
  }

  function pauseAutoPlay() {
    stopAutoPlay();
    setTimeout(() => startAutoPlay(), 10000); // pausa 10s e volta a tocar
  }

  // Mouse follow effect no botão (equivalente ao useRef + mousemove)
  function attachFancyButtonEffect(scope) {
    const buttons = scope.querySelectorAll(".fancy-button");
    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty("--mouse-x", `${x}px`);
        btn.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }

  // Clique em "Saiba mais"
  function handleSaibaMaisClick(e) {
    e.preventDefault();
    // Comportamento idêntico ao React:
    // se estiver na home, scroll suave; senão, navega para index e ancora
    const onHome =
      window.location.pathname.endsWith("/index.html") ||
      window.location.pathname === "/" ||
      window.location.pathname === "";

    if (onHome) {
      const target = document.getElementById("sobre-nos");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "index.html#sobre-nos";
    }
  }

  // Listeners
  indicators.addEventListener("click", (e) => {
    const btn = e.target.closest(".indicator");
    if (!btn) return;
    const index = Number(btn.getAttribute("data-slide"));
    if (!Number.isNaN(index)) goToSlide(index);
  });

  wrapper.addEventListener("click", (e) => {
    const btn = e.target.closest('button[data-role="saiba-mais"]');
    if (!btn) return;
    handleSaibaMaisClick(e);
  });

  // Efeito hover do botão
  attachFancyButtonEffect(wrapper);

  // Inicia autoplay
  startAutoPlay();
})();
