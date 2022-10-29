# Conta Bancária

Olá Dev(a)! Parabéns, você acaba de ser contratado e seu projeto de onboard será o desenvolvimento de um sistema de conta bancária para pessoa física.

Nessa primeira versão será contemplado:

Cadastro de clientes

Depósitos

Saques

Consulta de saldo

Se divirta e qualquer dúvida/dificuldade fique a vontade para perguntar.

# 1 FEITO
Um bom projeto precisa de uma boa arquitetura, nessa tarefa devem ser criados os arquivos básicos e desenvolvido a documentação.

Criar um novo projeto adicionando os arquivos básicos (html, css e js)

Linkar os arquivos criados (adicionar o script e o link no html)

Criar um readme.md e documentar ele. Dicas

Criar o repositório no github

Realizar o commit e o push desta tarefa

Realizar o merge dessa branch para a branch main

# 2
Nessa tarefa deve ser criado o layout básico da página, fique livre para criar como achar melhor, escolha as cores para compor o layout e divirta-se!

Criar uma nova branch para essa funcionalidade

Implementar um header com a logo e nome da aplicação

Implementar um footer com os dados da empresa e redes sociais

Realizar o commit e o push desta tarefa

Realizar o merge dessa branch para a branch main

# 3
Nessa tarefa deve ser criada a parte visual do formulário de cadastro.

Criar uma nova branch para essa funcionalidade

Criar um formulário contendo os seguintes campos:

Nome

CPF

Celular

Senha

Confirmação da senha

Botão para enviar o formulário

Botão para limpar o formulário

Realizar o commit desta parte
# 4
Nessa tarefa devem ser adicionadas funcionalidades ao formulário criado na tarefa anterior.

Utilizar a mesma branch criada na tarefa anterior

Criar uma função para salvar os dados do formulário em um array

Criar validações para ver se os campos foram preenchidos e as senhas conferem

Criar uma variável iniciando com um array vazio no início do script para armazenar as contas dos clientes.

Deve ser gerado um número aleatoriamente para se o número da conta       Dica: Math.floor(1000 + Math.random() * 90000)

No final o objeto armazenado deve possuir uma estrutura similar a essa:{ nome: 'Thais Bertoldo', cpf: '999.999.999.99', celular: '(99) 99999-9999', senha: '99999999', conta: '99999', saldo: 0, } 

Se der tudo certo com a criação da conta, exiba a mensagem de conta criada com sucesso e o número da conta criada.

Realizar o commit e o push desta tarefa

Realizar o merge dessa branch para a branch main

# 5
Nessa tarefa deve ser criada a intervace visual para as operações

Criar nova branch para esta funcionalidade

Adicionar um formulário com os seguintes campos

Operação (Saque, Depósito ou Consulta saldo)

Valor

Conta

Senha

Botão para confirmar

Botão para limpar

Se a opção selecionada for saque deve ser desabilitado o campo de valor

Realizar o commit desta parte

# 6
Nessa tarefa será adicionado os eventos ao formulário criado.

Utilizar a mesma branch criada na tarefa anterior

Criar 3 funções por enquanto sem nada dentro, uma para cada operação

Adicionar um evento ao submit do formulário criado anteriormente para executar uma função que deve:

Validar se a conta existe e a senha está correta

Verificar qual é a operação selecionada

Chamar a função correspondente à operação

Realizar o commit desta parte

# 7
Nessa tarefa será iniciado o desenvolvimento das operações

Utilizar a mesma branch da tarefa anterior

Codificar a função para consulta do saldo

Deve receber como parâmetro a conta

Deve implementar a funcionalidade para obter o saldo

Deve exibir uma mensagem com o saldo atual da conta

Realizar o commit desta parte

# 8
Nessa tarefa será implementado a função de depósito

Utilizar a mesma branch da tarefa anterior

Codificar a função para depósito

Deve receber como parâmetro a conta e o valor

Deve ser validado se o valor recebido é maior que zero

Deve implementar a funcionalidade para incrementar o saldo da conta

Deve exibir uma mensagem com a informação de depósito efetuado com sucesso e o novo saldo atual da conta

Realizar o commit desta parte

