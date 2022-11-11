let nome, senha

function solicitar() {
    nome = prompt("Informe seu nome:")
    senha = prompt("Crie uma senha")
    return (nome, senha)
}

function login(nome, senha) {
    let nomeInput = prompt("Informe seu nome:")
    let senhaInput = prompt("Informe sua senha")

    if (nomeInput === nome && senhaInput === senha) {
        console.log("aprovado")
    }
    else {
        console.log("reprovado")
    }
}

solicitar()
login(nome, senha)