import estilos from "./capa.module.css"

export default function capa(){
    return(
        <section className={estilos.capa}>
            <div className={estilos.container}>
              <div className={estilos.textocapa}>
                <p>Preços baixos em</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqui</p>
              </div>
            </div>  
        </section>
    )
}