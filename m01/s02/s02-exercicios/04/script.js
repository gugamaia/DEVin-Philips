var valorInformado = 0;
var contador = 0;
var totalSoma = 0;

while( valorInformado != -1 ) {
    contador ++;
    totalSoma += valorInformado;
          
    valorInformado = parseFloat(prompt('Informe um a valorInformado:'));    
}
contador = contador -1;

alert(`Foram informados ${contador} números, e sua soma é ${totalSoma}`);
