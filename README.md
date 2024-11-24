## README - Projeto Node.js com MongoDB e Google Cloud Deploy
#### Este é um guia detalhado para configurar e implementar um servidor Node.js 
#### utilizando MongoDB, gerenciar arquivos com Multer, e fazer deploy na Google Cloud.
#### O objetivo é criar um backend modularizado, eficiente e escalável.

## =============================
## Configuração Inicial
## =============================

# 1. Iniciar o Projeto
```shell
npm init es6 -y
```
# 2. Instalar o Express
```shell
npm install express
```
# 3. Criar o Servidor Básico
# Exemplo de código para inicializar um servidor:
```javascript
import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Server started...");
});
```

# Para rodar o servidor:
```shell
node server.js
```
# Ou utilize a opção de recarregamento automático:
```shell
node --watch server.js
```
# =============================
# Configuração do MongoDB
# =============================

# 1. Instalar o pacote do MongoDB
```shell
npm install mongodb
```
# 2. Criar o arquivo `.env` e configurar a string de conexão
``` 
STRING_CONEXAO=<sua_string_de_conexao>
```

# 3. Alterar o `package.json` para suportar o `.env`
```shell
# Adicionar no "scripts" do package.json:
"dev": "node --watch --env-file=.env server.js",
```

# Para rodar o servidor com o ambiente configurado:
```
npm run dev
```
# 4. Exemplo de uso de variáveis de ambiente
```
console.log(process.env.STRING_CONEXAO);
```

# 5. Criar script de conexão com o MongoDB
 - Criar `src/config/dbConfig.js` com a lógica de conexão
 - Importar e utilizar no `server.js`
```shell
# Código de exemplo para buscar posts:
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

async function getTodosPosts() {
    const db = conexao.db("teste-node-backend"); // Nome do banco
    const colecao = db.collection("posts"); // Nome da tabela
    return colecao.find().toArray();
}
```

# 6. Exemplo de uso em uma rota:
```javascript
app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
});
```

## =============================
## Modularização do Projeto
## =============================

## Criar as seguintes pastas dentro de `src`:
- `routes`: Rotas do projeto (ex.: `postRoutes.js`)
- `controller`: Lógica do projeto (requisições e respostas)
- `models`: Funções auxiliares (ex.: conexão com banco)

## =============================
## Upload de Arquivos com Multer
## =============================

# 1. Instalar o Multer
```shell
npm install multer
```
# 2. Exemplo de uso básico do Multer:
```javascript
const upload = multer({ dest: "./uploads" });

app.post("/upload", upload.single("imagem"), (req, res) => {
    res.send("Arquivo enviado!");
});
```

# 3. Configuração avançada para Windows (preserva o nome do arquivo):
```javascript
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });
```

# 4. Tornar arquivos estáticos acessíveis:
```shell
app.use(express.static("uploads"));
```

## =============================
## Deploy na Google Cloud
## =============================

# 1. Garantir compatibilidade com a versão do Node.js utilizada na Cloud
```shell
npm install dotenv
```
# 2. Criar projeto no Google Cloud e configurar:
- Clonar este repositório do GitHub
- Rodar o script `services.sh`
- Adicionar o arquivo `.env` ao projeto
- Instalar dependências:
```shell
npm install
```
# 3. Deploy do backend:
```
gcloud run deploy --source . --port 3000
```
## Após o deploy, utilize o endpoint fornecido pela Google Cloud.
