const somaDoisNumeros = (primeiro = 0, segundo = 0) => {
    return primeiro + segundo
}

console.log(somaDoisNumeros(5, 10))
console.log(somaDoisNumeros())

const checaSeListaVazia = (arr = []) => {
    return arr.length > 0
}

console.log(checaSeListaVazia([]))
console.log(checaSeListaVazia(["astrodev"]))
console.log(checaSeListaVazia())