//Classe produtos
class Produtos {
    constructor() {
        this.produtos = [];
    }
    // Lê os dados dos inputs, insere no array, insere na tabela
    lerDados() {
        let produto = document.getElementById('prod');
        let valor = document.getElementById('preco');
        let quant = document.getElementById('qtd');
        let novoItem = {
            nome: produto.value,
            valor: valor.value,
            qtd: quant.value,
        };
        this.produtos.push(novoItem);
        let tabela = document.getElementById('tb');
        let tr = tabela.insertRow();
        let tr_prod = tr.insertCell();
        let tr_valor = tr.insertCell();
        let tr_qtd = tr.insertCell();
        tr_prod.innerText = produto.value;
        tr_valor.innerText = valor.value;
        tr_qtd.innerText = quant.value;
        produto.value = '';
        valor.value = '';
        quant.value = '';
    }
    // Soma os valores*quantidades e da o total;
    soma(a, ...objs) {
        let total = a.valor * a.qtd + objs.reduce((acc, item) => acc + item.qtd * item.valor, 0);
        return total
    }
    //Cria uma linha TOTAL na tabela e chama soma()
    finaliza() {
        let tabela2 = document.getElementById('tb');
        let tl = tabela2.insertRow();
        let tl_total = tl.insertCell();
        let tl_valor = tl.insertCell();
        
        tl_total.innerText = 'TOTAL';

        tl_valor.innerText = 'R$ ' + this.soma(this.produtos[0], ...this.produtos.slice(1, this.produtos.length)) + ',00';
    }
    // Apaga os itens na tabela
    reset() {
        let tabela = document.getElementById('tb');
        tabela.innerHTML = '';
    }
}

const produto = new Produtos();



