// Importa o módulo Express, essencial para criar um servidor web Node.js.
import express from "express";
import routes from "./src/routes/postRoutes.js";



// Cria uma instância do aplicativo Express para iniciar o servidor.
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e imprime uma mensagem de log no console.
app.listen(3000, () => {
    console.log("Server started...");
});

