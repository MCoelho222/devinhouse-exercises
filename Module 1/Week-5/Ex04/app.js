import Blah from './pessoa.js';

const p1 = [
    new Blah('Irapuã', '008.528.229-44'), 
    new Blah('Pedrina', '226.342.245-77'), 
    new Blah('Zion', '884.234.543-23'), 
    new Blah('Alfredo', '345.218.916-39'), 
    new Blah('Patrícia', '009.435.444-61')
];

// Cria parágrafo e imprime todos os objetos
p1.forEach(item => {
    let main = document.getElementById('main');
    let par = document.createElement('p');
    par.innerHTML = item.imprimir();
    main.appendChild(par)
})

