
//Função que faz uma requisição HTTP com o CEP informado
//
function buscaCEP(cep) {
    // Promise
    const busca = fetch('https://viacep.com.br/ws/' + cep + '/json'); // Concatena o CEP digitado e faz o fetch

    busca
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`); // Lança um erro se resposta != ok
        }
        return response.json()
    })
    .then(json => {
        let msg = document.getElementById('msg'); // Seleciona o parágrafo de resposta
        msg.innerHTML = `${json.localidade}`; // Imprime a localidade do CEP 
    })
    .catch(erro => {
        let msg = document.getElementById('msg');
        msg.innerHTML = `${erro}`; //Imprime o erro no navegador
    })
}

// Pega e Insere o CEP na async
function novoCep() {
    const cep = document.getElementById('cep');
    buscaCEP(cep.value);
}

const btnBusca = document.getElementById('btn');
btnBusca.addEventListener('click', novoCep);