import express from "express";
import pool from "./dados/dados.js";
import { inserirLeads } from "./servicos/servicos.js";
import { validarNomeEmail } from "./validacao/validacao.js";
import cors from 'cors';

const app = new express()
app.use(express.json())
app.use(cors())

app.post('/usuario', async (req,res) =>{
 try {   
    console.log('Dados recebidos:', req.body);

    const { nome, email, idade } = req.body;

 const usuariovalido = validarNomeEmail(nome,email)
 console.log('Validação:', usuariovalido);
 
 if(usuariovalido.status){
    await inserirLeads(nome, email, idade);
    res.status(204).end();
} else{
    res.status(400).send({mensagem: usuariovalido.mensagem});
}
}catch (error) {
    console.error("Erro inesperado:", error);
    return res.status(500).send({ mensagem: 'Erro interno no servidor' });  // Erro 500 para falha interna
  }

});

app.listen(3002, async () => {
    console.log('servido iniciado')

    
})