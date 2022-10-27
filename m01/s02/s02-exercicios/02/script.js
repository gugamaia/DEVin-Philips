// Utilizando estrutura condicional **exiba** a descrição da classificação da **idade** da pessoa de acordo com os dados abaixo:

// Jovens - Indivíduos de até 15 anos;
// Adultos - Indivíduos com idade entre 16 até 64 anos;
// Idosos - Indivíduos de 65 anos em diante.

// Utilize prompt para solicitar a idade e alert para exibir a classificação.

// Realize o commit do exercício resolvido.

 function classificacaoEtaria() {
    let validaIdade = true;
  
    while (validaIdade) {
      let idade = prompt("Digite a idade.");
  
      if (idade >= 0 && idade < 16) {
        validaIdade = false;
        alert("Você é jovem.");
      } else if (idade > 15 && idade < 65) {
        validaIdade = false;
        alert("Você é Adulto.");
      } else if (idade > 64 && idade < 120) {
        validaIdade = false;
        alert("Você é idoso.");
      } else {
        validaIdade = true;
        alert("Entrada invalida.");
        // classificacaoEtaria();
      }
    }
  }
  
  classificacaoEtaria();
  