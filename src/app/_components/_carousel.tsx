"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import '../css/carousel.css';

interface CarouselItem {
    id: number;
    imageSrc: string;
    altText: string;
    title?: string;
    description?: string;
}

export const CarouselComOverlay: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const carouselItems: CarouselItem[] = [
        {
            id: 1,
            imageSrc: "/carousel-1.jpg",
            altText: "Slide 1",
            title: "Projeto de Residência em Sistemas e Agentes Inteligentes para o Judiciário Federal",
        },
        {
            id: 2,
            imageSrc: "/carousel-2.jpg",
            altText: "Slide 2",
            title: "Projeto de Residência em Sistemas e Agentes Inteligentes para o Judiciário Federal",
        },
        {
            id: 3,
            imageSrc: "/carousel-3.jpg",
            altText: "Slide 3",
            title: "Projeto de Residência em Sistemas e Agentes Inteligentes para o Judiciário Federal",
        },
    ];

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty("--mouse-x", `${x}px`);
            button.style.setProperty("--mouse-y", `${y}px`);
        };

        button.addEventListener("mousemove", handleMouseMove);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        pauseAutoPlay();
    };

    const handleSaibaMaisClick = () => {
        // Se já estivermos na página inicial
        if (window.location.pathname === '/') {
            const sobreNosSection = document.getElementById('sobre-nos');
            if (sobreNosSection) {
                sobreNosSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // Se não estiver na página inicial, navega primeiro
            router.push('/#sobre-nos');

            // Adiciona um listener para quando a página for carregada
            const handleLoad = () => {
                const sobreNosSection = document.getElementById('sobre-nos');
                if (sobreNosSection) {
                    sobreNosSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            };

            window.addEventListener('load', handleLoad, { once: true });
        }
    };

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
                );
            }, 10000);
        }

        return () => clearInterval(interval);
    }, [isAutoPlaying, carouselItems.length]);

    return (
        <div className="carousel-container">
            {/* Carousel wrapper */}
            <div className="carousel-wrapper">
                {carouselItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`carousel-item ${index === currentIndex ? 'active-item' : 'inactive-item'}`}
                    >
                        <img
                            src={item.imageSrc}
                            className="carousel-image"
                            alt={item.altText}
                        />
                        {/* Overlay */}
                        <div className="overlay">
                            <div className="overlay-content">
                                {item.title && <h2 className="overlay-title">{item.title}</h2>}
                                <button
                                    ref={buttonRef}
                                    className="fancy-button"
                                    onClick={handleSaibaMaisClick}
                                >
                                    <span className="text-span">Saiba mais</span>
                                    <span className="mask-area"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="indicators">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`indicator ${index === currentIndex ? 'active-indicator' : ''}`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};