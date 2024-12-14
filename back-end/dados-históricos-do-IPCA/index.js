const express = require('express');
const app = express();

const historicoInflacao = require('./dados/dados')
const buscar = require('./servicos/servicos')
app.get('/historicoIPCA/calculo', (req, res) =>  {
    let valor = parseInt(req.query.valor)
    let mesInicial = parseInt(req.query.mesInicial)
    let anoInicial = parseInt(req.query.anoInicial)
    let mesFinal = parseInt(req.query.mesFinal)
    let anoFinal = parseInt(req.query.anoFinal)

    if(buscar.validacaoErro(valor,mesInicial,anoInicial,mesFinal,anoFinal)){
        res.status(400).json({ erro: 'Parâmetros inválidos' });
    }
    const resultado = buscar.resultadoIPCA(valor, mesInicial, anoInicial, mesFinal,anoFinal);
    res.json({ resultado: resultado });
 });

app.get('/historicoIPCA/:id', (req, res) =>  {
    let id = parseInt(req.params.id)
    let idipca = buscar.buscarPorId(id)

    if(idipca){
        res.json(idipca)
    }else if(isNaN(id)){
        res.status(400).send({ "erro": "Requisição inválida" });
    }else{
        res.status(404).send({ "erro": "UF não encontrada" });
    }
 
 });

app.get('/historicoIPCA', (req, res) =>  {
    const IPCA = historicoInflacao.historicoInflacao
    const ano = parseInt(req.query.ano);

    if(isNaN(ano)){
        res.json(IPCA)
    }else{
        const resultado = buscar.buscarPorAno(ano)
        if(resultado.length > 0){
            res.json(resultado)
        }else{
            res.status(404).json({ erro: 'Nenhum histórico encontrado para o ano especificado' });
        }
    }
    
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081");
});