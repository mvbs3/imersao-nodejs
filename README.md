Para iniciar o proejto, é encessário utiliza o comando:

            npm init es6 -y
Para utilizar o framework express:

            npm install express

COdigo básico do servidor para inicializar um server:

```javascript
import express from "express"

const app = express();

app.listen(3000, () => {
    console.log("Server started...");
})
```

Rodar o server:
        node server.js
        ou
        node --watch server.js
        //esse watch consegue atualziar o servidor instantaneamente

Instalar o pacoto do mongodb e usar mongo db atlas:
        npm install mongodb

Criar arquivo .env de variaveis de ambiente e configurar a configuração de conexao do mongo db

alterar o package json para receber o .env 
        "dev": "node --watch --env-file=.env server.js",
Agora pode utiliza o comando npm run dev

exemplo de Comando para utilizar variaveis de ambiete
        console.log(process.env.STRING_CONEXAO)

Criar um script de conexão com MongoDB, criar uma pasta src/config e um arquivo dbConfig.js e colocar um script para conexão com mongodb

É preciso importar no server.js esse script de conexão ao mongo db para realizar a conexão

```javascript
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

async function getTodosPosts(){
    const db =  conexao.db("teste-node-backend") //nome banco
    const colecao = db.collection("posts") // nome tabela
    return colecao.find().toArray()
}
```

E chamar a funcao em algumam metodo get/ post etc

```javascript
app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts)
})
```

Agora é necessário criar uma modularização:
Criar pastas para determinadas necesspidades do codigo:
pasta 1 dentro de src: routes, nessa pasta é criado o arquivo postRoutes.js para colocar apenas as rotas do projeto
pasta 2 dentro de src: controller, nessa pasta é criado a parte de lógica do projeto, para colcoar apenas a responsabildiade de lidar com reuqisicoes e repsostas
pasta 3 dentro de src: models, colocar todas as funções auxiliares como conectar o banco, fazer requisicoes ao banco eetc

Modelo routes, controlle models, perguntar a IA

Utilizar a extensão do vsCode que funciona como um postMan = ThunderClient

Utilizar Multer ajuda a gerenciar arquivos + gerenciamento de pastas de um computador, ao enviar uma imagem pro back-end é precisdo armazenar essa imagem
                npm install multer