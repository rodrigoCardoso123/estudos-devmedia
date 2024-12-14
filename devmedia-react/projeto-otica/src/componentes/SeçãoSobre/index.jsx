import Loja from '../../../public/loja.png'
import Atendimento from '../../../public/atendimento.png'
import Image from 'next/image'
import estilos from"./sobre.module.css"

export default function sobre (){
    return(
        <section className={estilos.container}>
            <div className={estilos.containertexto}>
                <h1>QUEM SOMOS NÓS?</h1>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div className={estilos.containercard}>
                    <Image src={Loja} alt="imagen" className={estilos.image}/>
                <div className={estilos.card}>
                    <h2>Nossas Filiais</h2>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
            </div>
            <div className={estilos.containercard2}>
                <div className={estilos.card}>
                    <h2>Atendimento flexível</h2>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div> 
                <Image src={Atendimento} alt="imagen" className={estilos.image}/>
            </div>    
        </section>
    )
}