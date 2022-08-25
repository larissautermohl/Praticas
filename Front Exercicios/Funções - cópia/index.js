//Funcões

// 1-Crie uma função para verificar se um valor é Truthy

// function verificaValor (valor){
// if (!!valor){
//   console.log("É Truthy")
// }
// }
// verificaValor(5) 


// 2-Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// function perimetroDoQuadrado ( lado ){

// const perimetro = lado * 4
// return perimetro

// }
// console.log(perimetroDoQuadrado(4));

// 3- Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// function nomeSobrenome( nome, sobrenome){

// const nomeCompleto= nome + sobrenome
// return nomeCompleto
// }
// console.log(nomeSobrenome("Larissa", "Utermohl"))


// 4-Crie uma função que verifica se um número é par
// function respostaDoUsuario (numero){

// if (numero % 2 === 0) {
//   console.log("é par")
// } else {
//   console.log("é impar.")
//  }
// }
// respostaDoUsuario(4)

// ATENCAOOOO
// 5-Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
// function tipoDado(valor){

//   return typeof valor
// }
// console.log(tipoDado(6))



// 6-Corrija o erro abaixo

// function precisoVisitar(paisesVisitados) {
//   const totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);


    const totalPaises = 193
    function precisoVisitar(paisesVisitados){
      return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
    }
    function jaVisitei(paisesVisitados){
      return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
    }
    console.log(precisoVisitar(20));
    console.log(jaVisitei(20));
