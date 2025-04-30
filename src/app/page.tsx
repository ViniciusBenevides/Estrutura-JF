import "./globals.css";
import { NavMenu } from "./_components/navmenu";
import { CarouselComOverlay } from "./_components/_carousel"
import { SobreNos } from "./_components/sobrenos"
import { NossosServicos } from "./_components/servicos";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <NavMenu />
      <CarouselComOverlay />
      <SobreNos />
      <NossosServicos />
      <Footer />
    </>
  );
}
