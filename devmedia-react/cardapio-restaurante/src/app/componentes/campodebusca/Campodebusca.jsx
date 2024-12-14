'use client';
import { useState } from "react";
import estilos from "./campodebusca.module.css"
import Lupa from"../../../../public/Assets/lupa.png"
import Image from "next/image"
import {handleBuscarPratos,buscarpratos,retornarpratos} from "../../servicos/index"

const ListaDePratos = ({textoBusca,handleBuscarPratos}) => {

    return(  
    <div className={estilos.container_input}>
        <Image src={Lupa} className={estilos.img}/>
        <input 
         type="text"
         value={textoBusca}
         onChange={(event) => handleBuscarPratos(event.target.value)}
         placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
    </div>
    )
}
export default ListaDePratos