import { Template } from '../../_components/template';
import { NavMenu } from "../../_components/navmenu";
import { Footer } from "../../_components/footer";

// Defina o tipo como Promise
type ParamsType = Promise<{ id: string }>;

export default async function ServicoPage({ params }: { params: ParamsType }) {
    const { id } = await params; // Extrai o id após await
    const serviceId = parseInt(id);

    return <><NavMenu /><Template serviceId={serviceId} /><Footer /></>;
}
