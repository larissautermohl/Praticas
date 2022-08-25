// Escopo

// 1Por qual motivo o código abaixo retorna com erros?
{
  const marca = 'Fiat'
  let portas = 4
}
console.log(marca, portas)

Resposta: Porque o console log deveria estar dentro das chaves, dentro do escopo onde foram declaradas.

//2Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2
//   return x + dois

//   function dividirDois(x) {
//     return x + dois
//   }
//   somarDois(4)
//   dividirDois(6)
// }

Resposta - erro1: Movendo a variavel de dentro da funcao.
Resposta - erro2: substituindo o sinal de + por /

const dois = 2
function somarDois(x) {
  return x + dois
}
function dividirDois(x) {
  return x / dois
}

console.log(somarDois(4))
console.log(dividirDois(6))
