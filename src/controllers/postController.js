import { criarPost, getTodosPosts } from "../models/postsModel.js";

export async function listarPosts (req, res) {
    // Busca todos os posts do banco de dados usando a função getTodosPosts.
    const posts = await getTodosPosts();

    // Envia os posts como uma resposta JSON com o status HTTP 200 (OK).
    res.status(200).json(posts);
}

export async function postarNovoPost (req,res){
    const novoPost = req.body
    try {
        const postCriado  = await criarPost(novoPost)
        res.status(200).json(postCriado)
    } catch (error){
        console.error(error.message)
        res.status(500).json({"Error": "Falha na requisição"})
    }
}