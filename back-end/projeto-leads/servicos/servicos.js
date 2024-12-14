import pool from "../conexao/conexao.js";

async function conexaoquery(conexao,query,params) {
    const resultado_query = await conexao.query(query, params);

    const resposta = resultado_query[0];

    return resposta;
}
export async function inserirLeads(email,nome) {
    const conexao = await pool.getConnection()

    const query = ("insert into usuarios (email,nome) values (?,?)")

    const leads = conexaoquery(conexao,query,[email, nome])
    
    conexao.release()

    return leads
}