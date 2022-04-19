

var contas = []; // Armazena objetos com informações sobres as contas

// Cria objeto da classe Conta e adiciona ao Array contas
function addConta(nome, cpf, telefone) {
    contas.push(new Conta(nome, cpf, telefone));
}

// Cria a classe Conta
// Cadastra novos cliente e gera um número de conta
class Conta {

    constructor(nome, cpf, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.tel = telefone;
        this.saldo = 0;
        this.conta = this.numConta();
        this.transacoes = [];
    }
    
    // Gera um número de conta com os primeiros 6 digitos do CPF
    numConta() {
        let num = this.cpf.slice(0, 7);
        return num;
    }
}

//Cria a classe Transacoes
//Contém os métodos para depósitos e transferências
class Transacoes {
    constructor(conta, valor) {
        this.conta = conta; //Objeto da classe conta
        this.valor = Number(valor); //Valor a ser transferido ou depósitado
        this.transacoes = {};
    }
    transferencia() {
        this.conta['saldo'] -= this.valor; //Subtrai valor da chave 'saldo' em um objeto do Array contas
        this.transacoes.data = new Date(); //cria chave 'data' no obj conta
        this.transacoes.tipo = '-'; //cria chave 'tipo' no obj conta
        this.transacoes.valor = this.valor;
        this.conta['transacoes'].push(this.transacoes);
        console.log(`Sua transferência foi realizada com sucesso! Seu saldo é de ${this.conta['saldo']} reais.`);
    }
    deposito() {
        this.conta['saldo'] += Number(this.valor); //Adiciona valor da chave 'saldo' em um objeto do Array contas
        this.transacoes.data = new Date(); //cria chave 'data' no obj conta
        this.transacoes.tipo = '+'; //cria chave 'tipo' no obj conta
        this.transacoes.valor = this.valor;
        this.conta['transacoes'].push(this.transacoes);
        console.log(`Você acaba de receber ${this.valor} reais. Seu saldo é de ${this.conta['saldo']} reais.`);
    }
}

var counter = 0;
//Efetua as transacoes
//conta=str; tipo=str (deposito ou transferencia); valor=str
function transacoes(conta, tipo, valor) {
    //percorre o array contas e realiza uma transação para a conta
    for (let i = 0; i < contas.length; i++) {
        let item = contas[i];
        if (item.conta == conta) {
            let trans = new Transacoes(item, valor); //cria uma instância 
            if (tipo === 'deposito') {
                trans.deposito(); //chama o método deposito da class Transacoes
                counter += 1;
                item.transacoes.slice(-1)[0].id = counter; //pega o última obj do array transacoes
            }
            if (tipo === 'transferencia') {
                trans.transferencia(); //chama o método transferencia da class Transacoes
                counter += 1;
                item.transacoes.slice(-1)[0].id = counter; //pega o última obj do array transacoes
            }
        }
    }
}

//Testando
addConta('Maria Lúcia', '008.528.229-44', '41 99216-6407');
addConta('Marcelo Coelho', '106.188.455-32', '47 98256-7634');

transacoes('008.528', 'deposito', '2500');
transacoes('106.188', 'deposito', '15000');
transacoes('008.528', 'deposito', '100');
transacoes('106.188', 'deposito', '3500');
transacoes('008.528', 'transferencia', '600');

contas.forEach(function(item){
    console.log(item);
    for (let i = 0; i < item.transacoes.length; i++) {
        const element = item.transacoes[i];
        console.log(element);   
    }
});