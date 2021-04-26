/* 
1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

R.: É um código que é executado simultaneamente com outros códigos, ou seja, não precisa esperar o retorno de uma outra função para daí ser executado, ele roda em conjunto em uma área reservada.
Já um código síncrono depende do retorno de outra função para depois ser executado, roda um código de cada vez, respeitando a ordem de execução passada.

2 - Quando você tem que enfileirar várias callbacks , que problema surge?

R.: Surge o fenômeno de callback hell, ou seja, o código fica muito profundo, difícil de manter e de ler.

3 - Por que as Promises são uma forma de se resolver esse problema?

R.: As promises são por sua natureza assíncronas e apresentam funções especiais que facilitam o seu uso como then e catch.

4 - Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

R.: A comunicação deve ser assíncrona, ou seja, enquanto espera a resposta do servidor, outras funções podem continuar suas execuções sem ser afetadas.

5 - Dada a resposta anterior, o que é fetch e para que ele serve? 

R.: o fetch é uma função responsável por enviar requisições a APIs, além de ter a capacidade de tratar os dados recebidos e devolvê-los.
*/