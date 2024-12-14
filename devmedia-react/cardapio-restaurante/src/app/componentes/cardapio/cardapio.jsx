'use client';
import { useState } from "react";
import Cards from "../cards/Cards"
import estilos from "./Cardapio.module.css"
import { produtos } from "@/app/produtos";

export default function ListaDePratos(){

    return( 
    <div className={estilos.container_jogos}>
        {produtos.map((produto,) => (
          <Cards
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            categoria={produto.categoria}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}
    </div>
); 
};



