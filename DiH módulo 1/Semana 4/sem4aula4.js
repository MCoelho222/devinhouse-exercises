//Encapsulamento--------------------------------

class Pessoa {
    #nome
    #idade

    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    exibir() {
        return `O meu nome é ${this.#nome} e eu tenho ${this.#idade} anos.`;
    }
    ser() {
        console.log('Eu sou uma pessoa')
    }
}

/*var pessoa = new Pessoa('Marcelo', '25')
console.log(pessoa.exibir())
console.log(pessoa.nome = "Rodrigo")
console.log(pessoa.nome)*/

//Closures------------------------------------------------

/*let x = 50;

function somar() {
    return x + 3;
}

x = 100;
module.exports = somar;*/

//Herança-------------------------------------------------

/*class Dev {
    constructor(nome, idade, linguagem) {
        this._nome = nome;
        this._idade = idade;
        this._linguagem = linguagem;
    }

    apresentacao() {
        console.log(`Sou dev, trabalho com ${this._linguagem}, meu nome é ${this._nome} e eu tenho ${this._idade} anos.`)
    }
}

const dev = new Dev('Marcelo', '40', 'python');
dev.apresentacao();

class FrontendDev extends Dev {
    constructor(nome, idade, linguagem, framework) {
        //this._nome = nome;
        //this._idade = idade;
        //this._linguagem = linguagem;
        super(nome, idade, linguagem);
        this._framework = framework;
    }
    apresentacao() {
        console.log(`Sou dev, trabalho com ${this._linguagem}, meu nome é ${this._nome} e eu tenho ${this._idade} anos e sou especialista em ${this._framework}.`)
    }
}

const fdev = new FrontendDev('Pedro', '10', 'react', 'front-end');
fdev.apresentacao();*/

class Jovem extends Pessoa {}

const p1 = new Pessoa;
p1.ser();

class Idoso extends Pessoa {
    serAvancado(){
        console.log('Eu sou um idoso, pois tenho de idade avançada')
    }
}

const p2 = new Idoso
p2.serAvancado();

const p3 = [new Pessoa(), new Jovem()];
p3.forEach(p3 => p3.ser());
