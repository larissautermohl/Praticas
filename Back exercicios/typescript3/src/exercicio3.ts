enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

function geraFilme(
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?:number
): Filme {
    const novoFilme: Filme = {
        nome,
        anoLancamento,
        genero
    }

    if (pontuacao) {
        novoFilme.pontuacao = pontuacao
    }

    return novoFilme
}

console.log(geraFilme("Duna", 2021, GENERO.ACAO, 74))
console.log(geraFilme("Duna", 2021, GENERO.ACAO))