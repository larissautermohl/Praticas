
// // 01- Variável que o usuário tem que inserir nome do produto e o valor do produto.
// // de um desconto de 1 real no preco, guardando o preco na mesma variavel. 

// // const nomeProduto = prompt("nome produto?")
// // let precoProduto = Number(prompt("preco produto?"))
// // precoProduto = precoProduto -1

// // console.log(nomeProduto ,precoProduto )

// // 02- Peca para o usuario dois numeros e guarde e variaves diferentes.

// // const num1 = Number(prompt("inseira um num?"))
// // const num2 = Number(prompt("insira um num?"))
// // console.log (num1 + num2)

// // 02a- Multiplicar 3 com 5 e dividir ersultado por 2

// // let valor1 =3
// // let valor2 =5 
// // let valor3 =2

// // const resultado = (valor1 * valor2) / valor3

// // console.log((3*5)/2 )

// // 03- Sorteie numero entre 1 e 10 -Peca para o usuario numero de 1 a 10. Imprima no console os dois numeros dizendo se o que foi digitado pelo usuario é menor , maior, ou igual ao sorteado

// // const numeroSorteado =4
// // const numeroRecebido = Number(prompt("Insire numero de 1 a 10"))
// // console.log(`O numero sorteado foi: ${numeroSorteado}`)
// // if (numeroRecebido === numeroSorteado){
// //   console.log("Seu numero é igual ao sorteado")
// // }

// // else if( numeroRecebido > numeroSorteado ){
// //   console.log("Seu numero é maior ao sorteado")
// // }
// // else {
// //     console.log("Seu numero é menor ao sorteado")
  
// // }

// // 04- Para entrar na festa:
// // Ter mais de 18 anos
// // Ter mais de 1,60 de altura
// // Nao ter problema cardiaco
// // Pergunte ao usuario e digite no console. 

// // const idade = prompt("sua idade?")
// // const altura = prompt("altura em cms?")
// // const temProbCardiaco = prompt ("tem prob cardiaco?S/N")

// // if ( idade >=18 && altura >=160 && temProbCardiaco === "N"){
// // console.log("pode entrar")
// // }else{
// // console.log("Nao pode entrar")}

// // 05- Imprima a frase:
// // juntamente do tamanho
// // retire os espacos do inicio e fim
// // letras minusculas
// // verifique se as palavras comer e batata estao presentes
// // substitua cenoura por batata 
// // verifique novamente se possui as palavras comer e batata. 

// // const frase = " Hoje vou comer cenoura, ebaaa "

// // console.log(frase.length)
// // console.log(frase.trim())
// // console.log(frase.toLowerCase())
// // console.log(frase.includes("comer"))
// // console.log(frase.includes("batata"))
// // const fraseNova = " Hoje vou comer batata, ebaaa "
// // console.log(fraseNova.replaceAll("cenoura", "batata"))
// // console.log(fraseNova.includes("comer"))
// // console.log(fraseNova.includes("batata"))

// // 06-Lista de compra:
// // Imprima 
// // segundo item lista
// // tamanho da lista
// // adicione mandioca
// // verifique se a um item chamado cenoura
// // remova o item de indice

// // const lista = ["batata", "cenoura", "beterraba"]

// // console.log(lista [1])
// // console.log (lista.length)
// // lista.push("mandioca")
// // console.log(lista)
// // console.log(lista.includes("cenoura"))
// // lista.splice(1,1)
// // console.log(lista)

// //07- Crie uma funcao que receba um array de numeros e retorne um novo array com o ultimo e o primeiro  numero do array recebido divido por 2.

// // NAO CONSIGO ENTENDER!!!

// // const array = [6,7,8,9,10]

// // function divideDois1 (arrayDeNumeros) {
// // const primeiro = arrayDeNumeros[0] / 2
// // const ultimo = arrayDeNumeros [arrayDeNumeros.length-1]/2

// // arrayDeNumeros[0]= primeiro
// // arrayDeNumeros [arrayDeNumeros.length-1] =ultimo
// // return arrayDeNumeros
// // }

// // console.log(divideDois1(array))

// // 08-OBJETOS
// // Objeto represente pessoa com nome, idade, genero musical.Imprima no console
// // Crie uma nova pessoa com mesma idade e genero musical mas com nome diferente


// // const pessoa = {

// //   nome: "Maria",
// //   idade: 30,
// //   genMusical: "rock"
// // }
// //   console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade}, e gosta de, ${pessoa.genMusical}` )


// //   const novaPessoa={
// //     ...pessoa,
// //     nome: "Ana",
// //     profissao: "chef",
// //   }

// //   console.log(`O nome da nova pessoa é ${novaPessoa.nome}, ela tem ${pessoa.idade}, sua profissao é ${novaPessoa.profissao} e gosta de ${pessoa.genMusical}` )


// //09 CONDICIONAIS AULA

// //01-
// // let condicao1 = true
// // let condicao2 = true

// // if(condicao1) {
// //     console.log("entrei no if 1")
// // } else if(condicao2) {
// //     console.log("entrei no if 2")
// // } else {
// //     console.log("nao entrou em nenhuma")}
// // 


// //02-
// // let numero1 = Number(prompt("Insira um numero!"))
// // let numero2 = Number(prompt("Insira o segundo numero!"))

// // const comparaNumeros = (num1, num2) => {
// //     if(num1 === num2) {
// //         console.log("Sao iguais")
// //     } else if(num1 > num2) {
// //         console.log("num1 é maior que num2")
// //     } else if(num1 < num2) {
// //         console.log("num1 é menor que num2")
// //     } else {
// //         console.log("deu ruim")
// //     }
// // }

// //  comparaNumeros(numero1, numero2)

// // 03-let paisDeOrigem = prompt("Qual é o seu pais")

// // switch(paisDeOrigem.toLowerCase()) {
// //     case 'brasil': 
// //         console.log("brasileira")
// //     break
// //     case 'eua':
// //         console.log("norte americana")
// //     break
// //     case 'argentina': 
// //         console.log('argentina')
// //     break
// //     default:
// //         console.log('país nao identificado')
// //     break
// // }

// // 04-const pokemonInicial = prompt("Qual é o seu pokemon inicial?")

// // const retornaTipoDoPokemon = (pokemon) => {
// //     switch(pokemon) {
// //         case 'bulbasaur':
// //             return `${pokemon} é do tipo planta/veneno`
// //         case 'squirtle':
// //             return `${pokemon} é do tipo agua`
// //         case 'charmander':
// //             return `${pokemon} é do tipo fogo`
// //         default:
// //             return `esse pokemon não é importante`
// //     }
// // }

// // console.log(retornaTipoDoPokemon(pokemonInicial))

// // 05-const nomeDoPersonagem = prompt("Qual é o personagem: Luna Lovegood, Ron Weasley ou Draco Malfoy?")

// // const retornaCasaDeHogwarts = (personagem) => {
// //     if(personagem === 'Luna Lovegood') {
// //         return `${personagem} é da Corvinal`
// //     } else if(personagem === 'Ron Weasley') {
// //         return `${personagem} é da Grifinória`
// //     } else {
// //         return `${personagem} é da Sonserina`
// //     }
// // }

// // console.log(retornaCasaDeHogwarts(nomeDoPersonagem))

// // 06-let condicao1 = true
// // let condicao2 = false

// // if(condicao1 && !condicao2) {
// //     console.log("caiu no if 1")
// // }

// // if(!condicao2) {
// //     console.log("caiu no if 2")
// // }

// //07-

// // let maiorDeIdade = confirm("Você é maior de idade?")
// // let ensinoMedioCompleto = confirm("Você terminou o ensino médio?")
// // let estuda = confirm("Você já estuda em outra faculdade?")



// // const podeEstudar = (maiorDeIdade, ensinoMedioCompleto, naoEstuda) => {
// //     if(maiorDeIdade && ensinoMedioCompleto && !naoEstuda) {
// //         return "Boas vindas à faculdade!"
// //     } else {
// //         return "Voce nao pode estudar aqui"
// //     }
// // }


// //09- CONDICIONAIS REVISAO
// //Se for par, imprima é par
// //Senão imprima é impar
// //01-
// // const numero = Number(prompt("Insira um numero!"))

// // if(numero% 2 === 0){
// // console.log("é par")
// // }else{
// //   console.log("é impar")
// // }
// // 02-Receba do usuario o nome do bicho se for outro bicho retorne sem barulho
// // const bicho = prompt("Insira um bicho!")

// // if( bicho === "gato"){
// // console.log("miau")
// // }else if( bicho === "cahorro"){
// // console.log("auau")
// // }else if ( bicho === "vaca"){
// // console.log("muuuu")
// // }else {
// // console.log("nem um barulho reconhecido")
// // }

// //03-
// // const bicho = prompt("Insira um bicho!")

// //     switch(bicho) {
// // //         case 'cachorro':
// // //             console.log ("au au")
// // //             break;
// // //         case 'gato':
// // //             console.log ("miau")
// // //             break;
// // //         case 'vaca':
// // //             console.log ("muuuu")
// // //             break;
// // //         default:
// // //        console.log ("nem um barulho reconhecido")
// // //        break
// // //     }


// // // console.log(retornaTipoDoPokemon(pokemonInicial))


// // //10 Lacos

// // const numeros = [11,15,18,14,12,13,100,120]
// // let i = 0
// // let maior = -Infinity
// // // while(i < numeros.length){
// // //   if( numeros [i]> maior){
// // //     maior = numeros [i] 
// // // }
// // // i++
// // // }
// // // console.log(`O maior numero é ${maior}`)

// // // for ( let i=0; i < numeros.length; i++){
// // //   if(numeros[i]> maior){
// // //     maior =numeros [i]
// // // }
// // // }

// // //console.log(`O maior numero é ${maior}`)

// // for (let numero of numeros){
// //   if ( numero > maior){
// //     maior = numero 
// // }
// // }

// // console.log(`O maior numero é ${maior}`)

// //11- MAP E FILTER 


// //FILTER
// //PROGRAMA COM LISTA DE NUMEROS  E CRIRE DOIS NOVOS ARRAYS
// //SÓ COM NUMEROS MAIORES QUE 10
// //SÓ COM PARES

// const numeros = [2,8,10,15,18,13,22]

// //const retornaMaioresde10 = numeros.filter ((numero) => {
//   //return numero > 10

// //})
// //console.log (retornaMaioresde10)

// const retornaPares = numeros.filter((numero) => {
// return numero % 2 === 0
// })

// console.log(retornaPares)

////////////

//Dado um array de produtos onde cada produto possui nome,
//categoria e preço:
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
]

//● Retorne um novo array com todos os produtos porém
//com o 10% de desconto no preço
// const produtosComDesconto = produtos.map((prod)=> {
//   return {...prod, preco: (prod.preco*0.9).toFixed(2) }
// })

// console.log (produtosComDesconto)

// Usar tofixed pra diminuir o tamanho das casas decimais do resultado 

//● Retorne um array apenas com os itens da categoria
//hortifruti
// const hortifruti = produtos.filter((prod) => {
//   return prod.categoria === "Hortifruti"
// })
// console.log (hortifruti)


//● Retorne um array apenas com os itens de hortifruti E com
//10% de desconto no preço

const hortifrutiComDesconto = produtos.filter ((prod) => {
  return prod.categoria === "Hortifruti"
}).map ((prod)=> { 
  return {...prod, preco: (prod.ppreco*0.9).toFixed(2)}
})
console.log (hortifrutiComDesconto)


 