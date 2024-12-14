'use client';
import { useState } from "react";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import Logo from"../../public/barbearia.png"
import banner from"../../public/banner.jpg"
import estilos from "./page.module.css";

export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false)

  function trocarTemaPagina() {
    setAlterarTema(!alterarTema)
  }
  return (
    <div className={alterarTema ? estilos.dark_mode : estilos.light_mode}>
      <header className={estilos.container_topo}>
        <div className={estilos.topo}>
          <Image src={Logo} className={estilos.img}></Image>
          <button className={estilos.botao} onClick={trocarTemaPagina}  
          >{alterarTema ? <BsSun/> : <BsMoon/>}</button>
        </div>
      </header>
      <main className={estilos.main}>
        <section className={estilos.banner}>
            <Image src={banner} className={estilos.imgbanner}></Image>
        </section>

        <section className={estilos.secao_texto}>
          <div className={estilos.container_texto}>
            <h1>Bem-vindo a Barber Shop</h1>
            <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className={estilos.assinatura}>S. Kelly</p>
          </div>
        </section>
      </main>
    </div>
  );
}
