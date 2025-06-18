import express from 'express'
import {inserirNome,retornaTudo,AtualizarNome, AtualizarTudo, DeleteLinha} from "./servicos/servicos.js"
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors());

const user = []

app.post( '/usuarios', async (req, res) => {
   console.log('Dados recebidos:', req.body)
   const { Nome, Idade, Email } = req.body

     if (!Nome || !Email) {
        return res.status(400).json({ erro: 'Nome e e-mail são obrigatórios' })
    }

    try {
        await inserirNome(Nome, Email, Idade)
        return res.status(201).json({ mensagem: 'Usuário inserido com sucesso' })
    } catch (erro) {
        console.error('Erro ao inserir usuário:', erro)
        return res.status(500).json({ erro: 'Erro interno ao inserir usuário' })
    }

})
app.patch('/usuarios/:id', async (req, res) => {
const idusuarios = req.params.id
const {Nome} = req.body
await AtualizarNome(Nome,idusuarios)

})

app.put('/usuarios/:id', async (req, res) => {
const idusuarios = req.params.id
const {Nome,Email,Idade} = req.body
await AtualizarTudo(Nome,Email,Idade,idusuarios)

})

app.delete('/usuarios/:id', async (req, res) => {
const id = req.params.id
await DeleteLinha(id)

})

app.get('/usuarios', async (req, res) => {
  let resNome = await retornaTudo()
  res.status(200).json(resNome)
})

app.listen(3001, () => {
    let data = new Date()
    console.log("Servidor node iniciado em: " + data)
})