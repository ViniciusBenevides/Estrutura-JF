document.addEventListener('DOMContentLoaded', function() {
    const tcuData = {
        title: "TCU Monitor - Sistema de Monitoramento de Aposentadorias",
        description: "Solução automatizada para consulta e monitoramento do status de aposentadoria de servidores no sistema do TCU, com notificação automática de alterações para os gestores da área de folha de pagamento.",
        details: {
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Monitoramento",
            tools: ["React", "Node.js", "PostgreSQL", "API TCU", "Sistema de Notificações"],
            timeline: "Mai/2025 - Jun/2025 (2 meses)"
        }
    };

    function loadPageData() {
        const h1 = document.querySelector('.hero-content h1');
        if(h1) h1.textContent = tcuData.title;

        const desc = document.querySelector('.hero-description');
        if(desc) desc.textContent = tcuData.description;

        const img = document.querySelector('.hero-image img');
        if(img) img.alt = tcuData.title;

        const cat = document.querySelector('#first .meta-value');
        if(cat) cat.textContent = tcuData.details.category;

        const type = document.querySelector('#second .meta-value');
        if(type) type.textContent = tcuData.details.serviceType;

        const tools = document.querySelector('#third .meta-value');
        if(tools) tools.textContent = tcuData.details.tools.join(', ');

        const time = document.querySelector('#last .meta-value');
        if(time) time.textContent = tcuData.details.timeline;
    }

    function init() {
        loadPageData();
        console.log('TCU Monitor - Página carregada com sucesso!');
    }

    init();
});
