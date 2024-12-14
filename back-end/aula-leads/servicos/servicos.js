import pool from "../dados/dados.js";

async function retornaquery(conexao, query,params) {
    const resultado_query = await conexao.query(query, params);

    const resposta = resultado_query[0];

    return resposta;
}
export async function inserirLeads(nome,email) {
    const conexao = await pool.getConnection()

    const query = ("insert into leads (email, nome) values (?,?)")

    const leads = retornaquery(conexao,query, [email, nome])
    
    conexao.release()

    return leads
}