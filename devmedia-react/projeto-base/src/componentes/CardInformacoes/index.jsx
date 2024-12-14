import React from "react";
import estilos from './CardInformacoes.module.css'

const CardInformacoes = (props) => {
    return (
      <div className={estilos.moldura}>
       <div className={estilos.subtitulo}><h1>informações</h1></div> 
       <div className={estilos.info}>{props.children}</div> 
      </div>
    );
  };
  
  export default CardInformacoes;