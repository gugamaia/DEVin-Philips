var numeroInformado = parseInt(prompt('Informe um número'));

if(isNaN(numeroInformado) || numeroInformado <= 0) {
    alert('Número não é válido, insira um número válido');
} else {
    var par = 0;
    var impar = 0;

    for (let i = 0; i <= numeroInformado; i++) {
        i % 2 === 0 ? par++ : impar++;
    }

    alert(`Há ${par} números pares e ${impar} números impares entre 0 e ${numeroInformado}.`);
}
