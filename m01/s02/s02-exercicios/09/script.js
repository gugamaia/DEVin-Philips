var numeroInformado = parseInt(prompt('Informe um número'));
var raizNumero = parseFloat(prompt('Informe a raiz'));

var somaNumeros = numeroInformado;
var progressaoAritimetica = numeroInformado.toString();

for (let i = 0; i < 9; i++) {
    somaNumeros += raizNumero;
    progressaoAritimetica += `, ${somaNumeros}`
}

alert( `A progressão aritimética para o número informado, ${numeroInformado}, com raiz ${raizNumero} é a seguinte ${progressaoAritimetica}`);
