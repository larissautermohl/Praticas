function calculaAnos(dataInvert: string): number {
    const dateInvert = new Date(dataInvert)
    const dateAtual = new Date
    const idade = Math.floor(
        (dateAtual.getTime() - dateInvert.getTime())
        / 1000 / 60 / 60 / 24 / 365.25
    )

    return idade
}

function checaSeVencido(dataNasc: string, dataEmiss: string): boolean {
    const dataNascInvert = dataNasc.split("/").reverse().join("/")
    const dataEmissInvert = dataEmiss.split("/").reverse().join("/")

    const idade = calculaAnos(dataNascInvert)
    const anosEmiss = calculaAnos(dataEmissInvert)

    const cond1 = idade <= 25 && anosEmiss >= 5
    const cond2 = idade > 26 && idade <= 50 && anosEmiss >= 10
    const cond3 = anosEmiss >= 15

    return cond1 || cond2 || cond3
}

console.log(checaSeVencido("13/05/1997", "13/06/2017")) // 25 anos e 5 anos de carteira // true
console.log(checaSeVencido("13/05/1997", "13/06/2018")) // 25 anos e 4 anos de carteira // false

console.log(checaSeVencido("13/05/1987", "13/06/2012")) // 35 anos e 10 anos de carteira // true
console.log(checaSeVencido("13/05/1987", "13/06/2013")) // 35 anos e 9 anos de carteira // false

console.log(checaSeVencido("13/05/1971", "13/06/2007")) // 51 anos e 15 anos de carteira // true
console.log(checaSeVencido("13/05/1971", "13/06/2008")) // 51 anos e 14 anos de carteira // false