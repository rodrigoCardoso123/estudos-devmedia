import estilos from "./sobre.module.css"
import Image from "next/image"
import Sobreimg from "../../../public/sobre-image.jpg"
import Sorveteria from "../../../public/sorveteria.jpg"

export default function sobre(){
    return(
        <main>
            <section className={estilos.banner}>
                <h1 className={estilos.texto_banner}>A GELATERIA</h1>
            </section>
            <section className={estilos.container}>
            <div className={estilos.container_texto}>
                <h1>Sobre Nós</h1>
                <span>Nós simplesmente amamos sorvete!</span>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                  <p> Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </div>
                <Image src={Sobreimg} className={estilos.img}></Image>
                <Image src={Sorveteria} className={estilos.img}></Image>
            </section>
        </main>
    )
}