import entradaDados from 'readline-sync';


function embaralharArray(questoes) { // Função que retorna a fruta aleatoria
    const palavraEscolhida = questoes[Math.floor(Math.random() * questoes.length)]; // Embaralha as perguntas do array questoes
    return palavraEscolhida
}

function palavraOculta(palavraEscolhida){
  let primeiraLetra = palavraEscolhida[0]
  let underline = "_".repeat(palavraEscolhida.length - 1)
  let palavra = primeiraLetra + underline
  return palavra
}

function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
  let palavraocultaArray = palavraOculta.split('') // converte a palavra oculta em um array de caracteres

  for (let i = 0; i < palavraEscolhida.length; i++) { // loop que continua até o tamanho final da palavra escolhida
    if (palavraEscolhida[i] === letraDigitada) { // Verifica se cada letra da palavra escolhida e igual a letra digitada
      palavraocultaArray[i] = letraDigitada // substitui a letra na posição i
    }
  }

  return palavraocultaArray.join('') // Retorna o array de caracteres convertido em uma string
}
  
function validarLetraDigitada(letraDigitada){
  if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
    return true
  } else {
    return false
  }
}
function verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada){
  if(palavraEscolhida.includes(letraDigitada)){
    return true
  } else {
    return false
  }
}
function verificarJogoGanho(palavraOculta, palavraEscolhida) {
  if(palavraOculta === palavraEscolhida) {
    return true
  } else {
    return false
  }
}
function chancesErros(erro){
return 4 - erro 
}
  export {
    embaralharArray,
    palavraOculta,
    atualizarPalavraOculta,
    validarLetraDigitada,
    verificarLetraPresenteNaPalavra,
    verificarJogoGanho,
    chancesErros}
