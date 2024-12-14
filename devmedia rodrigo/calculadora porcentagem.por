programa
{
	
	funcao inicio()
	{
		real valor
		real porcentagem
		real valor_porcentagem
		real juros
		real desconto
		caracter
		
		escreva("informe o valor: ")
		leia(valor)

		escreva("informe a porcentagem: ")
		leia (porcentagem)

		valor_porcentagem = (porcentagem * valor) / 100

		desconto = valor - valor_porcentagem  

		juros = valor + valor_porcentagem
		
		escreva("\n"+valor+" com "+porcentagem+" de desconto è "+desconto+" \n")

		escreva("\n"+valor+" com "+porcentagem+" de desconto è "+juros+" \n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 525; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */