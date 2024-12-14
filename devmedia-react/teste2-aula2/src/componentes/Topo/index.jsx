import estilos from "./Topo.module.css"
import Logo from "@/componentes/imgs/local.png"

export default function topo(){
    return(
        <header className={estilos.topo}>
            <img src={Logo} alt="" />
            <h1 className={estilos.h1}>Trabalho com componentes</h1>
        </header>
    )
}