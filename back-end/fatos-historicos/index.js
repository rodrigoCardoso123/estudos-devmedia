const express = require('express');
const app = express();

import pool from './servico/sql';

app.listen(8081, async () => {
    console.log("Servidor iniciado na porta 8081");
    const conexao = await pool.getConnection();

    console.log(conexao.threadId);

    conexao.release();
});