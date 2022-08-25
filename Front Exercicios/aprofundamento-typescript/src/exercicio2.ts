//a)
// A entrada é um array de números, e a saída é um objeto com as informações desse array de números.

function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) numerosOrdenados é um array de números, soma é uma variável de number e estatística é uma variável do tipo objeto

//c)
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type amostraDeDados = {
    numeros: Array<number>,

    obterEstatisticas: (numeros: number[]) => Estatisticas
}

console.log(obterEstatisticas([5, 30, 10, 2, 58, 14, 7, 40, 21, 1]))