import express from "express"
import { listarPosts } from "../controllers/postController.js";



const routes  = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON.
    // Essencial para lidar com dados enviados em formato JSON.
    app.use(express.json());
    // Define uma rota GET para o endpoint /posts.
    // Quando uma requisição GET é feita para este endpoint, a função é executada.
    app.get("/posts", listarPosts);
}

export default routes;