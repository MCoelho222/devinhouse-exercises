export default class Pessoa {
    nome;
    #cpf
    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }
    imprimir(){
        return `${this.nome} - ${this.#cpf}`
    }
}