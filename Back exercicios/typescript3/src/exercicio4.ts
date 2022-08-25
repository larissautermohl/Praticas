enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Pessoa = {
    nome: string,
    salario: number,
    setor: SETOR,
    presencial: boolean
}

const equipe: Pessoa[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function pegaPresencial(lista: Pessoa[]): Pessoa[] {

    const resultado: Pessoa[] = lista.filter((item: Pessoa) => {
        const primeiraCondicao = item.setor === SETOR.MARKETING
        const segundaCondicao = item.presencial === true
        return primeiraCondicao && segundaCondicao
    })

    return resultado
}

console.log(pegaPresencial(equipe))