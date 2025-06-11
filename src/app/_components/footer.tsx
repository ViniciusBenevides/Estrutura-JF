import Link from 'next/link';

export const Footer = () => {
    return (
        <footer
            className="bg-black text-white"
            style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                height: "70px",
                justifyContent: "center"
            }}
        >
            <div className="w-full mx-auto flex justify-center items-center">
                <p className="text-sm md:text-base text-center">
                    © SJGO - 2025 • Todos os direitos reservados
                </p>
            </div>
            <div className="w-full mx-auto flex justify-center items-center" style={{
                textDecoration: "underline"
            }}>
                <a
                    href="/Documentação de Manutenção de Servidor para Aplicação Next.js com PM2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Documentação do site
                </a>
            </div>
        </footer>
    );
};