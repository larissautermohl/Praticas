//a)
// const minhaString: string = 7
// O typeScript não permite atribuir um valor numérico para essa variável, pois já foi atribuido inicialmente uma tipagem string para essa variável.

//b)
// const meuNumero : number | string = "Posso passar uma string dessa maneira"
// A forma para que possamos atribuir a uma variável mais de uma tipagem, é utilizando o operador | referente a "ou"

//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum corFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}

const primeiraPessoa: Pessoa = {
    nome: "Murilo",
    idade: 31,
    corFavorita: corFavorita.LARANJA
}

const segundaPessoa: Pessoa = {
    nome: "Jana",
    idade: 15,
    corFavorita: corFavorita.VIOLETA
}

const terceiraPessoa: Pessoa = {
    nome: "Mina",
    idade: 23,
    corFavorita: corFavorita.AZUL
}

console.log(primeiraPessoa)

//d) Enum acrescentado na linha 16
