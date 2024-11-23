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

