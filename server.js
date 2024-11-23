import express from "express"
import conectarAoBanco from "./src/config/dbConfig.js"
//console.log(process.env.STRING_CONEXAO)
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

async function getTodosPosts(){
    const db =  conexao.db("teste-node-backend") //nome banco
    const colecao = db.collection("posts") // nome tabela
    return colecao.find().toArray()
}


const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Server started...");
})

app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts)
})

// function buscarPostPorID(id){
//     return posts.findIndex((post)=> {
//         return post.id === Number(id)

//     })
// }

// app.get("/posts/:id",(req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index])
// })