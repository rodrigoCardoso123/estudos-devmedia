import estilos from "./sabores.module.css"
import Image from "next/image"
import Oreo from "../../../public/sabor-oreo.jpg"
import Pistache from "../../../public/sabor-pistache.png"
import Cookies from "../../../public/sabor-cookies-avela.png"
import Kiwi from "../../../public/sorbet-kiwi.png"
import Morango from "../../../public/sorbet-morango.png"
import Limao from "../../../public/sorbet-limao.png"

export default function sabores(){
    return(
        <main>
            <section className={estilos.banner}>
                <h1 className={estilos.texto_banner}>NOSSOS SABORES</h1>
            </section>
            <section className={estilos.container_sabores}>

                <h1>SABORES DE SORVETE</h1>

                <div className={estilos.container_Card}>
                    <div className={estilos.Card}>
                        <Image src={Oreo} className={estilos.img}></Image>
                        <span>Sorvete de Oreo</span>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className={estilos.Card}>
                        <Image src={Pistache} className={estilos.img}></Image>
                        <span>Sorvete Pistache</span>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                    </div>

                    <div className={estilos.Card}>
                        <Image src={Cookies} className={estilos.img}></Image>
                        <span>Sorvete Cookies & Avelã</span>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className={estilos.Card}>
                        <Image src={Kiwi} className={estilos.img}></Image>
                        <span>Sorvete de Kiwi</span>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className={estilos.Card}>
                        <Image src={Morango} className={estilos.img}></Image>
                        <span>Sorvete de Morango</span>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className={estilos.Card}>
                        <Image src={Limao} className={estilos.img}></Image>
                        <span>Sorvete de Limão Siciliano</span>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>

                </div>
            </section>
        </main>
    )
}