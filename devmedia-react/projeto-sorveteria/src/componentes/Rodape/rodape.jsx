import estilos from "./rodape.module.css"
import Image from "next/image"
import Logo from "../../../public/logo.png"

export default function rodape(){
    return(
        <section className={estilos.container}>
            <div className={estilos.infos}>
                <Image src={Logo} className={estilos.img}></Image>
                <div className={estilos.texto}>
                    <span>ENDEREÇO</span>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className={estilos.texto}>
                    <span>CONTATO</span>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className={estilos.texto}>
                    <span>HORÁRIOS</span>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <p className={estilos.p}>Gelateria. Orgulhosamente desenvolvido por "Rodrigo Cardoso"</p>
        </section>
    )
}