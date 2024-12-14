'use client';
import { useState } from "react";
import {produtos} from "@/app/produtos"

export const buscarpratos = (textoDigitado) => {
    return produtos.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    );
  };
  
export const filtrarpratos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
  };

  export const produtosEntradas = filtrarpratos("Entradas");

  export const handleBuscarPratos = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListapratos(buscarpratos(textoDigitado));
  };