import listaDeFrutas from "./dados/frutas.js";
import {atualizarPalavraOculta,
    embaralharArray,
    palavraOculta,
    validarLetraDigitada,
    verificarLetraPresenteNaPalavra,
    verificarJogoGanho,
    chancesErros
} from "./funcoes/funcoes.js";
import entradaDados from 'readline-sync';


let quantidade = 1

function iniciarforca(){
    const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];
    let palavraoculta = palavraOculta(palavraEscolhida)

console.log("------------JOGO DA FORCA------------")
console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

let erro = 4
let statusJogo = "andamento"

while (statusJogo === 'andamento') {

    

    console.log(`\nFruta: ${palavraoculta}`);

    const letraDigitada = entradaDados.question("Digite uma letra: ").toLocaleLowerCase();
     
     const validarR = validarLetraDigitada(letraDigitada)
     const verificarL = verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada)
     const atualizaP = atualizarPalavraOculta(palavraoculta,letraDigitada,palavraEscolhida)

    if(validarR){       
        if(verificarL){
            palavraoculta = atualizaP
        
        if(verificarJogoGanho(palavraoculta, palavraEscolhida)){
            statusJogo = "Venceu"
            
            console.log("\n--------------VOCÊ VENCEU!!-------------")
            console.log(`Voce acertou o nome da fruta: ${palavraEscolhida}`)
        }
    }else{
        erro--
        
        if(erro > 0){    
        console.log(`OPÇÃO ERRADA! Você ainda tem [${erro}] chance(s)!`)
        }else{
            statusJogo = 'perdeu'
            console.log("--------------VOCÊ PERDEU!!-------------")
        }
    }
     } else{
        console.log("\nPor favor, digite uma letra válida.");
     }
   };

};
iniciarforca()