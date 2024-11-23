import express from "express"

const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Gatinho fofo dormindo",
        imagem: "https://placecats.com/200/300"
    },
    {
        descricao: "Olhar penetrante",
        imagem: "https://placecats.com/gray/400/200"
    },
    {
        descricao: "Brincando com um novelo de lã",
        imagem: "https://placecats.com/kitten/350/250"
    },
    {
        descricao: "Gato curioso",
        imagem: "https://placecats.com/orange/500/300"
    },
    {
        descricao: "Miauuuu!",
        imagem: "https://placecats.com/tabby/400/400"
    },
    {
        descricao: "Gato preto, sorte preta!",
        imagem: "https://placecats.com/black/300/300"
    }
];

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Server started...");
})

app.get("/api",(req, res) => {
    res.status(200).send("Hello World, meu app express!")
})