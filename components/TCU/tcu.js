document.addEventListener('DOMContentLoaded', function() {
    const tcuData = { /* ... o mesmo objeto que você já tinha ... */ };

    function loadPageData() {
        document.querySelector('.hero-content h1').textContent = tcuData.title;
        document.querySelector('.hero-description').textContent = tcuData.description;
        document.querySelector('.hero-image img').alt = tcuData.title;

        document.querySelector('#first .meta-value').textContent = tcuData.details.category;
        document.querySelector('#second .meta-value').textContent = tcuData.details.serviceType;
        document.querySelector('#third .meta-value').textContent = tcuData.details.tools.join(', ');
        document.querySelector('#last .meta-value').textContent = tcuData.details.timeline;
    }

    function init() {
        loadPageData();
        console.log('TCU Monitor - Página carregada com sucesso!');
    }

    init();
});
