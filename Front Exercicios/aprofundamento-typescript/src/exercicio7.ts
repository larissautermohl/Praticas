enum classificacaoProdutos {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Íntimas"
}

type Produto = {
    nome: string,
    preco: number,
    classificacao: classificacaoProdutos
}

type ProdutoDesconto = {
    nome: string,
    preco: number,
    classificacao: classificacaoProdutos,
    precoComDesconto: number
}

const produtos: Produto[] = [
    {
        nome: "Camiseta de Banda",
        preco: 20,
        classificacao: classificacaoProdutos.VERAO
    },
    {
        nome: "Moletom Masculino",
        preco: 90,
        classificacao: classificacaoProdutos.INVERNO
    },
    {
        nome: "Sunga colorida",
        preco: 35,
        classificacao:classificacaoProdutos.BANHO
    },
    {
        nome: "Calcinha da Mônica",
        preco: 15,
        classificacao: classificacaoProdutos.INTIMAS
    },
]

function aplicaDescontoNosProdutos(produtos: Produto[]): (ProdutoDesconto | undefined)[] {
    const produtosComDesconto = produtos.map((produto) => {
        if (produto.classificacao === classificacaoProdutos.VERAO){
            return {...produto, precoComDesconto: (produto.preco - (produto.preco*5/100))}
        } else if (produto.classificacao === classificacaoProdutos.INVERNO) {
            return {...produto, precoComDesconto: (produto.preco - (produto.preco*10/100))}
        } else if (produto.classificacao === classificacaoProdutos.BANHO) {
            return {...produto, precoComDesconto: (produto.preco - (produto.preco*4/100))}
        } else if (produto.classificacao === classificacaoProdutos.INTIMAS) {
            return {...produto, precoComDesconto: (produto.preco - (produto.preco*7/100))}
        }
    })

    return produtosComDesconto
}

console.log(aplicaDescontoNosProdutos(produtos))