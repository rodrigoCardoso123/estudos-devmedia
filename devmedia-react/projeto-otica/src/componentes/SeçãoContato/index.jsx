import estilos from "./contato.module.css"
import Image from 'next/image'
import Local from '../../../public/local.png'
import Telefone from '../../../public/telefone.png'
import Email from '../../../public/email.png'
import FB from '../../../public/fb.png'
import IG from '../../../public/ig.png'
import TT from '../../../public/tt.png'

export default function Contato(){
    return(
        <section className={estilos.container}>
            <h1>Fale conosco</h1>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className={estilos.cards}>
                <div className={estilos.cardtexto}>
                    <h2>Contato</h2>
                    <p> <Image src={Local} className={estilos.image}/>Nova Iguaçu, RJ</p>
                    <p> <Image src={Telefone} className={estilos.image}/>(21) 9999-9999</p>
                    <p> <Image src={Email} className={estilos.image}/>contato@oticavida.com</p>
                </div>
                <div className={estilos.cardtexto}>
                    <h2>Nossas Redes Sociais</h2>
                    <p> <Image src={FB} className={estilos.image}/>/OticaVida</p>
                    <p> <Image src={IG} className={estilos.image}/>@oticavidarj</p>
                    <p> <Image src={TT} className={estilos.image}/>@oticavidarj</p>
                </div>
            </div>
        </section>
    )
}