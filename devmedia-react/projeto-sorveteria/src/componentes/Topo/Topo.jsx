import estilos from "./Topo.module.css";
import Logo from'../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Topo() {
    return(
        <header className={estilos.topo}>
            <div className={estilos.container}>
               <div className={estilos.containerimage}> 
                 <Image src={Logo} alt="logo" className={estilos.image}/>
               </div>
              <div className={estilos.links}>
                <Link href="/">HOME</Link>
                <Link href="/Sobre">SOBRE</Link>
                <Link href="/Sabores">SABORES</Link>
              </div>
            </div>
        </header>
    );
}
