import Funcionario from './Funcionario.js';

console.log('DEVinHouse m1-s05-e01');

const jose = new Funcionario("198.326.200-14", "Jose Val", 2000);

console.log(jose.salario);

jose.promover(50);

console.log(jose.salario);

jose.cpf = "002.623.891-41"

console.log(jose.cpf);
console.log(jose.cpfNumero);
