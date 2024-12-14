import React from "react";
import estilos from "./Cards.module.css";
import Image from "next/image";

const Cards = ({produto}) => {
  return (
<>
    <div className={estilos.card_depoimento}>
      <figure className={estilos.container_img}>
        <Image src={produto.imagem} alt={produto.nome} className={estilos.img}/>
      </figure>
      <div className={estilos.card_texto}>
        <div>
          <h2 className={estilos.card_h2}>{produto.nome}</h2>
          <small className={estilos.card_small}>{produto.categoria}</small>
          <p className={estilos.card_p}>{produto.descricao}</p>
        </div>
        <div>
          <span className={estilos.card_span}>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
        </div>
      </div>
    </div>
</>
  );
};
export default Cards