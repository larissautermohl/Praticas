// Array e Loops

// Retorne uma lista com os
//números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33]

const maioresQueCem = numeros.filter(item => item > 100)
console.log(maioresQueCem)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const checarInstrumento = instrumentos.forEach(instrumento => {
  if (instrumento === 'Baixo') {
    console.log(true)
  } else {
    console.log(false)
  }
})

const checarInstrumento = instrumentos.forEach(instrumento => {
  if (instrumento.toLowerCase() === 'baixo') {
    console.log(true)
  } else {
    console.log(false)
  }
})

//Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 4.99
  },
  {
    item: 'Ovo',
    preco: 2.99
  },
  {
    item: 'Carne',
    preco: 25.49
  },
  {
    item: 'Refrigerante',
    preco: 5.35
  },
  {
    item: 'Quejo',
    preco: 10.6
  }
]

const sum = compras.reduce((acumular, item) => acumular + preco.preco, 0)
console.log(sum)
