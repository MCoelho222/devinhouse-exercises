var _nome = document.getElementById('nome');
var par = document.getElementById('par');
var btn = document.getElementById('btn');
const mensagemOla = () => par.innerHTML = `Olá, ${_nome.value}!`;
btn.addEventListener('click', mensagemOla);

