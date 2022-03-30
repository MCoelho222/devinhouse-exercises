# Exercício 1

Conceitue Programação Estruturada e Programação Orientada a Objetos e
identifique sua principal diferença.

## Resposta

A programação estruturada possui um código único desenvolvido para cada aplicação e o reaproveitamento de código não é facilitado. A programação orientada à objetos permite que variáveis e funções existam apenas no escopo de um objeto pertencente a uma classe. Neste paradigma, o código da classe é desenvolvido separadamente e fica disponível para ser utilizado em qualquer aplicação. Para isto criam-se instâncias da classe no novo código e estas instâncias possuem todos os atributos e métodos da classe original.

# Exercício 2

Defina Var, Let e Const, Escopo e em quais escopos as variáveis se localizam e
defina quais usar para cada cenário.

## Resposta

Var - declaração de variáveis que ficam disponíveis no escopo global ou de funções, e que ao serem definidas em um bloco ficarão disponíveis no escopo da função ou global. Podem ser reatribuídas e redefinidas. São elevadas ao topo do escopo quando declaradas após sua inicialização.

Let - declaração de variáveis no escopo de blocos. Disponíveis apenas no bloco em que são definidas. Não são elevadas ao topo. Não podem ser redefinidas mas podem ser reatribuídas.

Const - declaração de variáveis que não podem ser redefinidas ou reatribuídas. Entretanto, se é possível alterar as propriedades, por exemplo, quando const é um objeto. Não são elevadas ao topo. Existem apenas no bloco em que são declaradas.

Usa-se Var quando se deseja que a variável fique disponível no escopo global ou da função em que foi declarada.

Usa-se let ou const nos blocos, quando não se deseja que permaneçam disponíveis após a execução do bloco.

# Exercício 3

Defina Classes, Objetos, Atributos e Métodos.

## Resposta

Classes são funções especiais que criam objetos que possuem atributos e métodos associados. Um objeto pode conter atributos de diversas formas e quando pertencentes a uma classe possuem métodos associados. Atributos podem ser variáveis de diversos tipos que definem um objeto. Métodos são funções que executam comportamentos associados a um objeto de determinada classe.

# Exercício 4

Defina Closure, Herança, Encapsulamento e Polimorfismo.

## Resposta

### Polimorfismo:

Característica que permite que novas instâncias de uma classe possam alterar, ou adicionar propriedades e métodos da classe origem.

### Encapsulamento:

Tornar um atributo ou método privado dentro de uma classe, não sendo possível alterá-los por meio de objetos da classe.

### Herança:

Uma nova classe pode reutilizar o código escrito em outra classe. Utilizando a função super(), a nova função pode herdar as propriedades e métodos associados ao construtor superior.

### Closure:

Funções que têm acesso ao escopo "pai" mesmo depois que a função pai foi executada. O ambiente fica disponível para função closure, e apenas esta função pode alterá-lo. Desta forma o ambiente fica protegido do escopo global.

# Exercício 5

Crie uma classe Endereço. Endereço possui os seguintes atributos: 
Logradouro, número, cidade, estado, país, cep.

# Exercício 6

Crie uma classe Cliente. Cliente possui os seguintes atributos:
nome, cpf, endereço, número de celular.

# Exercício 7

Crie uma classe Conta. Conta possui os seguintes atributos:
número da conta, saldo e cliente.

# Exercício 8

Percebeu-se que alguns usuários estão cadastrando o CNPJ no lugar do CPF. Precisamos validar o número inserido!

Valide o CPF do cliente. Crie um método na classe Cliente chamada validaCPF() que retorna "CPF válido" caso o cpf inserido seja válido. Caso o CPF seja inválido, retorna um erro e limpa o campo cpf.

# Exercício 9

A empresa em que você trabalha está tendo que se adequar a novidade do Pix. Então, vamos ter que criar uma classe para referenciar essas transações.

Crie uma classe chamada Transações. Essa classe vai possuir dois métodos: conta e valorDaTransacao. Dentro dessa classe, vamos criar dois métodos Get, Transferência e Depósito, nos quais debita e credita na conta.

# Exercício 10

A orientação para todas as empresas que trabalham com serviços financeiros é ter um identificador de transferência em todas as transações. 

Adicione os seguintes atributos na classe transacoes:

- idDeTransferencia (será incrementado automaticamente para cada transação);
- numeroDaConta (que está recebendo a transação);
- data (dia e horário da transação).