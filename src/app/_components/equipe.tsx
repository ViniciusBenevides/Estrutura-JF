"use client"

import React from 'react';
import '../css/equipe.css';

interface Pessoas {
    id: number;
    image: string;
    name: string;
    position: string;
    description: string;
    phone?: string;
    email?: string;
    lattes?: string;
}

export const _Equipe = () => {
    const gestores: Pessoas[] = [
        {
            id: 1,
            image: "/Luciana edt1.jpg",
            name: "Luciana Marinho de Melo",
            position: "Diretora da 15ª Vara Federal",
            description: "Vinculada ao projeto de apoio à realização de audiências.",
            phone: "tel:6236238650",
            email: "mailto:15vara.go@trf1.jus.br"
        },
        {
            id: 2,
            image: "/Caio.jpg",
            name: "Caio Sotero Rosa",
            position: "Diretor do Núcleo de Administração",
            description: "Vinculado aos projetos Licitafácil e Contratafácil",
            phone: "tel:6232261520",
            email: "malito:nucad.go@trf1.jus.br"
        },
        {
            id: 3,
            image: "/jean.jpg",
            name: "Jean Marcos Cabral",
            position: "Diretor da Divisão de Gestão de Pessoas",
            description: "Vinculado ao projeto de aperfeiçoamento do controle de folha de pagamento",
            phone: "tel:6232261561",
            email: "mailto:nucgp.go@trf1.jus.br"
        },
        {
            id: 4,
            image: "/RonaldoJF.jpg",
            name: "Ronaldo Borges Oliveira",
            position: "Diretor do Núcleo de Gestão Estratégica, Ambiental e de Apoio à Inovação",
            description: "Responsável pelo laboratório de inovação da SJGO.",
            phone: "",
            email: ""
        }
    ];

    const docentes: Pessoas[] = [
        {
            id: 1,
            image: "/Iwens-Sene-2.png",
            name: "IWENS GERVASIO SENE JUNIOR",
            position: "Doutor em Engenharia Elétrica",
            description: "Áreas de atuação: Sistemas de Computação (Sistemas Operacionais, Redes de Computadores, Sistemas Distribuídos)",
            lattes: "http://lattes.cnpq.br/3693296350551971",
            email: "mailto:iwens@inf.ufg.br"
        },
        {
            id: 2,
            image: "/ronaldoMC.png",
            name: "Ronaldo Martins da Costa",
            position: "Doutor em Engenharia Elétrica",
            description: "Áreas de atuação: Visão Computacional, Processamento de Imagens e Sinais e Linguagens de Programação",
            lattes: "http://lattes.cnpq.br/7080590204832262",
            email: "malito:ronaldocosta@inf.ufg.br"
        },
        {
            id: 3,
            image: "/sanderson.jpg",
            name: "Sanderson de Oliveira de Macedo",
            position: "Mestre em Ciência da Computação",
            description: "Áreas de atuação: Aprendizagem de máquina, Deep Learning, Inteligência Artificial e Visão Computacional",
            lattes: "http://lattes.cnpq.br/3014212507684230",
        },
        {
            id: 4,
            image: "/eliomar.png",
            name: "Eliomar Araújo de Lima",
            position: "Doutor em Engenharia Elétrica",
            description: "Áreas de atuação: Engenharia de sistemas de informação",
            lattes: "http://lattes.cnpq.br/1362170231777201",
            email: "malito:eliomar@inf.ufg.br"
        }
    ];

    const residentes: Pessoas[] = [
        {
            id: 1,
            image: "/HD editada.jpg",
            position: "Pós-graduando em Sistemas e Agentes Inteligentes",
            name: "Hailton David Lemos",
            description: "Projetos: Licitafácil e Contratafácil"
        },
        {
            id: 2,
            image: "/FG.jpg",
            name: "Felipe Galvão Lagares",
            position: "Pós-graduando em Sistemas e Agentes Inteligentes",
            description: "Projetos: Licitafácil e Contratafácil"
        },
        {
            id: 3,
            image: "/RA editada.jpg",
            name: "Raphael Abenom dos Santos Silva",
            position: "Pós-graduando em Sistemas e Agentes Inteligentes",
            description: "Projetos: Licitafácil e Contratafácil"
        },
        {
            id: 4,
            image: "/PM editada .jpeg",
            name: "Patrick Fernandes Marins",
            position: "Pós-graduando em Sistemas e Agentes Inteligentes",
            description: "Projeto: Modernização e Automação da Folha de Pagamentos"
        },
        {
            id: 5,
            image: "/PR editada.jpg",
            name: "Paulo Roberto Vieira",
            position: "Pós-graduando em Sistemas e Agentes Inteligentes",
            description: "Projeto: Modernização e Automação da Folha de Pagamentos"
        },
        {
            id: 6,
            image: "/MV final.jpg",
            name: "Marcos Vinícius de Morais",
            position: "Pós-graduando em Sistemas e Agentes Inteligentes",
            description: "Projeto: Modernização do Agendamento e Registro de Audiências"
        }
    ];

    return (
        <div className="equipe-container">
            <div className="equipe-header">
                <p className="equipe-subtitle">Conheça Nossa Equipe</p>
                <h2 className="equipe-title">Nossos Gestores</h2>
                <p className="equipe-description">
                    Lideranças estratégicas que orientam e supervisionam os projetos de inovação,
                    garantindo alinhamento com as diretrizes institucionais do Poder Judiciário.
                </p>
            </div>

            <div className="equipe-grid">
                {gestores.map((member) => (
                    <div className="member-card" key={member.id}>
                        <div className="member-image-container">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="member-image"
                            />
                        </div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-position">{member.position}</p>
                        <p className="member-description">{member.description}</p>
                        <div className="social-links">
                            {member.phone && (
                                <a href={member.phone} target="_blank" rel="noopener noreferrer">
                                    <img src="/phone.png" alt="Phone" className="social-icon" />
                                </a>
                            )}
                            {member.email && (
                                <a href={member.email} target="_blank" rel="noopener noreferrer">
                                    <img src="/email.png" alt="Email" className="social-icon" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="equipe-header">
                <h2 className="equipe-title">Nossos Docentes</h2>
                <p className="equipe-description">
                    Especialistas acadêmicos com ampla experiência em pesquisa e desenvolvimento,
                    responsáveis pela orientação técnica e científica dos projetos de inovação.
                </p>
            </div>

            <div className="equipe-grid">
                {docentes.map((member) => (
                    <div className="member-card" key={member.id}>
                        <div className="member-image-container">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="member-image"
                            />
                        </div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-position">{member.position}</p>
                        <p className="member-description">{member.description}</p>
                        <div className="social-links">
                            {member.lattes && (
                                <a href={member.lattes} target="_blank" rel="noopener noreferrer">
                                    <img src="/plataforma-lattes.jpg" alt="LATTES" className="lattes-icon" />
                                </a>
                            )}
                            {member.email && (
                                <a href={member.email} target="_blank" rel="noopener noreferrer">
                                    <img src="/email.png" alt="Email" className="social-icon" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="equipe-header">
                <h2 className="equipe-title">Nossos Residentes</h2>
                <p className="equipe-description">
                    Profissionais em formação que aplicam na prática os conhecimentos adquiridos,
                    desenvolvendo soluções inovadoras para os desafios do Poder Judiciário.
                </p>
            </div>

            <div className="equipe-grid">
                {residentes.map((member) => (
                    <div className="member-card" key={member.id}>
                        <div className="member-image-container">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="member-image"
                            />
                        </div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-position">{member.position}</p>
                        <p className="member-description">{member.description}</p>
                        <div className="social-links">
                            {member.lattes && (
                                <a href={member.lattes} target="_blank" rel="noopener noreferrer">
                                    <img src="/plataforma-lattes.jpg" alt="LATTES" className="lattes-icon" />
                                </a>
                            )}
                            {member.email && (
                                <a href={member.email} target="_blank" rel="noopener noreferrer">
                                    <img src="/email.png" alt="Email" className="social-icon" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};