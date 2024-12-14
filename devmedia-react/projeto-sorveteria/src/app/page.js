import Image from "next/image";
import estilos from "./page.module.css";
import Banner from "../../public/banner-home.png"
import Sabores from "../../public/banner-sabores.jpg"
import Eventos from "../../public/eventos-image.jpg"
import Sobre from "../../public/sobre-image.jpg"

export default function Home() {
  return (
    <main>
      <div className={estilos.containerbanner}>
        <Image src={Banner} className={estilos.imgbanner}></Image>

        <h1 className={estilos.textobanner}>SORVETE ARTESANAL</h1>
      </div>

  <section className={estilos.container}>
      <section className={estilos.containerCard}>
              <Image src={Sabores} className={estilos.img}></Image>
            <div className={estilos.CardTexto}>
              <h1>Nossos produtos</h1>
              <span>Novos e deliciosos!</span>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
      </section>

        <section className={estilos.containerCard}>
          <div className={estilos.CardTexto}>
            <h1>NOSSOS EVENTOS</h1>
            <span>Delicias com sorvete!</span>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
              <Image src={Eventos} className={estilos.img}></Image>
        </section>

        <section className={estilos.containerCard}>
              <Image src={Sobre} className={estilos.img}></Image>
          <div className={estilos.CardTexto}>
            <h1>SOBRE NÓS</h1>
            <span>Alegria em cada casquinha!</span>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
          </div>
        </section>
      </section>
    </main>
  );
}
