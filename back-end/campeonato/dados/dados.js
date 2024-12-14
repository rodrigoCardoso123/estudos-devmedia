import pool from "../servicos/servico.js"

async function executaQuery(conexao, query) {

    const resultado_query = await pool.query(query);

    const resposta = resultado_query[0];

    return resposta;
}

export async function RetornaTabela(){
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM campeonatos.libertadores'

    const campeonatos = await executaQuery(conexao,query);

    conexao.release();

    return campeonatos
}
export async function TanelaporId(id){
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM campeonatos.libertadores where id =' + id

    const campeonatos = await executaQuery(conexao,query);

    conexao.release();

    return campeonatos
}
export async function TabelaporAno(ano){
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM campeonatos.libertadores where ano =' + ano

    const campeonatos = await executaQuery(conexao,query);

    conexao.release();

    return campeonatos
}
export async function TabelaporTime(time){
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM campeonatos.libertadores where campeao = "'+time+'"'

    const campeonatos = await executaQuery(conexao,query);

    conexao.release();

    return campeonatos
}