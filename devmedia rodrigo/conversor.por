programa
{
	
	funcao inicio()
	{
		real fahrenheit
		real celsius
		real milhas
		real quilometros
		inteiro opcao


		faca{
			
		escreva("\nCalculadora de Conversoes: Escolha uma opçao: \n")

		escreva("\n1 - Celsius para Fahrenheit")
		escreva("\n2 - Quilometros para Milhas")
		escreva("\n3 - Sair\n")
		leia(opcao)

		escolha(opcao)
		{
			caso 1:
				escreva("\nInforme o Valor que deseja converter: ")
				leia(celsius)

				fahrenheit = celsius * 1.8 + 32
				
				escreva(""+celsius+"C equivale a "+fahrenheit+"F")
				pare
			caso 2:
				escreva("\nInforme o Valor que deseja converter: \n")
				leia(quilometros)	
				
				milhas = quilometros / 1.609

				escreva("\n"+quilometros+"km e equivale a "+milhas+"mi \n")
				pare
			caso 3:
				escreva("\nCalculadora de Conversoes Finalizada\n")
				pare	
			caso contrario:
				escreva("\nOpcao inválida\n")
		}
	   } enquanto(opcao < 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 308; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */