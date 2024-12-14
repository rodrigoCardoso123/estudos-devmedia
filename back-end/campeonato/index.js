import express from 'express';
import pool from './servicos/servico.js';
import { RetornaTabela,TanelaporId,TabelaporAno,TabelaporTime } from './dados/dados.js';

const app = express();

app.get('/campeonatos', async (req, res) =>  {
    let campeonatos;

    const ano = req.query.ano;
    const time = req.query.time;

    if(typeof ano === 'undefined' && typeof time === 'undefined') {
        campeonatos = await RetornaTabela();
    }
    else if (typeof ano !== 'undefined') {
        campeonatos = await TabelaporAno(ano);
    }
    else if (typeof time !== 'undefined') {
        campeonatos = await TabelaporTime(time);
    }

    if(campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }

 });

app.get('/campeonatos/:id', async (req, res) =>  {
    const id = req.params.id;

    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ mensagem: "ID deve ser um número válido" });
    }
 try {
    const campeonato = await TanelaporId(id);

    if(campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }
} catch (error) {
    // Lidar com erros imprevistos
    return res.status(500).json({ mensagem: "Erro ao processar a solicitação", erro: error.message });
}
});

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: "+data);
});