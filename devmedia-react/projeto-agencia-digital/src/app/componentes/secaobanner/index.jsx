import estilos from"./secaobanner.module.css"
import Image from "next/image"
import imgbanner from "../../../../public/banner.png"

export default function banner(Props){
    return(
    <div className={Props.alterarCor ? estilos.dark_mode : estilos.light_mode}>
    <section className={estilos.main} >
        <div className={estilos.imgbanner}>
            <Image src={imgbanner} className={estilos.img}></Image>
        </div>
        <div className={estilos.textobanner}>
            <p>BRANDING / UI / UX / TECNOLOGIA</p>
            <h2>Agência de Branding</h2>
            <span>e design digital</span>
        </div>
    </section>
    </div>
    )
}