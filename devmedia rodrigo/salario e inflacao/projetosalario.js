let salarioMinimo = [
    {Ano:2010, salario: 510.00},
    {Ano:2011, salario: 545.00},
    {Ano:2012, salario: 622.00},
    {Ano:2013, salario: 678.00},
    {Ano:2014, salario: 724.00},
    {Ano:2015, salario: 788.00},
    {Ano:2016, salario: 880.00},
    {Ano:2017, salario: 937.00},
    {Ano:2018, salario: 954.00},
    {Ano:2019, salario: 998.00},
    {Ano:2020, salario: 1045.00}
]

let inflacao = [
    {Ano:2010, IPCA: 5.91},
    {Ano:2011, IPCA: 6.50},
    {Ano:2012, IPCA: 5.84},
    {Ano:2013, IPCA: 5.91},
    {Ano:2014, IPCA: 6.41},
    {Ano:2015, IPCA: 10.67},
    {Ano:2016, IPCA: 6.29},
    {Ano:2017, IPCA: 2.95},
    {Ano:2018, IPCA: 3.75},
    {Ano:2019, IPCA: 4.31},
    {Ano:2020, IPCA: 4.52}
]

import entradaDados from 'readline-sync';

console.log("Escolha uma das alternativas: \n")
console.log("1 - Listar os salários minímos de 2010 á 2020\n")
console.log("2 - Listar o índice IPCA de 2010 á 2020\n")
console.log("3 - Comparação entre o percentual de aumento salariral e o IPCA\n")

let Escolha = entradaDados.question("Digite o numero da sua escolha: ")

if(Number(Escolha) == 1){
  for(let salarioMin of salarioMinimo){
    let minimosalario = salarioMin.salario;
    let anoM = salarioMin.Ano;
  
    let label_ano = "ANO: " 
    let label_salario = "Salario minimo: " 
  
    console.log(label_ano.padEnd(25,".") + anoM )
    console.log(label_salario.padEnd(25,".") + "R$ " + minimosalario + ",00 \n")
}
  
}else if(Number(Escolha) == 2){
    for(let infla of inflacao){
        let anoinflacao = String(infla.Ano)
        let ipca = String(infla.IPCA)

        let label_anoinflacao = "Ano: "
        let label_ipca = "Inflação IPCA: "

        console.log(label_anoinflacao.padEnd(25,".") + anoinflacao )
        console.log(label_ipca.padEnd(25,".") + ipca.replace(".",",") + "% \n")
    }

}else if(Number(Escolha) == 3){
    for(let i = 0; i < salarioMinimo.length; i++){

        let salarioM = salarioMinimo[i].salario
        let salarioano = salarioMinimo[i].Ano
        let ipcaano = String(inflacao[i].IPCA)
        let percentualCrescimento
        let crescimentoFormatado
        if(i > 0)
            {
                let salarioAnterior = salarioMinimo[i-1].salario
                let diferenca = salarioM - salarioAnterior

                 percentualCrescimento = (diferenca / salarioAnterior) * 100

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%"
            }
            else
            {
                crescimentoFormatado = "-"
            }
            let label_salario = "Salario minimo: " 
            let label_ano = "ANO: " 
            let label_ipca = "Inflação IPCA: "
            let label_crescimento = "Crescimento Salarial: "
        console.log(label_ano.padEnd(25,".") + salarioano)
        console.log(label_salario.padEnd(25,".") + "R$ " +  salarioM + ",00")
        console.log(label_crescimento.padEnd(25,".") + crescimentoFormatado )
        console.log(label_ipca.padEnd(25,".") + ipcaano.replace(".",",") + "% \n")
    }
    
}else{
    console.log("Numero invalido")
}
