function sum(num1, num2) {
    return num1 + num2;
}

function exp(base, exponent) {
    return base ** exponent;
}

function round(value, precision) {
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

//console.log(sum(2, 4));

//console.log(exp(2, 3));

//console.log(round(2.34566778, 2));

// tenho controle do que eu quero exportar, encapsulo o que quero exportar
// aumento a seguranca e manutenibilidade do meu codigo assim
// apenas recursos exportados podem ser importados no outro modulo
export {sum, exp, round}; // named exports, sao exportacoes explicitas eu digo o que quero exportar