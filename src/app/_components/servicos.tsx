"use client"

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import '../css/servicos.css';

export const NossosServicos = () => {
    const services = [
        {
            id: 1,
            image: "/law-judge-gavel.jpg",
            title: "AgendaFácil - Assistência em Agendamento de Audiências",
            description: "Plataforma integrada para agendamento, controle e acompanhamento de audiências judiciais, otimizando a gestão do calendário forense e reduzindo conflitos de agenda.",
        },
        {
            id: 3,
            image: "/licitacao.webp",
            title: "LicitaFácil - Automação e Gerência de Compras e Licitações",
            description: "Sistema completo para digitalização e automação de processos licitatórios, desde a publicação de editais até a homologação, garantindo transparência e conformidade legal.",
        },
        {
            id: 2,
            image: "/automocao-de-contratos.jpg",
            title: "GestãoFácil - Automação e Gerência de Gestão de Contratos",
            description: "Solução integrada para criação, acompanhamento e renovação de contratos administrativos, com alertas automáticos para prazos e obrigações contratuais.",
        },
        {
            id: 4,
            image: "/folha-de-pagamento.jpg",
            title: "FolhaFácil - Modernização da Folha de Pagamento",
            description: "Plataforma avançada para gestão de folha de pagamento do judiciário, integrando sistemas de recursos humanos, financeiro e contabilidade com segurança e eficiência.",
        },
        {
            id: 5,
            image: "/controle-de-frota.png",
            title: "FrotaFácil - Automação e Gerência da Frota de Veículos",
            description: "Plataforma unificada para controle operacional de frotas oficiais, integrando módulos de requisições, abastecimento, manutenção e auditoria com autenticação LDAP e conformidade à IN 14-08/TRF1.",
        },
        {
            id: 6,
            image: "/consulta.webp",
            title: "RequisiçãoFácil - Automação e Gerência de Requisições de Materiais",
            description: "Sistema web responsivo para consulta inteligente de materiais institucionais, integrado ao SICAM, com filtros avançados, controle de validade e gestão de itens em desuso.",
        }
    ];

    return (
        <section id="projetos" className="servicos-container">
            <div className="servicos-header">
                <span className="servicos-subtitle">Nossos Projetos</span>
                <h2 className="servicos-title">Soluções Tecnológicas para o Judiciário</h2>
                <p className="servicos-description">
                    Oferecemos especialização em desenvolvimento de sistemas e inovação tecnológica
                    voltados especificamente para as necessidades do Poder Judiciário Federal.
                </p>
            </div>

            <div className="servicos-grid">
                {services.map((service) => (
                    <Link href={`/servicos/${service.id}`} key={service.id} className="service-card-link">
                        <div className="service-card">
                            <div className="card-image-container">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="service-image"
                                />
                                <div className="project-button">Ver Projeto</div>
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                            <div className="project-button-container">
                                <div className="project-button2"><img src="/arrow-up-right-svgrepo-com.svg" id="arrow" />Ver Projeto</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};