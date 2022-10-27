var convidado = prompt('Informe o nome do(a) convidado(a)');
var noivo = prompt('Informe o nome do noivo');
var noiva = prompt('Informe o nome da noiva');
var date = prompt('Informe a data do casamento');
var hora = prompt('Informe a hora do casamento');

var texto = `Caro ${convidado}!

Você está sendo convidado(a) para o casamento de ${noiva} e ${noivo}, a ser realizado no dia ${date}, às ${hora}!

Contamos com a sua presença!

Atenciosamente,
${noiva} & ${noivo}
`;



var paragrafo = document.getElementById('paragrafo');
paragrafo.innerText = texto;

console.log(texto);


