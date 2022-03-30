
// Cria obj contendo informações sobre clientes
// Cria métodos para mostrar informações no console
class Cliente {
    constructor(nome, cpf, endereco, tel) {
        this._nome = nome;
        this._cpf = cpf;
        this._endereco = endereco;
        this._tel = tel;
    }
    showName() {
        console.log(this._nome)
    }
    showCpf() {
        console.log(this._cpf)
    }
    showEndereco() {
        console.log(this._endereco)
    }
    showTel() {
        console.log(this._tel)
    }
}

const marcelo = new Cliente('Marcelo', '008.528.229-44', 'Rua João Azolin 740 casa 12', '41 99216-6407')
marcelo.showName()
marcelo.showCpf()
marcelo.showEndereco()
marcelo.showTel()