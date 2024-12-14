function validarNome(nome) {
    nome = nome.trim();

    const isvalid = nome.length >= 2 && /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
    return isvalid;
}

 function validarEmail(email) {
    console.log('Validando email:', email);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isvalid = emailRegex.test(email);
  
    // Log de resultado da validação
    console.log('Email válido:', isvalid);
    return isvalid;
}

export function  validarNomeEmail(nome,email) {
    const nomevalido = validarNome(nome);
    const emailvalido = validarEmail(email);

    console.log('Nome válido:', nomevalido);
    console.log('Email válido:', emailvalido);

    if (nomevalido && emailvalido) {
        return { status: true, mensagem: 'Cadastro realizado com sucesso!' };
    } else {
        // Mensagem detalhada sobre qual campo é inválido
        if (!nomevalido && !emailvalido) {
            return { status: false, mensagem: 'Nome e email inválidos' };
        } else if (!nomevalido) {
            return { status: false, mensagem: 'Nome inválido' };
        } else {
            return { status: false, mensagem: 'Email inválido' };
        }
    }
}