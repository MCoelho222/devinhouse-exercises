var itens = document.getElementById("item");
var btnAdd = document.getElementById("add-item");
var ul = document.getElementById("lista");

//cria uma lista com os itens adicionados no input
var lista = [];

//busca lista no storage
function carrega() {
    var listaJSON = localStorage.getItem('lista');
    //verifica se há algo no storage
    if (listaJSON) {
        //redefine a lista a partir do storage
        lista = JSON.parse(listaJSON);
        updateScreen();
    }
}

// funcao de remocao de item por id
function removeItem(id) {
    // cria uma lista nova
    var novaLista = [];
    // itera entre todos itens da lista velha
    lista.forEach(function (item) {
      if (item.id !== id) {
        // adiciona na lista nova apenas itens
        // com id diferete do removido
        novaLista.push(item);
      }
    })
    // atualiza a lista oficial e a tela
    lista = novaLista;
    updateScreen();
}

function updateScreen() {
    // limpa o elemento ul
    ul.innerHTML = "";
    // itera entre todos os itens da lista
    lista.forEach(function (item) {
        //ul.innerHTML += `<li>${item}</li>`
        //cria botão de remover e evento
        var btn = document.createElement('button');
        btn.innerHTML = 'x';
        btn.onclick = function () {
            // remove a partir da id
            removeItem(item.id);
            }
        var li = document.createElement('li');
        li.id = `${item.id}`;
        li.innerHTML = item.name;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

// funcao de salvar no localStorage
function saveStorage() {
    // converte lista para string JSON
    var listaJSON = JSON.stringify(lista);
    // salva a lista no localStorage
    localStorage.setItem('lista', listaJSON);
  }

function addItem() {
    //testar se existe algo no input
    if (itens.value) {
        //adiciona um objeto com nome e id do item à lista
        lista.push({
            id: Date.now(),
            name: itens.value});
        //reseta o input
        itens.value = "";
        // atualiza a tela e salva no storage
        updateScreen();
        //saveStorage();
    } else {
        alert("Insira o nome do item");
    }
}

// adiciona evento de tecla ao digitar no campo
itens.addEventListener('keydown', function (event) {
    // testa se a tecla apertada é Enter
    if (event.key === 'Enter') {
      // se for Enter, executa o addItem
      addItem();
    }
  });

