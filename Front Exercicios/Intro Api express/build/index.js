"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Exercício 1
app.get("/", (req, res) => {
    res.send("Hello from Express");
});
// Exercício 3
const users = [
    {
        id: "nifdvdf-rvdd4-fbfd4-gbfgbd",
        name: "Labenu",
        phone: 11 - 213423122,
        email: "labenu@labenu.com",
        website: "labenu.com.br"
    },
    {
        id: "knro2in3-fin3oi-v3nroi-3rrrfr",
        name: "Casas Bahia",
        phone: 11 - 382382712,
        email: "casasbahia@casas.com",
        website: "casasbahia.com.br"
    },
    {
        id: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4",
        name: "CVC",
        phone: 11 - 456643534,
        email: "cvc@cvc.com",
        website: "cvc.com.br"
    },
    {
        id: "fgregrgth-4353htrh-btb4tht4b-b4t4b",
        name: "Americanas",
        phone: 11 - 3454423343,
        email: "americanas@americanas.com",
        website: "americanas.com.br"
    }
];
// Exercício 4
app.get("/users", (req, res) => {
    if (!users) {
        res.status(401).send("Não tem usuários cadastrados!");
    }
    res.status(201).send(users);
});
// Exercício 6
// Resposta: Pode ser tanto junto com array de users como separado, as informações serão feitas por querys ou params. E o userId já faz essa junção dos dois arrays.
const posts = [
    {
        id: "232343-34343-3453-456468",
        title: "Educação que reinventa",
        body: "Venha estudar programação para se tornar um programador de sucesso!",
        userId: "nifdvdf-rvdd4-fbfd4-gbfgbd"
    },
    {
        id: "45453-232435-232434-2312",
        title: "Vem para Casas Bahia",
        body: "Aqui você encontra os melhores preços com frete gratis",
        userId: "knro2in3-fin3oi-v3nroi-3rrrfr"
    },
    {
        id: "45655-45534534-676767-7787",
        title: "CVC com os melhores preços e hoteis",
        body: "Venha curtir seus melhores momentos ao lado de quem você ama!",
        userId: "irog33hg-b35h5h4h-b4tht4bt4-b4tb4"
    },
    {
        id: "45334-3242343-2322343-54654",
        title: "Americanas",
        body: "Promoções todos os dias e com os melhores preços, venha conferir",
        userId: "fgregrgth-4353htrh-btb4tht4b-b4t4b"
    }
];
// Exercício 7
app.get("/posts", (req, res) => {
    if (!posts) {
        res.status(401).send("Não tem posts cadastrados!");
    }
    res.status(201).send(posts);
});
// Exercício 8
app.get("/post/:userId", (req, res) => {
    let user = req.params.userId;
    const post = posts.filter((post) => {
        return post.userId == user;
    });
    if (!post || post.length - 1) {
        return res.status(400).send("Coloque o id ou userId de um usuário válido");
    }
    res.status(201).send(post);
});
// Desafio 1
app.delete("/post/:id", (req, res) => {
    const postDelit = req.params.id;
    const deletPost = posts.findIndex((post) => {
        post.id === postDelit;
    });
    if (deletPost === -1) {
        res.status(401).send("Ocorreu um erro!");
    }
    posts.splice(deletPost, 1);
    res.status(201).send(posts);
});
//Desafio 2
app.delete("/user/:id", (req, res) => {
    const userDelit = req.params.id;
    const deletUser = users.findIndex((user) => {
        user.id === userDelit;
    });
    if (deletUser === -1) {
        res.status(401).send("Ocorreu um erro!");
    }
    users.splice(deletUser, 1);
    res.status(201).send(users);
});
app.listen(3003, () => {
    console.log("A porta 3003 está rodando! http://localhost:3000");
});
