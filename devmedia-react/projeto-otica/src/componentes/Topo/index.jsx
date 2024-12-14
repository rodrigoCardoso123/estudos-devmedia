import estilos from "./Topo.module.css";
import Logo from'../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function topo(){
    return(
        <header className={estilos.topo}>
            <div className={estilos.container}>
               <div className={estilos.containerimage}> 
                 <Image src={Logo} alt="logo" className={estilos.image}/>
               </div>
              <div className={estilos.links}>
                <a href="">PRODUTOS</a>
                <a href="">SOBRE</a>
                <a href="">CONTATO</a>
              </div>
            </div>
        </header>
    );
}