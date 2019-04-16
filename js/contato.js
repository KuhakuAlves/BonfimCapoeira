function getInformacoes() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const assunto = document.getElementById("assunto");
    const mensagem = documento.getElementById("mensagem");
    return {
        nome,
        email,
        assunto,
        mensagem
    }
}

function ValidaCampos(oEmail) {
    if (oEmail.nome === "") {
        alert("Campo obrigatório");
        document.getElementById("nome").focus();
        return false;
    }
    else if (oEmail.email === "") {
        alert("Campo obrigatório");
        document.getElementById("email").focus();
        return false;
    }
    else if (oEmail.assunto === "") {
        alert("Campo obrigatório");
        document.getElementById("assunto").focus();
        return false;
    }
    else if (oEmail.mensagem === "") {
        alert("Campo obrigatório");
        document.getElementById("mensagem").focus();
        return false;
    }
    return true;
}

