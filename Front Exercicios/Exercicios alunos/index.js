// ## Conversor de temperatura

// Crie um conversor de temperaturas para as escalas em Fahrenheit e Kelvin. 

// ### Entrada

// O valor numérico em grau Celsius e uma string. “F” para Fahrenheit e “K” para Kelvin.

// ### Saída

// Saída: uma frase correspondente.

// ### Validações

// Depois de finalizar a implementação básica, trate os valores de entrada. O primeiro parâmetro deve ser sempre um número e o segundo uma string “F” ou “K” maiúsculas.

const convertTemperature = (temperature, unit) => {
  if (typeof temperature !== "number") {
    return `Erro. Parâmetro inválido ('temperature').`;
  }

  if (typeof unit !== "string") {
    return `Erro. Parâmetro inválido ('unit').`;
  }

  if (unit !== "F" && unit !== "K") {
    return `Erro. Parâmetro inválido ('unit').`;
  }

  if (unit === "F") {
    return `${temperature}ºC é equivalente a ${Math.round((temperature * 9 / 5) + 32)}ºF`;
  } else {
    return `${temperature}ºC é equivalente a ${Math.round(temperature + 273.15)}ºK`;
  }
};

console.log(convertTemperature(30, "K"));
console.log(convertTemperature(30, "F"));
console.log(convertTemperature("30", 40));
console.log(convertTemperature(30, "40"));

######################################################
######################################################

2- ## Cadastro de cliente

Crie um programa que insere um novo cliente no array de clientes.

### Lista de clientes já cadastrados

```jsx
[
	{ id: 1, nome: “Fulano” },
	{ id: 2, nome: “Ciclano” },
	{ id: 3, nome: “Beltrano” },
	{ id: 4, nome: “Fulana” }
]
```

### 2-Entrada

Um objeto de mesmo formato que os existentes na lista de clientes.

### Saída

A lista atualizada de clientes.

### Validações

Depois de finalizar a implementação básica, trate os valores de entrada. Um cliente deve sempre possuir uma id numérica única e um nome em string sem caracteres especiais.

const clientes = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const cadastraCliente = (novoCliente) => {
    if (typeof novoCliente.id !== "number") {
        return "Erro. id inválido, deve ser um número"
    }

    if (typeof novoCliente.nome !== "string") {
        return "Erro. nome inválido, deve ser uma string"
    }

    for (let cliente of clientes ) {
        if (cliente.id === novoCliente.id) {
            return "Erro. Parâmetro inválido ('id já existe')."
        }
    }

    clientes.push(novoCliente)
    return clientes
}

console.log(cadastraCliente({ id: 5, nome: "Fulano" }))
console.log(cadastraCliente({ id: 1, nome: "Ciclana" }))

######################################################
######################################################

## 3-Geração de tabuada

Crie um gerador de tabuada.

### Entrada

Um número de 1 a 10.

### Saída

Uma lista onde cada item representa uma operação da tabuada.

### Validações

Depois de finalizar a implementação básica, trate os valores de entrada.

O argumento deve ser um número entre 1 a 10.

### Exemplos de implementação básica

geraTabuada(5) retorna:

```jsx
[
	"5 x 0 = 0",
	"5 x 1 = 5",
	"5 x 2 = 10",
	"5 x 3 = 15",
	"5 x 4 = 20",
	... // e assim por diante até x 10
]
```

### Exemplos de validações

geraTabuada(”10”) retorna “Erro. Parâmetro inválido (’deve ser um número’).”

geraTabuada(50) retorna “Erro. Parâmetro inválido (’número precisa valer entre 1 e 10’).”

const geraTabuada = (num) => {
  if (typeof num !== "number") {
      return "Erro. Parâmetro inválido ('deve ser um número')."
  }

  if (num < 0 || num > 10) {
      return "Erro. Parâmetro inválido ('número precisa valer entre 1 e 10')."
  }

  const resultado = []

  for (let i = 0; i <= 10; i++) {
      resultado.push(`${num} x ${i} = ${num * i}`)
  }

  return resultado
}

console.log(geraTabuada(5))
console.log(geraTabuada("10"))
console.log(geraTabuada(50))

######################################################
######################################################

## Sistema de login

### Contas cadastradas

```jsx
const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]
```

### Entrada

E-mail e senha, ambas do tipo string.

### Saída

Frases de sucesso e erro para cada caso.

### Validações

E-mail deve possuir o caractere especial @ e a senha precisa ter no mínimo 6 caracteres.

### Exemplos de implementação básica

login(”astrodev@labenu.com”, “abc123”) retorna “login bem-sucedido”

login(”bananinha@gmail.com”, “banana”) retorna “e-mail ou senha incorretos”

### Exemplos de validações

login(”astrodev.labenu.com”, “abc123”) retorna “e-mail inválido”

login(”bananinha@gmail.com”, “ba”) retorna “senha deve possuir no mínimo 6 caracteres”

const accounts = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const login = (email, password) => {
	if (typeof email !== "string") {
		return "Erro. Parâmetro inválido (email)"
	}

	if (typeof password !== "string") {
		return "Erro. Parâmetro inválido (password)"
	}

	if (!email.includes("@")) {
		return "Erro. email inválido."
	}

	if (password.length < 6) {
		return "Erro. password deve possuir no mínimo 6 caracteres."
	}

	for (let account of accounts) {
		if (account.email === email) {
			if (account.password === password) {
				return "login bem-sucedido."
			}
		}
	}

	return "email ou password incorretos."
}

console.log(login("astrodev@labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "banana"))
console.log(login("astrodev.labenu.com", "abc123"))
console.log(login("bananinha@gmail.com", "ba"))

######################################################
######################################################

## Gerador de itens únicos

A ideia é unir duas listas de objetos, mas sem repetir os que possuem o mesmo valor em uma propriedade.

### Entrada

Duas listas de objetos com propriedade nome.

### Saída

Uma lista unificada com todos os objetos recebidos, porém sem repetir nomes.

### Validações

Sem validação.

### Exemplo de implementação

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

// 1. unir as duas listas e guardá-la em uma variável
// 2. cria a lista de resultado começando vazia
// 3. itera a lista unida
// 3.1 a cada iteração, procurar na lista de resultado pelo item iterado
// 3.2 o item já existe?
// 3.2.1 se sim, não faça nada
// 3.2.2 se não, adicione-o na lista de resultado
// 4. retorne o resultado

const geraItensUnicos = (arr1, arr2) => {
    const arrConcat = arr1.concat(arr2)
    const resultado = []

    for (let itemConcat of arrConcat) {
        const itemResultado = resultado.find((item) => item.nome === itemConcat.nome)

        if(!itemResultado) {
            resultado.push(itemConcat)
        }
    }

    return resultado
}

console.log(geraItensUnicos(primeiraLista, segundaLista))

######################################################
######################################################

## Validação de chaves de objeto

A ideia é analisar todas as propriedades do objeto recebido e identificar quais delas possuem um valor undefined.

### Dicas

Aproveite a lógica do exercício 2 do warmup de ontem (quinta-feira)!

Utilize a notação de colchete para acessar dinamicamente uma chave de objeto! O vídeo sobre notação de colchetes no notion do dia 1 vai te ajudar!

### Entrada

Um objeto de input.

### Saída

Um objeto contendo duas propriedades, uma isError booleana e uma errors com a lista de chaves inválidas.

### Validações

Sem validação.

### Exemplos de implementação

**validateInput({ id: 1, name: undefined, email: undefined })** retorna