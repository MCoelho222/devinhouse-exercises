class Conta {
    constructor(cliente, conta, saldo) {
        this._cliente = cliente;
        this._conta = conta;
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }

    set saldo(x) {
        this._saldo = x;
    }

    show() {
        console.log(this._cliente)
        console.log(this._conta)
        console.log(this._saldo)
    }
}

const cliente1 = new Conta('Alfred', '19.081-0', '1000,00')
cliente1.show()
cliente1.saldo = '2000,00'
cliente1.show()