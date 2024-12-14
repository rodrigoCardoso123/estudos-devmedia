function validacaoNome(nome) {
    nome = nome.trim();

    const isvalid = nome.length >= 2 && /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
    return isvalid;
}

function validacaoEmail(email) {
    console.log('Validando email:', email);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isvalid = emailRegex.test(email)

    console.log('Email válido:', isvalid);
    return isvalid;
}

export function Validacao(nome, email) {
    const nomeValidado = validacaoNome(nome)
    const emailvalidado = validacaoEmail(email)
    
    console.log('nome válido:', nomeValidado );
    console.log('Email válido:', emailvalidado );
    

    if(nomeValidado && emailvalidado ){
        return{status: true, mensagem:'Cadastro realizado com sucesso!'}
    }if(!nomeValidado){
        return{status: false, mensagem:'nome Invalido!'}
    }else{
        return{status: false, mensagem:'email Invalido!'}
    }
}