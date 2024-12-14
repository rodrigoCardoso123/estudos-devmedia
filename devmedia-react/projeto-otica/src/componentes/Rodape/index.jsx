import estilos from "./Rodape.module.css"

export default function Rodape(){
    return(
        <footer className={estilos.rodape}>
            <p className={estilos.h1}>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
        </footer>
    )
}