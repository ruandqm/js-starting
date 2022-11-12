function confirmarDados(nome) {
    var nomeCompleto = nome + ' da Silva';
    return nomeCompleto
}

function getAnoNascimento() {
    idade = 20;
    var ano = 2022 - idade;
    return ano;
}

console.log('nome completo: ', confirmarDados('Marcos'));
console.log('ano de nascimento: ', getAnoNascimento());
console.log('idade: ', idade);

