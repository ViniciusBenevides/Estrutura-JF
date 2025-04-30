import { Template } from '../../_components/template';
import { NavMenu } from "../../_components/navmenu";
import { Footer } from "../../_components/footer";

// Definição segura de tipos para páginas dinâmicas
type SafePageProps<T = {}> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ServicoPage({ params }: SafePageProps<{ id: string }>) {
    const serviceId = parseInt(params.id);
    return <><NavMenu /><Template serviceId={serviceId} /><Footer /></>;
}