function confirmarDados(nome, idade) {

    var nomeCompleto = nome + ' da Silva';

    function getAnoNascimento() {
        var ano = 2022 - idade;
        return ano;
    }

    const anoDeNascimento = getAnoNascimento();

    function geracaoPertence() {
        if (anoDeNascimento <= 1995) {
            var geracao = 'geração X';

        }
        return (geracao)
    }
    const geracao = geracaoPertence();

    console.log('nome completo', nomeCompleto);
    console.log('ano de nascimento', anoDeNascimento);
    console.log('geração', geracao);

}

confirmarDados('Marcos', 40);