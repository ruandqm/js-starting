let soma = 2 + 2
let subtracao = (-2) - (-4)
let divisao = 80 / 3
let resto = 80 % 3

for (let increment = 0; increment < 5; increment++) {
    soma++
}

for (let decrement = 0; decrement < 3; decrement++) {
    soma--
}

//Operadores lógicos
if (caminho_5km && corro_2km) {
    passo_o_dia_bem
}
if (levanto_cedo || antes_das_8h) {
    saio_tranquilo
}
if (!termino_o_trabalho || !tenho_compromisso) {
    saio_tarde
}

//Lacos de repeticao
let nums = [12, 6, 9, 42, 11, 102, 44, 15]
soma = 0

for (let i = 0; i < nums.length; i++) {
    soma += nums[i];
}

while (i < nums.length) {
    soma += nums[i];
    i++
}

do {
    soma += nums[i];
    i++
} while (i < nums.length)