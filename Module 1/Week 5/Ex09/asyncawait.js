// Função requisição HTTP por CEP
// Usando async await
async function buscaCEP(cep) {
    try {
        const busca = await fetch('https://viacep.com.br/ws/' + cep + '/json'); // Concatena o CEP digitado e faz o fetch
        if (!busca.ok) {
            throw new Error(`HTTP error: ${busca.status}`); // Lança um erro se resposta != ok
        }
        const json = await busca.json(); // Atribui o json() a const json
        let msg = document.getElementById('msg'); // Seleciona o parágrafo de resposta
        msg.innerHTML = `${json.localidade}`; // Imprime a localidade do CEP
    }
    catch(erro) {
        let msg = document.getElementById('msg'); // Seleciona o parágrafo de resposta
        msg.innerHTML = `${erro}`; //Imprime o erro no navegador
    }
    


}

// Pega e Insere o CEP na async
function novoCep() {
    const cep = document.getElementById('cep'); // Seleciona o input do CEP
    buscaCEP(cep.value);
}

const btnBusca = document.getElementById('btn'); // Seleciona o botão "Busca"
btnBusca.addEventListener('click', novoCep);
