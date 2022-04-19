// Função que chama a função assíncrona mas não espera ela terminar
/* function euNaoEspero() {
    aguarda3Segundos();
    let noWait = document.getElementById('naoespero');
    noWait.innerHTML = 'Eu não espero!'
} */

// Função assíncrona que espera 10 segundos para executar
async function aguarda3Segundos() {
     await new Promise(resolve => setTimeout(resolve, 10000));
     
     let par = document.getElementById('espero');
     par.innerHTML = 'Terminei!';
    //console.log('Terminei!');
}

// Função que chama a função assíncrona e espera ela terminar
async function euEspero() {
    await aguarda3Segundos();
    let wait = document.getElementById('naoespero');
    wait.innerHTML = 'Eu espero';
}

//euNaoEspero()
euEspero()
