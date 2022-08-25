// 1-Mostre no console cada item e index do array
// const comidas = ['Batata Frita', 'Arroz', 'Feijão']
// comidas.forEach(almoco => {
//   console.log(almoco)
// })

// Como corrigir os erros abaixo:
const imgs = ['Array de imagens', 'Outra img']

// // Err 1
// imgs.forEach((item, index, array) => {
//   console.log(item, index, array)
// })

// RESPOSTA: FAlTAVA UM PARENTESES

// // Err 2
// let i = 0
// imgs.forEach(index => {
//   console.log(i++)
// })

// RESPOSTA: FAlTAVA O INDEX

// Err 3
imgs.forEach(() => i++);
