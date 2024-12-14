import Oculos1 from '../../../public/oculos01.png'
import Oculos2 from '../../../public/oculos02.png'
import Oculos3 from '../../../public/oculos03.png'
import Oculos4 from '../../../public/oculos04.png'
import Image from 'next/image';
import estilos from'./Produtos.module.css'

export default function produtos (){
    return(
        <section className={estilos.container}>
            <div className={estilos.containertexto}>
                <h1>Nossos produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>
        <div className={estilos.containercard}>
            <div className={estilos.card}>
                <h1>Óculos de grau</h1>
                <Image src={Oculos1} alt="oculos" className={estilos.image}/>
                <p>R$ 500,00</p>
            </div>
            <div className={estilos.card}>
                <h1>Óculos transition</h1>
                <Image src={Oculos2} alt="oculos" className={estilos.image}/>
                <p>R$ 750,00</p>
            </div>
            <div className={estilos.card}>
                <h1>Óculos de sol</h1>
                <Image src={Oculos3} alt="oculos" className={estilos.image}/>
                <p>R$ 700,00</p>
            </div>
            <div className={estilos.card}>
                <h1>Óculos infantil</h1>
                <Image src={Oculos4} alt="oculos" className={estilos.image} />
                <p>R$ 500,00</p>
            </div>
        </div>
        <div className={estilos.containerlista}> 
            <h2>Todos os nossos produtos incluem:</h2>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </div>
        </section>
    )
}