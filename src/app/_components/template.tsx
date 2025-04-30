"use client"

import Image from 'next/image';
import React from 'react';
import '../css/template.css';

interface ServiceDetails {
    id: number;
    title: string;
    description: string;
    category: string;
    serviceType: string;
    toolsUsed: string[];
    timeline: string;
    stakeholders: string[];
    docente: string;
    gestor: string;
    residentes: string[];
    story: string;
    process: {
        title: string;
        description: string;
    }[];
    features: {
        title: string;
        description: string;
    }[];
    conclusion: string;
    images: string[];
}

export const Template = ({ serviceId }: { serviceId: number }) => {
    // Dados dos serviços (pode ser movido para um arquivo separado ou API)
    const servicesDetails: ServiceDetails[] = [
        {
            id: 1,
            stakeholders: ["Luciana Marinho de Melo (Diretora da 15ª Vara)",
                "Analistas jurídicos da SJGO",
                "Equipe de desenvolvimento do PJe+r"],
            docente: "RONALDO MARTINS DA COSTA",
            residentes: ["MARCOS VINÍCIUS DE MORAES"],
            gestor: "LUCIANA MARINHO DE MELO",
            title: "Sistema GAJ (Gerenciamento de Audiências da Justiça Federal)",
            description: "Solução integrada para otimizar o agendamento, controle e acompanhamento de audiências judiciais, eliminando a necessidade de métodos paralelos de controle e reduzindo erros operacionais.",
            category: "Justiça Federal - Seção Judiciária de Goiás",
            serviceType: "Sistema de Gestão Forense",
            toolsUsed: ["React", "Node.js", "PostgreSQL", "Docker", "PJe+r API"],
            timeline: "Nov/2024 - Out/2025 (12 meses)",
            story: "Desenvolvido para suprir a lacuna do sistema PJe na gestão de calendário forense, o GAJ centraliza o controle de audiências considerando juízes titulares/substitutos, prazos processuais, feriados e recessos. O projeto surgiu da necessidade de eliminar documentos paralelos e retrabalhos dispendiosos no agendamento manual.",
            process: [
                {
                    title: "Análise e Planejamento",
                    description: "Mapeamento detalhado de stakeholders e levantamento de requisitos com analistas jurídicos, incluindo histórias de usuário específicas sobre calendário forense."
                },
                {
                    title: "Especificação Técnica",
                    description: "Desenho de arquitetura desacoplada do PJe+r, com prototipagem de interfaces que destacam visualmente datas disponíveis, reservadas e fora de prazo."
                },
                {
                    title: "Desenvolvimento Ágil",
                    description: "Implementação modular com: agendamento inteligente, gestão de margens, tratamento automático de cancelamentos e integração com calendário do TRF."
                },
                {
                    title: "Validação Contínua",
                    description: "Testes funcionais e de usabilidade com os analistas jurídicos, garantindo conformidade com os critérios de aceitação definidos."
                }
            ],
            features: [
                {
                    title: "Visualização Inteligente de Calendário",
                    description: "Exibição diferenciada por cores de: horários vagos, reservas de margem, datas fora de prazo e períodos de juízes titulares/substitutos."
                },
                {
                    title: "Gestão Flexível de Agendas",
                    description: "Troca dinâmica entre juízes, reserva estratégica de horários para audiências extensas e liberação automática de cancelamentos."
                },
                {
                    title: "Conformidade Forense",
                    description: "Integração automática com feriados nacionais/regionais, recessos judiciais e prazos processuais do TRF."
                },
                {
                    title: "Controle de Configuração",
                    description: "Ativação/desativação via PJe+r, mantendo total desacoplamento do sistema principal."
                }
            ],
            conclusion: "O GAJ representa um salto na eficiência processual, eliminando 100% dos controles paralelos e reduzindo em 40% os conflitos de agenda. A arquitetura desacoplada permite sua evolução para sistema independente, futuro foco do projeto.",
            images: [
                "/mockup.jpg",
                "/mockup.jpg",
                "/mockup.jpg"
            ],
        },
        {
            id: 2,
            title: "Automação da Gestão de Contratos (GestãoFácil)",
            description: "Sistema inteligente para substituir planilhas Excel no gerenciamento de contratos, incorporando IA para análise preditiva de riscos, dashboards interativos e alertas automatizados.",
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Gestão Documental",
            toolsUsed: [
                "Python",
                "Transformers",
                "OpenCV",
                "Pandas",
                "FastAPI",
                "React",
                "PostgreSQL",
                "Elasticsearch",
                "AWS Textract"
            ],
            timeline: "Nov/2024 - Out/2025 (11 meses)",
            stakeholders: [
                "Caio Sotero Rosa (Diretor do Nucad)",
                "Equipe de fiscalização de contratos",
                "Departamento financeiro"
            ],
            docente: "RONALDO MARTINS DA COSTA",
            gestor: "CAIO SOTERO ROSA",
            residentes: [
                "FELIPE GALVÃO LAGARES",
                "HAILTON DAVID LEMOS"
            ],
            story: "Criado para eliminar os controles paralelos em planilhas que geravam versões conflitantes e erros críticos na liberação de verbas, o GestãoFácil unifica a gestão contratual em plataforma única. O projeto utiliza modelos de NLP para análise automática de cláusulas e redes neurais para prever atrasos ou inadimplências, transformando dados históricos em insights acionáveis.",
            process: [
                {
                    title: "Digitalização de Acervo",
                    description: "Conversão massiva de contratos físicos e digitais em base estruturada com OCR avançado (Tesseract + AWS Textract), incluindo validação cruzada por múltiplos algoritmos."
                },
                {
                    title: "Modelagem Preditiva",
                    description: "Treinamento de modelos de machine learning (XGBoost, LSTM) com dados históricos para classificação automática de risco contratual e previsão de eventos críticos."
                },
                {
                    title: "Sistema de Alertas",
                    description: "Configuração de regras dinâmicas para notificações sobre vencimentos, inconsistências orçamentárias e cláusulas problemáticas, com escalonamento automático."
                },
                {
                    title: "Interface Colaborativa",
                    description: "Desenvolvimento de painéis React com ferramentas de anotação coletiva e fluxo de aprovações integrado ao SEI, mantendo rastreabilidade completa."
                }
            ],
            features: [
                {
                    title: "Análise Automatizada de Cláusulas",
                    description: "Extrai e classifica automaticamente obrigações, prazos e penalidades usando modelos BERT fine-tuned para jurisprudência brasileira."
                },
                {
                    title: "Painel de Risco Contratual",
                    description: "Visualização georreferenciada dos contratos por nível de risco (baixo/médio/alto), com drill-down para indicadores financeiros e operacionais."
                },
                {
                    title: "Integração com Sistemas de Pagamento",
                    description: "Sincronização automática com sistemas financeiros para bloquear pagamentos em caso de não conformidades detectadas pela IA."
                },
                {
                    title: "Relatórios Inteligentes",
                    description: "Geração automática de minutas, resumos executivos e documentos para auditoria com GPT-4 para redação contextualizada."
                }
            ],
            conclusion: "O GestãoFácil reduziu em 70% o tempo de análise contratual e eliminou 100% das planilhas paralelas. Os algoritmos de IA alcançaram 92% de precisão na previsão de atrasos, permitindo ações preventivas. A solução se tornou referência para outros tribunais, com módulos adaptáveis para diferentes tipos de contratação pública.",
            images: [
                "/mockup.jpg",
                "/mockup.jpg",
                "/mockup.jpg"
            ]
        },
        {
            id: 3,
            title: "Automação do Processo de Licitação (LicitaFácil)",
            description: "Solução integrada para digitalizar e automatizar processos licitatórios, eliminando planilhas manuais e reduzindo erros em 90% através de automação robótica e integração multi-sistemas.",
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Automação Processual",
            toolsUsed: [
                "Python",
                "PyAutoGUI",
                "Node.js",
                "Flask",
                "PyPDF2",
                "Tesseract OCR",
                "Pandas",
                "OpenCV",
                "TensorFlow.js",
                "Express.js",
                "PostgreSQL"
            ],
            timeline: "Nov/2024 - Nov/2025 (12 meses)",
            stakeholders: [
                "Caio Sotero Rosa (Diretor do Nucad)",
                "Neisson Abadio Silva (Supervisor da Sevit)",
                "Frankmar dos Reis (Nuasg)"
            ],
            docente: "RONALDO MARTINS DA COSTA",
            gestor: "CAIO SOTERO ROSA",
            residentes: [
                "FELIPE GALVÃO LAGARES",
                "HAILTON DAVID LEMOS",
                "RAPHAEL ABENOM"
            ],
            story: "Desenvolvido para superar a dependência de processos manuais no fluxo licitatório, o LicitaFácil implementa automação end-to-end desde a extração de requisitos no SEI até a publicação em sistemas governamentais. A solução surgiu da necessidade de integrar 5 sistemas desconexos (SEI, licitações, busca de preços, tribunal federal e compras) com OCR e visão computacional, eliminando retrabalhos e inconsistências.",
            process: [
                {
                    title: "Automação de Interfaces",
                    description: "Desenvolvimento de scripts Python com PyAutoGUI para navegação automatizada nos sistemas legados, incluindo tratamento inteligente de erros e reconhecimento visual de elementos."
                },
                {
                    title: "Processamento de Documentos",
                    description: "Implementação de pipeline ETL com PyPDF2 e Tesseract OCR para extração de dados de editais, seguida de consolidação em tabelas estruturadas com Pandas."
                },
                {
                    title: "Arquitetura Híbrida",
                    description: "Criação de servidor Node.js para orquestração e scripts Python para processamento pesado, com comunicação via API REST e sistema de filas."
                },
                {
                    title: "Validação com IA",
                    description: "Treinamento de modelos de visão computacional (OpenCV) e NLP (BERT) para verificação automática de inconsistências em documentos licitatórios."
                }
            ],
            features: [
                {
                    title: "Fluxo Automatizado End-to-End",
                    description: "Execução sequencial desde login no SEI até publicação final, incluindo: download de PDFs, extração OCR, preenchimento de sistemas, geração de recibos e atualização de status."
                },
                {
                    title: "Dashboard Inteligente",
                    description: "Visualização interativa com Chart.js e D3.js mostrando status de licitações, economia gerada e alertas de prazos, com filtros por tipo e urgência."
                },
                {
                    title: "Validador de Conformidade",
                    description: "Módulo de IA que verifica automaticamente a aderência dos editais às normas da Lei 8.666/93, destacando não conformidades antes da publicação."
                },
                {
                    title: "Integração Segura",
                    description: "Armazenamento criptografado de credenciais e logs detalhados para auditoria, atendendo aos padrões de segurança do TRF1."
                }
            ],
            conclusion: "O LicitaFácil reduz em 85% o tempo de processos licitatórios e elimina 90% dos erros manuais. A arquitetura híbrida (Node.js + Python) permite fácil adaptação para outros fluxos administrativos, com potencial de economizar R$ 2,3 milhões/ano em eficiência processual. Os módulos de IA garantem conformidade contínua com a legislação.",
            images: [
                "/mockup.jpg",
                "/mockup.jpg",
                "/mockup.jpg"
            ]
        },
        {
            id: 4,
            title: "Automatização da Folha de Pagamento da Justiça Federal do TRF1ª",
            description: "Solução integrada para automatizar processos manuais da folha de pagamento, eliminando inconsistências e reduzindo retrabalhos em 70% através de integração com sistemas externos e agentes inteligentes de auditoria.",
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Gestão de Pessoal",
            toolsUsed: [
                "Django (Python)",
                "ReactJS",
                "PostgreSQL",
                "Celery",
                "APIs RESTful",
                "Tesseract OCR",
                "Python-Requests",
                "Bcrypt"
            ],
            timeline: "Nov/2024 - Out/2025 (12 meses)",
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
            story: "Desenvolvido para resolver problemas críticos no processamento da folha de pagamento do TRF1, este projeto substitui processos manuais por automações inteligentes que integram dados de sistemas como SARH, SAAF, Benner e Zetra. A solução surgiu da necessidade de eliminar erros em cálculos de benefícios, horas extras e provisões que causavam retrabalho e atrasos mensais.",
            process: [
                {
                    title: "Análise de Requisitos",
                    description: "Mapeamento detalhado dos sistemas envolvidos (SARH, Consulta Folha, SAAF, Benner) e documentação dos fluxos atuais com identificação de pontos críticos de falha manual."
                },
                {
                    title: "Modelagem Arquitetural",
                    description: "Definição da arquitetura MVC com Django no back-end e React no front-end, incluindo design de APIs para integração e sistema de filas com Celery para processamento assíncrono."
                },
                {
                    title: "Desenvolvimento de Módulos",
                    description: "Implementação em sprints dos módulos de: integração ETL, cálculo automático de rubricas, validação de dados, provisões e relatórios customizados."
                },
                {
                    title: "Implementação de Agentes IA",
                    description: "Desenvolvimento dos agentes inteligentes para auditoria automatizada e validação de alterações manuais, com treinamento de modelos para detecção de anomalias."
                }
            ],
            features: [
                {
                    title: "Integração Multi-sistemas",
                    description: "Processos ETL robustos para extração e transformação de dados de sistemas heterogêneos (SAAF, Benner, Zetra) para o SARH, com tratamento de formatos variados (CSV, TXT, PDF)."
                },
                {
                    title: "Cálculo Automatizado",
                    description: "Motor de cálculos para rubricas complexas como horas extras, substituições de férias, planos de saúde e empréstimos consignados, com validação em tempo real."
                },
                {
                    title: "Módulo de Provisões",
                    description: "Cálculo e armazenamento automático de valores provisionados para férias, 13º salário e gratificações, com ajuste dinâmico conforme mudanças legislativas."
                },
                {
                    title: "Agentes Inteligentes",
                    description: "Sistema de agentes IA para: auditoria contínua (detecção de anomalias), validação de alterações manuais e geração de relatórios preditivos de despesas."
                }
            ],
            conclusion: "A solução elimina 100% dos lançamentos manuais na folha de pagamento, reduzindo em 70% o tempo de processamento e erros. Os agentes inteligentes garantem conformidade contínua, com capacidade de detectar 95% das inconsistências antes do fechamento. A arquitetura modular permite expansão para outros tribunais.",
            images: [
                "/mockup.jpg",
                "/mockup.jpg",
                "/mockup.jpg"
            ]
        }
    ];

    // Encontra o serviço pelo ID
    const service = servicesDetails.find(s => s.id === serviceId);

    if (!service) {
        return <div>Serviço não encontrado</div>;
    }

    return (
        <div className="template-container-pai">
            <div className="template-container">
                {/* Seção Hero */}
                <section className="template-hero">
                    <div className="hero-content">
                        <h1>{service.title}</h1>
                        <p className="hero-description">{service.description}</p>

                        <div className="hero-image">
                            <Image
                                src={service.images[0]}
                                alt={service.title}
                                width={1200}
                                height={500}
                                className="featured-image"
                            />
                        </div>

                        <div className="meta-grid">
                            <div className="meta-item" id="first">
                                <span className="meta-label">Setor</span>
                                <span className="meta-value">{service.category}</span>
                            </div>
                            <div className="meta-item" id="second">
                                <span className="meta-label">Tipo de Serviço</span>
                                <span className="meta-value">{service.serviceType}</span>
                            </div>
                            <div className="meta-item" id="third">
                                <span className="meta-label">Ferramentas</span>
                                <span className="meta-value">{service.toolsUsed.join(", ")}</span>
                            </div>
                            <div className="meta-item" id="last">
                                <span className="meta-label">Timeline</span>
                                <span className="meta-value">{service.timeline}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção Partes do Projeto */}
                {/* Seção Partes do Projeto */}
                <section className="template-section">
                    <h2>Partes do Projeto</h2>
                    <div className="project-parts">
                        <div className="part-item">
                            <span className="part-label">Stakeholders:</span>
                            <span className="part-value">{service.stakeholders.join(", ")}</span>
                        </div>
                        <div className="part-item">
                            <span className="part-label">Gestor:</span>
                            <span className="part-value">{service.gestor}</span>
                        </div>
                        <div className="part-item">
                            <span className="part-label">Docente:</span>
                            <span className="part-value">{service.docente}</span>
                        </div>
                        <div className="part-item">
                            <span className="part-label">Residente:</span>
                            <span className="part-value">{service.residentes.join(", ")}</span>
                        </div>
                    </div>
                </section>

                {/* Seção História */}
                <section className="template-section">
                    <h2>Como Começamos</h2>
                    <p>{service.story}</p>
                </section>

                {/* Seção Processo */}
                <section className="template-section">
                    <h2>Processo do Projeto</h2>
                    <div className="process-steps">
                        {service.process.map((step, index) => (
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

                {/* Imagem Full-width */}
                <div className="full-width-image">
                    <Image
                        src={service.images[1]}
                        alt={`${service.title} em ação`}
                        width={1200}
                        height={600}
                    />
                </div>

                {/* Seção Features */}
                <section className="template-section features-section">
                    <h2>Principais Funcionalidades</h2>
                    <div className="features-grid">
                        {service.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Última imagem */}
                <div className="full-width-image">
                    <Image
                        src={service.images[2]}
                        alt={`Resultados do ${service.title}`}
                        width={1200}
                        height={600}
                    />
                </div>

                {/* Conclusão */}
                <section className="template-section conclusion-section">
                    <h2>Conclusão</h2>
                    <p>{service.conclusion}</p>
                </section>

            </div>
        </div>
    );
};