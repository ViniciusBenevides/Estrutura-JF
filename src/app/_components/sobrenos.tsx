"use client"

import Image from 'next/image';
import React from 'react';
import '../css/sobrenos.css';

export const SobreNos = () => {
    return (
        <section id="sobre-nos" className="sobre-nos-container">
            <div className="text-content">
                <span className="subtitle">Sobre Nós</span>
                <h2 className="title">Pós-graduação em Tecnologia e Inovação para o Judiciário</h2>
                <p className="description">
                    Nosso curso de Pós-graduação Lato Sensu em Projetos de Tecnologia e Inovação para o Judiciário Federal
                    tem como objetivo principal incentivar a formação de recursos humanos altamente especializados
                    na área de Desenvolvimento de Sistemas de Software. Com foco no planejamento e desenvolvimento
                    de soluções tecnológicas, capacitamos profissionais para atender às demandas específicas da
                    Seção Judiciária da Bahia e do Judiciário Federal como um todo.
                </p>
                <p className="description">
                    Através de uma abordagem prática e inovadora, preparamos nossos alunos para os desafios
                    contemporâneos do setor judiciário, combinando conhecimento técnico avançado com compreensão
                    das necessidades específicas da área jurídica.
                </p>
            </div>

            <div className="image-container">
                <Image
                    src="/INF.jpg"
                    alt="Equipe discutindo projetos de tecnologia para o judiciário"
                    width={600}
                    height={529}
                    className="sobre-nos-image"
                />
            </div>
        </section>
    );
};