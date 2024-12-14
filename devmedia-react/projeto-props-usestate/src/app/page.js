'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import cachorro from"../../public/cachorro.jpg"
import gato from"../../public/gato.jpg"
import CardAnimal from'@/app/componentes/Cardanimal'
import CardInformacoes from'@/app/componentes/CardInformacoes'
import Topo from "./componentes/Topo";
import Link from "next/link";

export default function Home() {
  
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  return (
    <div className={estilos.container_principal}>
    {/* componente Topo */}
    <Topo clickAlterarAnimal={alterarState}/>
    {/* Compomente CardAnimal */}
    <main>
    <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
    <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
    </main>
  </div>
  );
}
