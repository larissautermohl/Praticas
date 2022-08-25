function checaSeRepete(palavra: string): boolean {
    let isRepete = false
    const palavraOrdenada = palavra.split("").sort()

    for (let i=0; i < palavraOrdenada.length; i++) {
        if (palavraOrdenada[i] === palavraOrdenada[i + 1]) {
            isRepete = true
        }
    }

    return isRepete
}

function checaAnagrama(palavra: string): number {
    const isRepete = checaSeRepete(palavra)
    if (isRepete) return 0

    let resultado = 1
    for (let i = 1; i <= palavra.length; i++) {
        resultado *= i
    }

    return resultado
}

console.log(checaAnagrama("banana"))
console.log(checaAnagrama("boi"))
console.log(checaAnagrama("comida"))