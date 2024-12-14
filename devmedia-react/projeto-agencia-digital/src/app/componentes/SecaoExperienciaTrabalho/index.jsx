import estilos from"./secaoexperiencia.module.css"
import Cardexperiencia from"@/app/componentes/Card"

export default function Experiencia(Props){
    return(
        <div className={Props.alterarCor ? estilos.dark_mode : estilos.light_mode}>
        <section className={estilos.main}>
            <h3>Experiências De Trabalho</h3>
            <p className={estilos.p}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
          <div className={estilos.container_card}>
            <Cardexperiencia
                alterarCor={Props.alterarTema}
                data ="JUNHO 2012 - 2016"
                titulo ="Web Designer"
                empresa ="Pied Piper StartUp."
                paragrafo ="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados"
            />
            <Cardexperiencia
                alterarCor={Props.alterarTema}
                data ="AGOSTO 2016 - 2019"
                titulo ="Product Designer"
                empresa ="E Corp."
                paragrafo ="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
            />
            <Cardexperiencia 
                alterarCor={Props.alterarTema}
                data ="FEVEREIRO 2019 - 2021"
                titulo ="Digital Consulting"
                empresa ="Arasaka Inc."
                paragrafo ="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
            />
          </div>
        </section>
        </div>
    )
}