import estilos from "./topo.module.css"
import Head from "next/head"

export default function Topo(){
    return(
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet"/>
        </Head>
        <header className={estilos.container_principal}>
            <h1>RESTAURANT</h1>
            <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </header>
        </>
    )
}
