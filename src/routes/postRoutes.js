import express from "express"
import multer from "multer"
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  })
  
const upload = multer({ dest: "./uploads" , storage})
//const upload = multer({dest: "./uploads"})

const routes  = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON.
    // Essencial para lidar com dados enviados em formato JSON.
    app.use(express.json());
    app.use(cors(corsOptions))
    // Define uma rota GET para o endpoint /posts.
    // Quando uma requisição GET é feita para este endpoint, a função é executada.
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost )
    app.post("/upload", upload.single("imagem"),  uploadImagem)
    

    app.put("/upload/:id", atualizarNovoPost )
}

export default routes;