import pool from "../dados/dados.js";

async function retornaquery(conexao, query) {
    const resultado_query = await pool.query(query);

    const resposta = resultado_query[0];

    return resposta;
}

export async function retornaMedicos() {
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM projeto_medicos.medicos'

    const medicos = await retornaquery(conexao,query)

    conexao.release()
    return medicos
}
export async function retornaMedicosID(id){
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM projeto_medicos.medicos where id = ' + id

    const medicos = await retornaquery(conexao,query)

    conexao.release()
    return medicos
}
export async function retornaMedicosDescricao(descricao){
    const conexao = await pool.getConnection()
    const query = 'SELECT * FROM projeto_medicos.medicos where descricao like "%'+descricao+'%"'

    const medicos = await retornaquery(conexao,query)

    conexao.release()
    return medicos
}
