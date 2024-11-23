// Importa o módulo Express, essencial para criar um servidor web Node.js.
import express from "express";

// Importa a função para conectar ao banco de dados, provavelmente configurada em dbConfig.js.
import conectarAoBanco from "./src/config/dbConfig.js";

// Esta linha, se descomentada, imprime a string de conexão utilizada para debug.
// console.log(process.env.STRING_CONEXAO);

// Conecta ao banco de dados especificado pela variável de ambiente STRING_CONEXAO.
// Armazena a conexão em uma constante para uso posterior.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts de um banco de dados específico.
async function getTodosPosts() {
    // Seleciona o banco de dados 'teste-node-backend' dentro da conexão estabelecida.
    const db = conexao.db("teste-node-backend");

    // Seleciona a coleção 'posts' dentro do banco de dados selecionado.
    const colecao = db.collection("posts");

    // Busca todos os documentos (posts) da coleção e retorna como um array de objetos.
    return colecao.find().toArray();
}

// Cria uma instância do aplicativo Express para iniciar o servidor.
const app = express();

// Habilita o middleware para analisar corpos de requisições JSON.
// Essencial para lidar com dados enviados em formato JSON.
app.use(express.json());

// Inicia o servidor na porta 3000 e imprime uma mensagem de log no console.
app.listen(3000, () => {
    console.log("Server started...");
});

// Define uma rota GET para o endpoint /posts.
// Quando uma requisição GET é feita para este endpoint, a função é executada.
app.get("/posts", async (req, res) => {
    // Busca todos os posts do banco de dados usando a função getTodosPosts.
    const posts = await getTodosPosts();

    // Envia os posts como uma resposta JSON com o status HTTP 200 (OK).
    res.status(200).json(posts);
});
// function buscarPostPorID(id){
//     return posts.findIndex((post)=> {
//         return post.id === Number(id)

//     })
// }

// app.get("/posts/:id",(req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index])
// })