class Produto {
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }

    lerDados() {

        //Cria o objeto produto, contendo seu id, nome e valor
        let produto = {}
        
        //Faz com que o id do primeiro produto seja 1
        produto.id = this.id;
        
        //Pega os valores dos inputs de nome e valor do produto
        produto.nomeProduto = document.getElementById("produto").value;
        produto.valorProduto = document.getElementById("valor").value;
        
        //Retorna o objeto produto
        return produto;
    }

    //Função para validar os inputs
    //Se algum campo estiver vazio, mostra um alert e retorna false
    validaCampos(produto) {

        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe um nome de produto! ';
        }
        if (produto.valorProduto == '') {
            msg += 'Informe um valor para o produto! ';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

    //adiciona o novo produto no arrayProdutos
    //Incrementa uma unidade no em this.id
    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    //Cria o corpo da tabela de produtos
    listaTabela() {

        let tbody = document.getElementById('tbody');

        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            
            let tr = tbody.insertRow(); //Insere uma linha 
            let td_id = tr.insertCell(); //Insere uma célula para o id na linha
            let td_produto = tr.insertCell(); //Insere uma célula para o produto na linha
            let td_valor = tr.insertCell(); //Insere uma célula para o valor na linha
            let td_acoes = tr.insertCell(); //Insere uma célula para açoes na linha
            
            //Busca no arrayProdutos os campos id, nome e valor e insere nas células
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valorProduto;
            
            //Cria elemento imagem para ser botão de edição
            let imgEdit = document.createElement('img');
            imgEdit.src = "./edit.jpg";

            //Se houver uma imagem e seu método style define o tamanho máx
            if (imgEdit && imgEdit.style){
                imgEdit.style.maxHeight = '50px';
                imgEdit.style.maxWidth = '50px';
            }
            
            //Insere a imagem na célula da coluna ações
            td_acoes.appendChild(imgEdit);

            //Cria elemento imagem para ser botão deletar
            let imgDelete = document.createElement('img');
            imgDelete.src = "./delete.jpg";
            
            //Insere método onclick no botão deletar
            //Função deleta baseada no parâmetro id
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            //Se houver uma imagem e seu método style define o tamanho máx
            if (imgDelete && imgDelete.style){
                imgDelete.style.maxHeight = '50px';
                imgDelete.style.maxWidth = '50px';
            }

            //Insere a imagem na célula da coluna ações
            td_acoes.appendChild(imgDelete);
        }
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }
        this.listaTabela();
        this.cancelar();
    }

    deletar(id) {
        if (confirm('Quer mesmo deletar o id ' + id + '?')) {
            let tbody = document.getElementById('tbody');
            for(let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
                
                
            }
        }
        
            
    }
}

var produto = new Produto();