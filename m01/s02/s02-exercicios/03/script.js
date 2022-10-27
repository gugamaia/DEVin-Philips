// Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
// 2 x 0 = 0
// 2 x 1 = 2
// ....
// 2 x 10 = 20

// O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.

// dica: de uma olhadinha no for.

// Realize o commit do exercício resolvido.
var numeroInformado = parseInt(prompt('Você deseja saber a tabuada de qual valor?'));
var tabuada = '';

if (isNaN(numeroInformado)) {
    tabuada = 'Número informado invalido';
} else {
    for(let i = 1; i <= 10; i++) {
        tabuada += `${numeroInformado} x ${i} = ${numeroInformado * i} ${i !== 10 ? '\n' : ''}`;
    }
}

alert(tabuada);

// for(i = 1; i <= 10; i++){
//     tabuada = numeroInformado * i;
//     console.log(`${numeroInformado} * ${i} = ${tabuada}`)
//         }
    
