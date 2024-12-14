import estilos from "./CardAnimal.module.css";
import Image from 'next/image';
import cachorro from"../../../../public/cachorro.jpg"
import gato from"../../../../public/gato.jpg"

export default function CardAnimal(props) {
  return (
    <div className={estilos.card_animal}>
      <Image src={props.tipoAnimal === "cachorro" ? cachorro : gato } alt="animal" />
    </div>
  );
}