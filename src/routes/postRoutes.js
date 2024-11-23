import express from "express"
import multer from "multer"
import { listarPosts, postarNovoPost } from "../controllers/postController.js";


const upload = multer({dest: "./uploads"})

const routes  = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON.
    // Essencial para lidar com dados enviados em formato JSON.
    app.use(express.json());
    // Define uma rota GET para o endpoint /posts.
    // Quando uma requisição GET é feita para este endpoint, a função é executada.
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost )
    app.post("/upload", upload.single("imagem"),  uploadImagem)
}

export default routes;