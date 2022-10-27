var primeiroNumero = parseInt(prompt('Informe um número'));
var segundoNumero = parseInt(prompt('Informe outro número'));
var tipoOperacao = prompt('Informe qual operação deseja realizar');

var resultadoFinal = '';

if(!isNaN(primeiroNumero) && !isNaN(segundoNumero)) {
    switch(tipoOperacao) {
        case '+':
            resultadoFinal = `${primeiroNumero} + ${segundoNumero} = ${primeiroNumero + segundoNumero}`;
            break;
        case '-':
            resultadoFinal = `${primeiroNumero} - ${segundoNumero} = ${primeiroNumero - segundoNumero}`;
            break;
        case '*':
            resultadoFinal = `${primeiroNumero} * ${segundoNumero} = ${primeiroNumero * segundoNumero}`;
            break;
        case '/':
            resultadoFinal = `${primeiroNumero} / ${segundoNumero} = ${primeiroNumero / segundoNumero}`;
            break;
        default:
            resultadoFinal = 'Operação invalida';
    }

} else {
    resultadoFinal = 'Pelo menos um dos números informados é inválido.';
}

alert(resultadoFinal);
