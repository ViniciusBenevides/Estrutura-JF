import "../globals.css";
import { NavMenu } from "../_components/navmenu";
import { Footer } from "../_components/footer";
import { _Equipe } from "../_components/equipe";

export default function Equipe() {
    return (
        <>
            <NavMenu />
            <_Equipe />
            <Footer />
        </>
    );
}
