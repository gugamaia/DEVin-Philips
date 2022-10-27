// código da aula

var usuarioConectado = true;
let idade = 2;
//Condicionais simples
// if (usuarioConectado && idade >= 18) {
//   console.log('Entrou');
// }

//Condicionais compostas
// if (idade < 18) {
//   console.log('Menor de idade!');
// } else {
//   console.log('Maior de idade!');
// }

//Condicionais multi compostas
// if (idade >= 65 && idade < 150) {
//   console.log('Melhor idade');
// } else if (idade >= 18 && idade < 150) {
//   console.log('Maior de idade');
// } else if (idade >= 0 && idade < 18) {
//   console.log('Menor de idade');
// } else {
//   console.log('Idade inválida');
// }

// if (idade > 20) {
//   console.log('Olá');
//   return;
// }
// var test = 2 * 'q';
// console.log(typeof test === 'string');
// console.log(isNaN(test));
// console.log(test === NaN);

// Condicionais com Switch
// var desconto = 'PARCELADO';
// switch (desconto) {
//   case 'AVISTA':
//   case 'DEBITO':
//     console.log('10%');
//     break;
//   case 'PARCELADO':
//   case 'APRAZO':
//     console.log('5%');
//     break;
//   default:
//     console.log('0%');
// }

// Condicionais com operador ternário

var isAutenticado = false;

isAutenticado ? console.log('Seja bem vindo!') : console.log('Acesso negado!');

var resultado = 10 % 2 === 0 ? 'Par' : 'Ímpar';
console.log(resultado);
