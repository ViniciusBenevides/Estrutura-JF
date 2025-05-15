"use client"

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import '../css/servicos.css';

export const NossosSoftwares = () => {
    const services = [
        {
            id: 1,
            image: "/carteira-de-trabalho.webp",
            title: "TCU Monitor",
            description: "Software verificador de status de aposentadoria.",
        }
    ];

    return (
        <section id="softwares" className="servicos-container">
            <div className="servicos-header">
                <span className="servicos-subtitle">Nossos Serviços</span>
                <h2 className="servicos-title">Softwares que já disponibilizamos ao mercado</h2>
                <p className="servicos-description">
                    Aqui estão algumas funcionalidades de projetos do judiciário que já implantamos.
                </p>
            </div>

            <div className="servicos-grid">
                {services.map((service) => (
                    <Link href="/TCU">
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