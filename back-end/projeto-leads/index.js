import express from "express";
import pool from "./conexao/conexao.js";
import { Validacao } from "./validacao/validacao.js";
import { inserirLeads } from "./servicos/servicos.js";
import cors from 'cors'
const app = new express()
app.use(express.json())
app.use(cors())

app.post('/usuario', async (req,res) => {
try{
    console.log('Dados recebidos:', req.body);
    const {email, nome} = req.body;
    

const validaCao = Validacao(nome, email)
console.log('validacao:', validaCao)

if(validaCao.status){
    await inserirLeads(email, nome)
    res.status(204).end()
}else{
    res.status(400).send({mensagem: validaCao.mensagem});
}
}catch (error){
    console.error("Erro inesperado:", error);
    return res.status(500).send({ mensagem: 'Erro interno no servidor' })
}
    
})
app.listen(4000, async () => {
    console.log('SERVIDOR INICIADO')
})
