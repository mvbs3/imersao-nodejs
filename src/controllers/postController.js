import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts (req, res) {
    // Busca todos os posts do banco de dados usando a função getTodosPosts.
    const posts = await getTodosPosts();

    // Envia os posts como uma resposta JSON com o status HTTP 200 (OK).
    res.status(200).json(posts);
}