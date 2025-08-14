(function initEquipe() {
  const gridGestores   = document.getElementById("grid-gestores");
  const gridDocentes   = document.getElementById("grid-docentes");
  const gridResidentes = document.getElementById("grid-residentes");
  if (!gridGestores || !gridDocentes || !gridResidentes) return;

  const gestores = [
    { id: 1, image: "assets/Caio.jpg", name: "Caio Sotero Rosa",
      position: "Diretor do Núcleo de Administração",
      description: "Vinculado aos projetos Licitafácil e Contratafácil",
      phone: "tel:6232261520", email: "mailto:nucad.go@trf1.jus.br" },
    { id: 2, image: "assets/jean.jpg", name: "Jean Marcos Cabral",
      position: "Diretor da Divisão de Gestão de Pessoas",
      description: "Vinculado ao projeto de aperfeiçoamento do controle de folha de pagamento",
      phone: "tel:6232261561", email: "mailto:nucgp.go@trf1.jus.br" },
    { id: 3, image: "assets/Luciana edt1.jpg", name: "Luciana Marinho de Melo",
      position: "Diretora da 15ª Vara Federal",
      description: "Vinculada ao projeto de apoio à realização de audiências.",
      phone: "tel:6236238650", email: "mailto:15vara.go@trf1.jus.br" },
    { id: 4, image: "assets/RonaldoJF.jpg", name: "Ronaldo Borges Oliveira",
      position: "Diretor do Núcleo de Gestão Estratégica, Ambiental e de Apoio à Inovação",
      description: "Responsável pelo laboratório de inovação da SJGO.",
      phone: "tel:6232261652", email: "mailto:nutec.go@trf1.jus.br" },
  ];

  const docentes = [
    { id: 1, image: "assets/ronaldoMC.png",
      name: "Ronaldo Martins da Costa (Coordenador do projeto)",
      position: "Doutor em Engenharia Elétrica",
      description: "Áreas de atuação: Visão Computacional, Processamento de Imagens e Sinais e Linguagens de Programação",
      lattes: "http://lattes.cnpq.br/7080590204832262",
      email: "mailto:ronaldocosta@inf.ufg.br" },
    { id: 2, image: "assets/eliomar.png",
      name: "Eliomar Araújo de Lima",
      position: "Doutor em Engenharia Elétrica",
      description: "Áreas de atuação: Engenharia de sistemas de informação",
      lattes: "http://lattes.cnpq.br/1362170231777201",
      email: "mailto:eliomar@inf.ufg.br" },
    { id: 3, image: "assets/Iwens-Sene-2.png",
      name: "IWENS GERVASIO SENE JUNIOR",
      position: "Doutor em Engenharia Elétrica",
      description: "Áreas de atuação: Sistemas de Computação (Sistemas Operacionais, Redes de Computadores, Sistemas Distribuídos)",
      lattes: "http://lattes.cnpq.br/3693296350551971",
      email: "mailto:iwens@inf.ufg.br" },
    { id: 4, image: "assets/sanderson.jpg",
      name: "Sanderson de Oliveira de Macedo",
      position: "Mestre em Ciência da Computação",
      description: "Áreas de atuação: Aprendizagem de máquina, Deep Learning, Inteligência Artificial e Visão Computacional",
      lattes: "http://lattes.cnpq.br/3014212507684230",
      email: "mailto:slvieira@ufg.br" },
  ];

  const residentes = [
    { id: 6, image: "assets/MV final.jpg",
      name: "Marcos Vinícius de Morais",
      position: "Pós-graduando em Sistemas e Agentes Inteligentes",
      description: "Projeto: Modernização do Agendamento e Registro de Audiências" },
    { id: 4, image: "assets/PM editada .jpeg",
      name: "Patrick Fernandes Marins",
      position: "Pós-graduando em Sistemas e Agentes Inteligentes",
      description: "Projeto: Modernização e Automação da Folha de Pagamentos" },
    { id: 5, image: "assets/PR editada.jpg",
      name: "Paulo Roberto Vieira",
      position: "Pós-graduando em Sistemas e Agentes Inteligentes",
      description: "Projeto: Modernização e Automação da Folha de Pagamentos" },
    { id: 3, image: "assets/Pedro.png",
      name: "Pedro Koziel",
      position: "Pós-graduando em Sistemas e Agentes Inteligentes",
      description: "Projeto: Consulta Estoque" },
    { id: 1, image: "assets/HD editada.jpg",
      name: "Hailton David Lemos",
      position: "Pós-graduando em Sistemas e Agentes Inteligentes",
      description: "Projetos: Licitafácil e Contratafácil" },
    { id: 2, image: "assets/Wagner.jpg",
      name: "Wagner Hélio da Silva Filho",
      position: "Pós-graduando em Sistemas e Agentes Inteligentes",
      description: "Projeto: Controle de Frota" },
  ];

  const icon = (src, alt, cls) => `<img src="${src}" alt="${alt}" class="${cls}">`;

  function socialLinks(m) {
    const out = [];
    if (m.phone)  out.push(`<a href="${m.phone}"  target="_blank" rel="noopener noreferrer">${icon("assets/phone.png","Telefone","social-icon")}</a>`);
    if (m.email)  out.push(`<a href="${m.email}"  target="_blank" rel="noopener noreferrer">${icon("assets/email.png","Email","social-icon")}</a>`);
    if (m.lattes) out.push(`<a href="${m.lattes}" target="_blank" rel="noopener noreferrer">${icon("assets/plataforma-lattes.jpg","LATTES","lattes-icon")}</a>`);
    return out.join("");
  }

  const card = (m) => `
    <div class="member-card">
      <div class="member-image-container">
        <img src="${m.image}" alt="${m.name}" class="member-image">
      </div>
      <h3 class="member-name">${m.name}</h3>
      <p class="member-position">${m.position ?? ""}</p>
      <p class="member-description">${m.description ?? ""}</p>
      <div class="social-links">${socialLinks(m)}</div>
    </div>`;

  gridGestores.innerHTML   = gestores.map(card).join("");
  gridDocentes.innerHTML   = docentes.map(card).join("");
  gridResidentes.innerHTML = residentes.map(card).join("");
})();
