'use client';
import { useState } from 'react';
import estilos from './page.module.css';
import Menu from './componentes/Menu';
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";


export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto);
  };

  return (
    <main className={estilos.container}>
    <header className={estilos.topo}>
      <button className={estilos.botao} onClick={atualizarMenu}>
      {menuAberto ? <CgClose /> : <CiMenuBurger />}   
      </button>
    </header>
    {menuAberto && (
        <Menu />
      )}
  </main>
  );
}
