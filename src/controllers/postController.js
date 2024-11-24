import { atualizaPost, criarPost, getTodosPosts } from "../models/postsModel.js";
import fs from "fs"
import gerarDescricaoComGemini from "../services/geminiService.js";

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

export async function uploadImagem (req,res){
    const novoPost = {
        descricao : "",
        imgUrl: req.file.originalname,
        alt: ""
    }
    try {
        const postCriado  = await criarPost(novoPost)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado)
    } catch (error){
        console.error(error.message)
        res.status(500).json({"Error": "Falha na requisição"})
    }
}


export async function atualizarNovoPost (req,res){
    const id = req.params.id
    const urlImagem = `http://localhost:3000/${id}.png`

    try {
        const imgBuffer =  fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)
        const post = {
            img: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        const postCriado  = await atualizaPost(id, post)
        res.status(200).json(postCriado)
    } catch (error){
        console.error(error.message)
        res.status(500).json({"Error": "Falha na requisição"})
    }
}