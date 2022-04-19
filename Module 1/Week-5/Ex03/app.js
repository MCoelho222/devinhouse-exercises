


const produtos = [
    {nome: 'Arroz', preco: 9},
    {nome: 'Feijão', preco: 12},
    {nome: 'Batata', preco: 8},
    {nome: 'Macarrão', preco: 5},
    {nome: 'Bolacha Bono', preco: 100},
    {nome: 'Água', preco: 400},
];

produtos.forEach( item => {
    let list = document.getElementById('prodList');
    let listItem = document.createElement('li');
    listItem.innerHTML = item.nome;
    list.appendChild(listItem);
}    
)

var compras = [];

// Imprime os produtos adicionados no navegador
function imprime() {
    let paragrafo = document.getElementById('par');
    paragrafo.innerHTML = '';
    let list = document.createElement('ul');
    paragrafo.appendChild(list);
    compras.forEach(element => {
        let item = document.createElement('li');
        item.innerHTML = `${element.nome}: R$ ${element.preco},00`;
        list.appendChild(item);
    })
    let campo = document.getElementById('prod');
    campo.value = '';
}

// valida o preenchimento do campo
function valida() {
    var prodInput = document.getElementById('prod').value;
    let msg = document.getElementById('par');
    let nomes = produtos.map(item => item.nome);
    if (prodInput) {
        if (nomes.some(item => item === prodInput)) {
            return true
        } else {
            alert('Produto não encontrado');
            //msg.innerHTML = 'Produto não encontrado';
            let campo = document.getElementById('prod');
            campo.value = '';
            return false
        }
    } else {
        msg.innerHTML = 'Digite um produto.';
        }
}
// busca o produto, se existir retorna o obj associado
function finder() {
    
    if (valida()) {
        let prodInput = document.getElementById('prod').value;
        let prodObj = produtos.find(item => item.nome === prodInput);
        compras.push(prodObj);
        imprime();
        prodInput = '';
    }
}

// retorna o valor total da compra
function soma() {
    
    let total = compras.reduce((acc, item) => acc + Number(item.preco), 0);
    let write = document.getElementById('valorfinal');
    write.value = `R$ ${total},00`;
}

// limpa todos os campos e esvazia o array compras
function reset() {
    let prodInput = document.getElementById('prod');
    let write = document.getElementById('valorfinal');
    let paragrafo = document.getElementById('par');
    compras = [];
    paragrafo.innerHTML = '';
    prodInput.value = '';
    write.value = '';
}

const addProd = document.getElementById('add');
const somador = document.getElementById('total');
const limpar = document.getElementById('reset');limpar.addEventListener('click', reset);
addProd.addEventListener('click', finder);
somador.addEventListener('click', soma);
