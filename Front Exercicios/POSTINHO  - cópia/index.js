// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b
// Exemplo:

// function checarDesigualdade(a, b) {
//   return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3))

// b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//   //  Sua lógica aqui
//   return `No comparador de iguildade ${a} === ${b} é ${a === b} `
// }
// console.log(checarIgualdade(1, 3))

// // c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior(a, b) {
//   return `No comparador verifique se ${a} é maior que ${b}. O resultado é ${
//     a > b
//   }`
// }

// console.log(verificaSeEMaior(300, 500))

// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = é maior? false
// // a-) 1==='1'= é igual? false
// // b-) 1=='1'= true
// // c-) 'a'==='b'= false
// // d-) 'b'>'a'= true
// // e-) 0!==null= true

//let verifica = 1 == '1'
//console.log(verifica)

// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------
// Escreva uma função que receba do usuário **nomeDoUsuario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de um array `usuario.` Porém só poderão se cadastrar:

// - Usuários maiores de 18 anos
// - A senha deve ter no mínimo 6 caracteres
// - E que a nacionalidade seja brasileira.

const cadastro = () => {
  const usuario = []
  const nome = prompt('Digite seu nome')
  const anoDeNascimento = Number(prompt('Data de nascimento'))
  const nacionalidade = prompt('Digite sua nacionalidade')
  const senha = prompt('Digite sua senha')
  const idade = 2021 - anoDeNascimento

  if (senha.length < 6) {
    console.log('Senha deve ter pelo menos 6 caracteres')
  }

  if (idade < 18) {
    console.log('Para se cadastrar precisa ter 18 anos')
  }

  if (nacionalidade !== 'brasileira') {
    console.log('Para se cadastrar precisa ser brasileiro')
  }

  if (idade >= 18 && nacionalidade === 'brasileira' && senha.length >= 6) {
    usuario.push(nome, anoDeNascimento, nacionalidade, senha)
    console.log('Usuario cadastrado com sucesso')
  }
  console.log('usuario:', usuario)
}
cadastro()

// // Exercício 4-----------------------------------------------------------------------------------------------
// - Exercício 4- Condicional - **Login do usuário**

//     Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  Dentro da função defina uma senha válida  Ex: const senha=”labenu”

//     - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
//     - Caso a senha seja inválida imprima no console (Senha Inválida)

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui

// }
// console.log(primeiraDose())

// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());

// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());
