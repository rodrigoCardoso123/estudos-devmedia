import estilos from"./topo.module.css"
import Image from "next/image"
import logo from"../../../../public/logo.png"
import lua from"../../../../public/moon.png"
import Sol from"../../../../public/sun.png"


export default function Topo(Props){
    return(
    <header className={Props.alterarCor ? estilos.dark_mode : estilos.light_mode}>
     <div className={estilos.container}>
        <Image className={estilos.img} src={logo}></Image>
        <button onClick={Props.clickAlterarCor} className={estilos.botao}>{Props.alterarCor ? <Image className={estilos.imglua} src={Sol}></Image> : <Image className={estilos.imglua} src={lua}></Image>}</button>
     </div>
    </header>
    )
}