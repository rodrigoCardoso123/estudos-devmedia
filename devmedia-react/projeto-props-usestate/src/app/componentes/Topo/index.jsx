import estilos from"./Topo.module.css"

export default function Topo(Props){
    return(
    <header>
      <h1>Projeto Props + useState</h1>
      <p>Clique no botão para mudar os componentes abaixo</p>
      <button onClick={Props.clickAlterarAnimal}>Mudar Animal</button>
    </header>
    )
}
