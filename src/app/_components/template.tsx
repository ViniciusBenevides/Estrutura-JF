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
    documentationLink: string;
    userDocumentationLink?: string;
    technicalDocumentationLink?: string;
    sourceCodeLink?: string;
}

export const Template = ({ serviceId }: { serviceId: number }) => {
    const servicesDetails: ServiceDetails[] = [
        {
            id: 1,
            stakeholders: [
                "Luciana Marinho de Melo - Diretora da 15ª Vara do Juizado Especial Federal Cível da SJGO",
                "Analistas jurídicos responsáveis pelo agendamento de audiências",
                "Usuários da extensão PJe+r",
                "Equipe de gestão e desenvolvimento do PJe+r"
            ],
            docente: "Prof. Dr. Sanderson Oliveira de Macedo",
            residentes: ["Marcos Vinícius de Moraes"],
            gestor: "Luciana Marinho de Melo",
            title: "AgendaFácil - Assistência em Agendamento de Audiências",
            description: "O projeto visa desenvolver e implementar uma funcionalidade de assistência no processo de agendamento de audiências no sistema PJe, centralizando e automatizando o controle das datas e horários.",
            category: "Justiça Federal - Seção Judiciária do Estado de Goiás",
            serviceType: "Extensão para Sistema de Gestão Forense",
            toolsUsed: ["React", "JavaScript", "CSS", "Extensão do Chrome"],
            timeline: "Novembro/2024 - Outubro/2025",
            story: "Atualmente, o sistema PJe não oferece ferramentas para o controle de datas e horários de audiências, o que exige o uso de métodos paralelos e manuais.  Este projeto desenvolve uma funcionalidade integrada ao PJe+R para automatizar esse controle, facilitando a visualização de datas disponíveis para juízes titulares e substitutos, considerando feriados e recessos, com o objetivo de eliminar o retrabalho e o uso de documentos auxiliares. ",
            process: [
                {
                    title: "Análise e Planejamento",
                    description: "Levantamento de requisitos junto aos analistas jurídicos, mapeamento dos stakeholders e planejamento geral do projeto, definindo escopo, cronograma e riscos. "
                },
                {
                    title: "Especificação e Design do Sistema",
                    description: "Refinamento dos requisitos, criação de diagramas do sistema (UML), desenvolvimento de mockups e protótipos interativos para validação com os stakeholders. "
                },
                {
                    title: "Desenvolvimento e Integração",
                    description: "Codificação da lógica de negócio e da interface do usuário, seguida pela integração da funcionalidade como uma extensão no sistema PJe+r. "
                },
                {
                    title: "Validação e Testes",
                    description: "Disponibilização de uma versão de testes para validação funcional, de usabilidade e de aceitação junto aos usuários finais e stakeholders. "
                },
                {
                    title: "Implantação e Monitoramento",
                    description: "Planejamento do lançamento, criação da documentação de uso para os usuários finais e acompanhamento inicial do software em produção. "
                }
            ],
            features: [
                {
                    title: "Visualização Clara do Calendário",
                    description: "O calendário exibe datas com cores distintas: verde para dias com horários vagos e vermelho para dias totalmente ocupados.  Ao clicar em um dia, o usuário vê os horários disponíveis e ocupados. "
                },
                {
                    title: "Filtro por Juiz",
                    description: "Permite filtrar a visualização de datas disponíveis por Juiz Titular, Juiz Substituto ou visualizar todos, facilitando o agendamento conforme a necessidade. "
                },
                {
                    title: "Gestão de Horários e Cancelamentos",
                    description: "O sistema gerencia automaticamente os horários de audiências canceladas, tornando-os novamente disponíveis, incluindo as reservas de margem para audiências extensas. "
                },
                {
                    title: "Integração com o Calendário do Tribunal",
                    description: "A funcionalidade considera automaticamente feriados, recessos forenses e dias úteis, alinhada ao calendário oficial do Tribunal Regional Federal para garantir a precisão das datas. "
                }
            ],
            conclusion: "A implementação da assistência de agendamento visa fornecer uma visão clara do calendário forense e um controle simplificado das datas, eliminando o uso de documentos paralelos e o retrabalho.  A solução foi projetada de forma desacoplada para garantir sua independência e viabilizar futuras evoluções, como um sistema próprio. ",
            images: ["/PJe+R.png"
            ],
            documentationLink: "/PGP-GAJ.pdf",
            userDocumentationLink: "/Documentação de software - Documentação de Usuário.pdf",
            technicalDocumentationLink: "/doc-tecnica-gaj.pdf",
            sourceCodeLink: "https://github.com/ronaldocostaufg/PJe-R/archive/refs/heads/main.zip"
        },
        {
            id: 2,
            title: "GestãoFácil - Automação e Gerência de Gestão de Contratos",
            description: "Sistema inteligente para substituir planilhas Excel no gerenciamento de contratos, incorporando IA para análise preditiva de riscos, dashboards interativos e alertas automatizados.",
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Gestão Documental",
            toolsUsed: ["Python", "Transformers", "OpenCV", "Pandas", "FastAPI", "React", "PostgreSQL", "Elasticsearch", "AWS Textract"],
            timeline: "Nov/2024 - Out/2025 (11 meses)",
            stakeholders: ["Caio Sotero Rosa (Diretor do Nucad)", "Equipe de fiscalização de contratos", "Departamento financeiro"],
            docente: "RONALDO MARTINS DA COSTA",
            gestor: "CAIO SOTERO ROSA",
            residentes: ["HAILTON DAVID LEMOS"],
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
            images: ["/mockup.jpg"],
            documentationLink: "/PGP-Contratos.pdf"
        },
        {
            id: 3,
            title: "LicitaFácil - Automação e Gerência de Compras e Licitações",
            description: "Solução integrada para digitalizar e automatizar processos licitatórios, eliminando planilhas manuais e reduzindo erros em 90% através de automação robótica e integração multi-sistemas.",
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Automação Processual",
            toolsUsed: ["Python", "PyAutoGUI", "Node.js", "Flask", "PyPDF2", "Tesseract OCR", "Pandas", "OpenCV", "TensorFlow.js", "Express.js", "PostgreSQL"],
            timeline: "Nov/2024 - Nov/2025 (12 meses)",
            stakeholders: ["Caio Sotero Rosa (Diretor do Nucad)", "Neisson Abadio Silva (Supervisor da Sevit)", "Frankmar dos Reis (Nuasg)"],
            docente: "RONALDO MARTINS DA COSTA",
            gestor: "CAIO SOTERO ROSA",
            residentes: ["HAILTON DAVID LEMOS"],
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
            images: ["/mockup.jpg"],
            documentationLink: "/PGP-Contratos.pdf"
        },
        {
            id: 4,
            title: "FolhaFácil - Modernização da Folha de Pagamento",
            description: "Solução integrada para automatizar processos manuais da folha de pagamento, eliminando inconsistências e reduzindo retrabalhos em 70% através de integração com sistemas externos e agentes inteligentes de auditoria.",
            category: "Justiça Federal - TRF1ª Região",
            serviceType: "Sistema de Gestão de Pessoal",
            toolsUsed: ["Django (Python)", "ReactJS", "PostgreSQL", "Celery", "APIs RESTful", "Tesseract OCR", "Python-Requests", "Bcrypt"],
            timeline: "Nov/2024 - Out/2025 (12 meses)",
            stakeholders: ["Jean Marcos Cabral (Diretor DIGEP)", "Kleuber Rodrigues (Supervisor SEPAG)", "Equipe de folha de pagamento do TRF1"],
            docente: "IWENS GERVASIO SENE JUNIOR",
            gestor: "JEAN MARCOS CABRAL",
            residentes: ["PATRICK FERNANDES MARINS", "PAULO ROBERTO VIEIRA"],
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
            images: ["/mockup.jpg"],
            documentationLink: "/PGP-Folha_de_Pagamento.pdf"
        },
        {
            id: 5,
            title: "FrotaFácil - Automação e Gerência da Frota de Veículos",
            description: "Solução completa para digitalização de processos de gestão de frota, eliminando controles manuais e garantindo rastreabilidade total de veículos, motoristas e recursos operacionais.",
            category: "Justiça Federal - Seção Judiciária de Goiás",
            serviceType: "Sistema de Gestão de Frota",
            toolsUsed: ["Django (Python)", "PostgreSQL", "LDAP/Active Directory", "React", "TLS/SSL", "Docker", "Pandas (Relatórios)", "Chart.js"],
            timeline: "Abr/2025 - Out/2025 (6 meses)",
            stakeholders: ["Nelson Abadio Silva (Diretor SJGO/SECAD)", "Wagner Hélio da Silva Filho (Desenvolvedor)", "Equipe de Transportes do TJGO"],
            docente: "RONALDO MARTINS DA COSTA",
            gestor: "NELSON ABADIO SILVA",
            residentes: ["WAGNER HÉLIO DA SILVA FILHO"],
            story: "Desenvolvido para resolver a fragmentação de dados na gestão de frota do TJGO, o sistema integra digitalmente processos de requisição de viaturas, controle de abastecimento e manutenção preventiva, substituindo registros manuais em planilhas e garantindo conformidade com a IN 14-08 do TRF1.",
            process: [
                {
                    title: "Planejamento Estratégico",
                    description: "Mapeamento de requisitos com a Diretoria de Transportes e análise detalhada da IN 14-08 para garantir conformidade legal desde o design inicial"
                },
                {
                    title: "Prototipação Colaborativa",
                    description: "Desenvolvimento de wireframes interativos validados com motoristas e gestores, focando em usabilidade mobile-first para trabalho em campo"
                },
                {
                    title: "Integração de Sistemas",
                    description: "Implementação de módulo LDAP para autenticação segura e conexão com Active Directory existente, seguindo políticas de segurança do TJGO"
                },
                {
                    title: "Testes de Campo",
                    description: "Validação em ambiente real com 15 viaturas e 30 motoristas, coletando métricas de desempenho e ajustando fluxos operacionais"
                }
            ],
            features: [
                {
                    title: "Módulo de Requisições Eletrônicas",
                    description: "Formulário digital MOD.14-08-01 com validação automática de disponibilidade de viaturas e motoristas, integrado ao calendário institucional"
                },
                {
                    title: "Controle Inteligente de Abastecimento",
                    description: "Registro automatizado de quilometragem, cálculo de consumo médio e alertas para variações anômalas no consumo de combustível"
                },
                {
                    title: "Gestão Preditiva de Manutenção",
                    description: "Agendamento automático de revisões baseado em quilometragem rodada e histórico de manutenções, com custos operacionais detalhados"
                },
                {
                    title: "Painel de Auditoria em Tempo Real",
                    description: "Visualização georreferenciada de rotas, exportação de logs para CSV/PDF, e relatórios de conformidade prontos para corregedoria"
                }
            ],
            conclusion: "O sistema reduziu em 60% o tempo de processamento de requisições e eliminou 100% dos registros manuais. A integração com LDAP garantiu segurança, enquanto os módulos preditivos permitiram economia de 15% em custos operacionais. A arquitetura modular permite expansão para outros tribunais.",
            images: ["/mockup.jpg"],
            documentationLink: "/PGP_Controle_Frota_assinado[1].pdf"
        },
        {
            id: 6,
            title: "RequisiçãoFácil - Automação e Gerência de Requisições de Materiais",
            description: "Solução moderna para substituir processos manuais de consulta de materiais, oferecendo busca inteligente por código, categoria ou status, integração com SICAM e relatórios de validade/desuso.",
            category: "Justiça Federal - SJGO/SECAD - SETMAT",
            serviceType: "Sistema de Gestão de Materiais",
            toolsUsed: ["React (Frontend)", "Node.js (Backend)", "PostgreSQL (Banco de dados)", "LDAP/Active Directory (Autenticação)", "Docker (Containerização)", "SICAM API (Integração)"],
            timeline: "Abr/2025 - Out/2025 (7 meses)",
            stakeholders: ["Justiça Federal - SJGO/SECAD - SETMAT", "Servidores requisitantes de materiais", "Gestores de almoxarifado e logística"],
            docente: "RONALDO MARTINS DA COSTA",
            gestor: "NELSON ABADIO SILVA",
            residentes: ["PEDRO KOZIEL DINIZ"],
            story: "Desenvolvido para eliminar erros na requisição de materiais devido a processos manuais e interfaces obsoletas do SICAM, este sistema centraliza consultas com códigos exatos, status de estoque e prazos de validade, reduzindo retrabalhos e desperdícios.",
            process: [
                {
                    title: "Análise de Sistemas Legados",
                    description: "Mapeamento detalhado do SICAM e planilhas manuais, com identificação de gaps funcionais e definição de requisitos para a nova solução."
                },
                {
                    title: "Modelagem de Dados",
                    description: "Estruturação do banco de dados para suportar buscas avançadas, histórico de desuso e integração segura com fontes legadas."
                },
                {
                    title: "Desenvolvimento Modular",
                    description: "Implementação em sprints dos módulos de: consulta básica, gestão de desuso, validade de perecíveis e painel de consumo."
                },
                {
                    title: "Validação com Usuários-Chave",
                    description: "Testes iterativos com servidores requisitantes e gestores de almoxarifado para garantir aderência às necessidades operacionais."
                }
            ],
            features: [
                {
                    title: "Consulta Unificada de Materiais",
                    description: "Busca por nome, código ou categoria com exibição clara do status (disponível/em desuso) e código exato para requisição no SICAM."
                },
                {
                    title: "Gestão de Validade",
                    description: "Alertas automáticos para materiais perecíveis próximos do vencimento, com relatórios para prevenção de desperdícios."
                },
                {
                    title: "Módulo de Desuso",
                    description: "Registro centralizado de itens descontinuados, com datas de desativação e histórico de substituições."
                },
                {
                    title: "Autenticação Segura",
                    description: "Integração com Active Directory da Justiça Federal e controle de acesso por perfis (consulta/administração)."
                }
            ],
            conclusion: "O sistema eliminou 100% das consultas manuais, reduzindo em 50% os erros de requisição. A arquitetura modular permite expansão futura para integração direta com pedidos no SICAM, e os relatórios de validade otimizaram o uso de recursos públicos.",
            images: ["/consulta.png"],
            documentationLink: "/PGP_Materiais_ResidenciaJF.docx.pdf"
        }
    ];

    const service = servicesDetails.find(s => s.id === serviceId);

    if (!service) {
        return <div>Serviço não encontrado</div>;
    }

    return (
        <div className="template-container-pai">
            <div className="template-container">
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

                <section className="template-section">
                    <div className="section-header">
                        {/* Botão Original */}
                        {service.documentationLink && (
                            <a
                                href={service.documentationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="documentation-button"
                            >
                                Documentação PGP
                            </a>
                        )}

                        {/* --- Novos Botões Adicionados --- */}
                        {service.userDocumentationLink && (
                            <a
                                href={service.userDocumentationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="documentation-button"
                            >
                                Documentação de Usuário
                            </a>
                        )}

                        {service.technicalDocumentationLink && (
                            <a
                                href={service.technicalDocumentationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="documentation-button"
                            >
                                Documentação Técnica
                            </a>
                        )}

                        {service.sourceCodeLink && (
                            <a
                                href={service.sourceCodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="documentation-button"
                            >
                                Código Fonte
                            </a>
                        )}
                    </div>
                </section>

                <section className="template-section">
                    <div className="section-header">
                        <h2>Equipe Responsável</h2>
                    </div>
                    <div className="team-cards">
                        <div className="team-card">
                            <h3>Stakeholders</h3>
                            <ul>
                                {service.stakeholders.map((person, index) => (
                                    <li key={index}>{person}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="team-card">
                            <h3>Gestor</h3>
                            <p>{service.gestor}</p>
                        </div>
                        <div className="team-card">
                            <h3>Docente</h3>
                            <p>{service.docente}</p>
                        </div>
                        <div className="team-card">
                            <h3>Residentes</h3>
                            <ul>
                                {service.residentes.map((person, index) => (
                                    <li key={index}>{person}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="template-section">
                    <div className="story-card">
                        <h2>Contexto do Projeto</h2>
                        <p>{service.story}</p>
                    </div>
                </section>

                <section className="template-section">
                    <h2>Etapas de Desenvolvimento</h2>
                    <div className="process-steps">
                        {service.process.map((step, index) => (
                            <div key={index} className="process-card">
                                <div className="step-number">0{index + 1}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="template-section">
                    <h2>Principais Funcionalidades</h2>
                    <div className="features-grid">
                        {service.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                                {service.images[index + 1] && (
                                    <div className="feature-image">
                                        <Image
                                            src={service.images[index + 1]}
                                            alt={feature.title}
                                            width={600}
                                            height={400}
                                            className="featured-image"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="template-section">
                    <div className="conclusion-card">
                        <h2>Resultados Alcançados</h2>
                        <p>{service.conclusion}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};