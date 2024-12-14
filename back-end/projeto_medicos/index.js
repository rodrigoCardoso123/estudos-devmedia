import express from 'express'
import { retornaMedicos,retornaMedicosID,retornaMedicosDescricao } from './servicos/servicos.js';
import cors from 'cors';

const app = express()
app.use(cors());

app.get('/medicos', async (req,res) => {
 let descricao = req.query.descricao
 let medicos

 if(typeof descricao === 'undefined'){
    medicos = await retornaMedicos()
 }else if(typeof descricao !== 'undefined'){
    medicos = await retornaMedicosDescricao(descricao)
 }

if(medicos.length > 0) {
    res.json(medicos);
} else {
    res.status(404).json({mensagem: "Nenhum medico encontrado"})
}
}); 

app.get('/medicos/:id', async (req,res) => {
    const id = req.params.id
    let medicosid = await retornaMedicosID(id)
   
    res.json(medicosid)
}); 

app.listen(8050, async () => {
    const data = new Date()
    console.log('servidor iniciado em ' + data)
}); 

