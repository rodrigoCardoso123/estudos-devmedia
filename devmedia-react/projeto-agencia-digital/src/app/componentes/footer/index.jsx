import estilos from"./footer.module.css"
import Image from "next/image"
import logo from"../../../../public/logo.png"
import fc from"../../../../public/facebook.png"
import tw from"../../../../public/twitter.png"
import lk from"../../../../public/linkedin.png"
import db from"../../../../public/dribble.png"
import bh from"../../../../public/behance.png"
import gp from"../../../../public/google-plus.png"

export default function footer(Props){
    return(
        <div className={Props.alterarCor ? estilos.dark_mode : estilos.light_mode}>
    <footer className={estilos.main}>
     <div className={estilos.container}>
        <Image className={estilos.img} src={logo}></Image>
        <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p>
        <div className={estilos.container_icone}>
            <Image className={estilos.img_icone} src={fc}></Image>
            <Image className={estilos.img_icone} src={tw}></Image>
            <Image className={estilos.img_icone} src={lk}></Image>
            <Image className={estilos.img_icone} src={db}></Image>
            <Image className={estilos.img_icone} src={bh}></Image>
            <Image className={estilos.img_icone} src={gp}></Image>
        </div>
        <p>Copyright 2024 <span>Rodrigo Cardoso</span></p>
     </div>
    </footer>
    </div>
    )
}