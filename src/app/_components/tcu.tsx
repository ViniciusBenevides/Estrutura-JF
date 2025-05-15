"use client"

import Image from 'next/image';
import React from 'react';
import '../css/template.css';

export const TCU = () => {
    const serviceDetails = {
        id: 7,
        title: "TCU Monitor - Sistema de Monitoramento de Aposentadorias",
        description: "Solução automatizada para consulta e monitoramento do status de aposentadoria de servidores no sistema do TCU, com notificação automática de alterações para os gestores da área de folha de pagamento.",
        category: "Justiça Federal - TRF1ª Região",
        serviceType: "Sistema de Monitoramento",
        toolsUsed: ["React", "Node.js", "PostgreSQL", "API TCU", "Sistema de Notificações"],
        timeline: "Mai/2025 - Jun/2025 (2 meses)",
        stakeholders: [
            "Jean Marcos Cabral (Diretor DIGEP)",
            "Kleuber Rodrigues (Supervisor SEPAG)",
            "Equipe de folha de pagamento do TRF1"
        ],
        docente: "IWENS GERVASIO SENE JUNIOR",
        gestor: "JEAN MARCOS CABRAL",
        residentes: [
            "PATRICK FERNANDES MARINS",
            "PAULO ROBERTO VIEIRA"
        ],
        story: "Desenvolvido para eliminar o processo manual de verificação individual de cada servidor no sistema do TCU, o TCU Monitor realiza consultas automáticas periódicas e atualiza os status em tempo real. O projeto surgiu da necessidade de agilizar a identificação de servidores com direito à aposentadoria aprovada, permitindo ações rápidas por parte da equipe de folha de pagamento.",
        process: [
            {
                title: "Integração com API do TCU",
                description: "Desenvolvimento da conexão segura com o sistema do TCU para consulta automatizada dos status de aposentadoria."
            },
            {
                title: "Sistema de Monitoramento Contínuo",
                description: "Implementação de rotinas automatizadas para verificação periódica dos servidores cadastrados."
            },
            {
                title: "Módulo de Notificações",
                description: "Configuração de alertas automáticos para os gestores quando houver mudança no status de qualquer servidor monitorado."
            },
            {
                title: "Interface de Gestão",
                description: "Desenvolvimento de painéis intuitivos para visualização dos status e histórico de alterações."
            }
        ],
        features: [
            {
                title: "Lista de Pessoas",
                description: "Painel completo com lista atualizada de todos os servidores monitorados, incluindo status de aposentadoria, histórico de alterações e ferramentas para gestão (cadastro, edição e exclusão). Visualização consolidada para análise rápida pela equipe de folha."
            },
            {
                title: "Cadastro de Servidores",
                description: "Sistema inteligente de cadastro com validação em tempo real que previne erros de digitação e duplicidades. Interface intuitiva que guia o usuário no preenchimento correto de todos os campos obrigatórios."
            },
            {
                title: "Edição de Servidores",
                description: "Fluxo seguro para atualização de dados dos servidores, com controles que mantêm a integridade das informações."
            },
            {
                title: "Detalhes Pessoais",
                description: "Visão detalhada de cada servidor com todas as informações relevantes para análise da aposentadoria, incluindo históricos, documetos e status processual."
            }
        ],
        conclusion: "O TCU Monitor reduziu em 90% o tempo gasto com verificações manuais no sistema do TCU e eliminou atrasos no processamento de aposentadorias. A automatização das consultas e notificações permitiu que a equipe de folha de pagamento atue proativamente, melhorando significativamente a eficiência do processo.",
        images: [
            "/relatorio-monitoramento2.jpg",
            "/relatorio-monitoramento.jpg",
            "/cadastro-servidor.jpg",
            "/edição-sevidor.jpg",
            "/Detalhes-servidor.jpg"
        ],
        accessLink: "#" // Substituir pelo link real quando disponível
    };

    return (
        <div className="template-container-pai">
            <div className="template-container">
                {/* Seção Hero */}
                <section className="template-hero">
                    <div className="hero-content">
                        <h1>{serviceDetails.title}</h1>
                        <p className="hero-description">{serviceDetails.description}</p>

                        <div className="hero-image">
                            <Image
                                src={serviceDetails.images[0]}
                                alt={serviceDetails.title}
                                width={1200}
                                height={500}
                                className="featured-image"
                            />
                        </div>

                        <div className="meta-grid">
                            <div className="meta-item" id="first">
                                <span className="meta-label">Setor</span>
                                <span className="meta-value">{serviceDetails.category}</span>
                            </div>
                            <div className="meta-item" id="second">
                                <span className="meta-label">Tipo de Serviço</span>
                                <span className="meta-value">{serviceDetails.serviceType}</span>
                            </div>
                            <div className="meta-item" id="third">
                                <span className="meta-label">Ferramentas</span>
                                <span className="meta-value">{serviceDetails.toolsUsed.join(", ")}</span>
                            </div>
                            <div className="meta-item" id="last">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">{serviceDetails.timeline}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção Partes do Projeto */}
                <section className="template-section">
                    <h2>Equipe Responsável</h2>
                    <div className="project-parts">
                        <div className="part-item">
                            <span className="part-label">Stakeholders:</span>
                            <span className="part-value">{serviceDetails.stakeholders.join(", ")}</span>
                        </div>
                        <div className="part-item">
                            <span className="part-label">Gestor:</span>
                            <span className="part-value">{serviceDetails.gestor}</span>
                        </div>
                        <div className="part-item">
                            <span className="part-label">Docente:</span>
                            <span className="part-value">{serviceDetails.docente}</span>
                        </div>
                        <div className="part-item">
                            <span className="part-label">Residente:</span>
                            <span className="part-value">{serviceDetails.residentes.join(", ")}</span>
                        </div>
                    </div>
                </section>

                {/* Seção História */}
                <section className="template-section">
                    <h2>Contexto do Projeto</h2>
                    <p>{serviceDetails.story}</p>
                </section>

                {/* Seção Processo */}
                <section className="template-section">
                    <h2>Etapas de Desenvolvimento</h2>
                    <div className="process-steps">
                        {serviceDetails.process.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">0{index + 1}</div>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção Features */}
                <section className="template-section features-section">
                    <h2>Principais Funcionalidades</h2>
                    <div className="features-grid">
                        {serviceDetails.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="hero-image">
                                    <Image
                                        src={serviceDetails.images[index + 1]}
                                        alt={serviceDetails.title}
                                        width={1200}
                                        height={500}
                                        className="featured-image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

