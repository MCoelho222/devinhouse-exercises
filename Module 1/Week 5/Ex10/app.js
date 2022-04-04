// Função asyn para requisitar imagem de gato

const btnCat = document.getElementById('btn-cat');

async function thatCat() {
    try {

        const url = 'https://api.thecatapi.com/v1/images/search';
        const cat = await fetch(url);
        if (!cat.ok) {
            throw new Error(`HTTP error: ${cat.status}`);
        }
        const conteudo = await cat.json();
        //console.log(conteudo);
        const imgCat = document.getElementById('img-cat');
        imgCat.src = conteudo[0].url;
    }
    catch(erro) {
        console.error(`${erro}`);
    }
}
document.onload = thatCat();
btnCat.addEventListener('click', thatCat);
 
// EXEMPLO THE CAT API

/* const btnCat = document.getElementById('btn-cat');
const imgCat = document.getElementById('img-cat');

async function fetchCat() {
  try {

    const url = 'https://api.thecatapi.com/v1/images/search';
    const resposta = await fetch(url);
    const conteudo = await resposta.json()

    console.log({ conteudo });
    imgCat.src = conteudo[0].url;

  } catch (erro) {
    console.error(erro);
  }
}

btnCat.addEventListener('click', fetchCat); */
