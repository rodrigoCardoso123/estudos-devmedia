import estilos from "./Rodape.module.css"

export default function Rodape(){
    return(
        <footer className={estilos.rodape}>
            <h1 className={estilos.h1}>Desenvolvido com React</h1>
        </footer>
    )
}