
// Cria obj com informações sobre contas bancárias de clientes
// Cria get e set para o saldo
class Conta {
    #saldo
    #cliente
    #conta
    constructor(cliente, conta, saldo) {
        this.#cliente = cliente;
        this.#conta = conta;
        this.#saldo = saldo;
    }
    get saldo() {
        return this.#saldo;
    }

    set saldo(x) {
        this.#saldo = x;
    }

    show() {
        console.log(this.#cliente)
        console.log(this.#conta)
        console.log(this.#saldo);
    }
}

// Testando
const cliente1 = new Conta('Alfred', '19.081-0', '1000,00');
cliente1.show();
cliente1.saldo = '2000,00';
cliente1.show();
console.log(cliente1.saldo);
