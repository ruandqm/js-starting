function confirmarDados(nome) {

    let nomeCompleto = nome + ' da Silva';
    let geracao = 'millenium';

    function getAnoNascimento() {
        const idade = 40;
        const ano = 2022 - idade;

        return ano;
    }

    var anoDeNascimento = getAnoNascimento();
    if (anoDeNascimento <= 1995) {
        geracao = 'geração X';

    }
    console.log('nome completo: ', nomeCompleto);
    console.log('ano de nascimento: ', anoDeNascimento);
    console.log('geração: ', geracao);
}

confirmarDados('Marcos')