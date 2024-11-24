import conectarAoBanco from "../config/dbConfig.js"
import {ObjectId} from "mongodb"
// Conecta ao banco de dados especificado pela variável de ambiente STRING_CONEXAO.
// Armazena a conexão em uma constante para uso posterior.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    // Seleciona o banco de dados 'teste-node-backend' dentro da conexão estabelecida.
    const db = conexao.db("teste-node-backend");

    // Seleciona a coleção 'posts' dentro do banco de dados selecionado.
    const colecao = db.collection("posts");

    // Busca todos os documentos (posts) da coleção e retorna como um array de objetos.
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("teste-node-backend");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizaPost(id, novoPost){
    const db = conexao.db("teste-node-backend");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objId)},{$set:novoPost});
}