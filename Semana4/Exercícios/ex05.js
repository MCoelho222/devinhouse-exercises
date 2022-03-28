class Endereco {
    constructor(logradouro, estado, cidade, numero, pais, cep) {
        this._logradouro = logradouro.toString();
        this._estado = estado.toString();
        this._cidade = cidade.toString();
        this._numero = numero.toString();
        this._pais = pais.toString();
        this._cep = cep;
    }
    show() {
        console.log(`Eu moro no ${this._pais}, estado do ${this._estado}, na cidade de ${this._cidade}, na ${this._logradouro} ${this._numero} CEP: ${this._cep}.`)
    }
}

const meuEnd = new Endereco('Rua João Azolin', 'Paraná', 'Curitiba', '740', 'Brasil', '82015-40')
meuEnd.show()