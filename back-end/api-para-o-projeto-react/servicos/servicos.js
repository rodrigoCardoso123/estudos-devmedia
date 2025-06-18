import pool from "../dados/dados.js";

async function retornaquery(conexao, query, params) {
    const resultado_query = await pool.query(query, params);

    const resposta = resultado_query[0];

    return resposta;
}

export async function inserirNome(Nome,Email,Idade) {
    const conexao = await pool.getConnection()

    const query = 'INSERT INTO usuarios (Nome,Idade,Email) VALUES (?,?,?)'

    const leads = retornaquery(conexao,query,[Nome, Idade, Email])

    conexao.release()

    return leads
}

export async function AtualizarNome(Nome,id) {
    const conexao = await pool.getConnection()

    const query = 'UPDATE usuarios SET Nome = "' + Nome + '" where idusuarios = ' + id

    const leads = retornaquery(conexao,query,[Nome])

    conexao.release()

    return leads
}
export async function AtualizarTudo(Nome,Email,Idade,id) {
    const conexao = await pool.getConnection()

    const query = 'UPDATE usuarios SET Nome = "' + Nome + '", Email = "' + Email + '", Idade = ' + Idade +  ' where idusuarios = ' + id

    const leads = retornaquery(conexao,query,[Nome,Email,Idade])

    conexao.release()

    return leads
}
export async function DeleteLinha(id) {
    const conexao = await pool.getConnection()

    const query = 'DELETE FROM usuarios where idusuarios = ' + id

    const nomes = await retornaquery(conexao,query)

    conexao.release()

    return nomes
}
export async function retornaTudo() {
    const conexao = await pool.getConnection()

    const query = 'SELECT * FROM users.usuarios'

    const nomes = await retornaquery(conexao,query)

    conexao.release()

    return nomes
}