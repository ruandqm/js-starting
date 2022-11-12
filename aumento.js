let valorDefinido = true
let aumento = 0
function calcularAumento(salarioBase) {
    switch (valorDefinido) {
        case (salarioBase < 1500):
            aumento = 20 / 100
            break;
        case (salarioBase > 1500 && salarioBase < 2000):
            aumento = 15 / 100
            break;
        case (salarioBase >= 2000 && salarioBase < 3000):
            aumento = 10 / 100
            break;
        case (salarioBase >= 3000):
            aumento = 5 / 100
            break;
    }

    let salarioFinal = salarioBase + (salarioBase * aumento)
    return (salarioFinal)
}
try {
    let salario = calcularAumento(2000)
    if (typeof salario != "number") {
        throw (error)
    }
    else {
        console.log(salario)
    }
}
catch (error) {
    console.error('algo deu errado')
}
