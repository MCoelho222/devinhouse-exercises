// Cria classe Cliente
class Cliente {
    constructor(nome, cpf, endereco, telefone) {
        this._nome = nome;
        this._cpf = cpf;
        this._endereco = endereco;
        this._tel = telefone;
    }
    // Verifica se cpf está no formato correto
    validar() {
        if (this._cpf) {
            if (this._cpf.length != 14) {
                alert('- Número de CPF inválido. Digite no formato xxx.xxx.xxx-xx');
                document.getElementById('cpf').value = '';
            } else {
                return true
            }
        }
    }
}

// Leitura dos inputs
function ler() {
    let n1 = document.getElementById('nome').value;
    let n2 = document.getElementById('cpf').value;
    let n3 = document.getElementById('endereco').value;
    let n4 = document.getElementById('telefone').value;
    if (n1 && n2 && n3 && n4) {
        let obj = {};
        obj.nome = n1;
        obj.cpf = n2;
        obj.end = n3;
        obj.tel = n4;
        var client = new Cliente(obj.nome, obj.cpf, obj.end, obj.tel); //cria o objeto Cliente
        let val = client.validar(); //valida o CPF digitado
        //se correto apaga os campos e imprime CPF no navegador
        if (val == true) {
            document.getElementById('print').innerHTML = client._cpf;
            document.getElementById('nome').value = "";
            document.getElementById('cpf').value = "";
            document.getElementById('endereco').value = "";
            document.getElementById('telefone').value = "";
        }
    } else { //emite alerta se o CPF estiver incorreto
        alert('Preencha todos os campos');
    }
}

const save = document.getElementById('salva');
save.addEventListener('click', ler); //Lê os dados quando o botão salvar for clicado.



