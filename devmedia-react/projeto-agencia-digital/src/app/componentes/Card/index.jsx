import React from "react";
import estilos from "./card.module.css";
import Image from "next/image";

export default function Cardexperiencia (props){
  return (
  <div className={props.alterarTema ? estilos.dark_mode : estilos.light_mode}>
    <div className={estilos.card_depoimento}>
      <p className={estilos.card_p}>{props.data}</p>
      <span className={estilos.card_span}>{props.titulo}</span>
      <p className={estilos.card_p}>{props.empresa}</p>
      <p className={estilos.card_p}>{props.paragrafo}</p>
    </div>
  </div>
  );
};
