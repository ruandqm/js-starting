function confirmarDados(nome) {
    var nomeCompleto = nome + ' da Silva';
    function getAnoNascimento() {
        const idade = 20;
        const ano = 2022 - idade;
        return ano;
    }
    try {
        console.log('nome completo', nomeCompleto);
        console.log('ano de nascimento', getAnoNascimento());
        console.log('idade', idade);
    }
    catch {
        console.error('um erro foi encontrado e não foi possível concluir a operação')
    }

}

confirmarDados('Marcos');