import express from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"

// tudo que estiver abaixo do dotenv.config , vai poder acessar os valores que estão no .env
dotenv.config()


const app = express();
app.use(cors());
app.use(express.json());


const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: 3306
    }
})

app.get("/getUsers", async (req, res) => {
    try {

        // Usando o raw - Utilizo sintaxe de SQL
        const allUsers2 = await connection.raw(`SELECT * FROM usuario_mercado`)
        res.status(200).send(allUsers2[0])

        // Usando o query Builder
        const allUsers = await connection("usuario_mercado")
            .select("*")

        if (!allUsers.length) {
            res.statusCode = 404
            throw new Error("Não existe usuarios cadastrados")
        }

        res.status(200).send(allUsers)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.post("/createUser", async (req, res) => {
    try {
        const { nome, email, idade, telefone, cidade, uf } = req.body

        // validação - > Verificar se os valores estão vindo vazios
        if (!nome || !email || !idade || !telefone || !cidade || !uf) {
            throw new Error("Você esta mandando alguma informação vazia")
        }

        // Usando o raw - Utiliza sintaxe SQL
        await connection.raw(`
            INSERT INTO usuario_mercado (nome,email,idade,telefone,cidade,UF)
            values("${nome}","${email}",${idade},"${telefone}","${cidade}","${uf}");
        `)

        // Usando o query builder
        await connection("usuario_mercado").insert({
            nome: nome,
            email: email,
            idade: idade,
            telefone: telefone,
            cidade: cidade,
            unidade_federativa: uf
        })
        // nomeDaColunaNoBanco: nomeDoValorNoBody




        res.status(201).send("Usuario criado com sucesso!")

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Servidor esta rodando na url http://localhost:3003")
})


