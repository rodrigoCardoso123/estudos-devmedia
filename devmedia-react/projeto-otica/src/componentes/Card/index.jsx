import estilos from "./Card.module.css"

export default function Card() {
    return(
      <div className={estilos.card}>
        <h1>Hello World</h1>
        <p>Esse é o nosso primeiro componente</p>
        <p>Componente criado com React.js</p>
      </div>
    )
  }