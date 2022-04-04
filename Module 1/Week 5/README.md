# Exercício 1

Em um arquivo **app.js** (incluído em **index.html**) faça o seguinte:

No documento **html**, crie um campo (**input**) de texto, um botão (**button**) e um parágrafo (**p**).

No documento **js** faça uma **arrow function** para retornar uma mensagem (string) de **"Olá, Mundo!"**.

Armazene esta **arrow function** em uma constante (**const**) de nome **mensagemOla**.

Ao clicar no botão, execute a função **mensagemOla** e exiba o retorno desta função no parágrafo.

Ajuste a função **mensagemOla** para que receba um parâmetro **nome** (lido do campo input) e retorne a mensagem **"Olá, [nome]!"**.
> Ex.: **Olá, Mariana!**
> p.innerHTML = mensagemOla(nome);

Ao final, devemos ter um campo para escrevermos um nome e botão que, quando clicado, deve exibir a mensagem resultante no parágrafo.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

# Exercício 2

Em um arquivo **app.js** (incluído em **índex.html**):

Utilizando um vetor const **'arrayNumeros'**, que possui valores de 1 a 9.
Ex.: const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Crie uma variável let chamada **'arrayQuadrados'**.

Utilizando a funcionalidade de arrays **'map'** em **arrayNumeros**, crie uma **arrow function** que calcule o quadrado de um valor passado por parâmetro e passe esta função como parâmetro de **map**, atribuindo o novo array criado à variável **arrayQuadrados**.

Em seguida, confira se o vetor **arrayQuadrados** possui todos os quadrados dos números presentes em **arrayNumeros** e exiba-os no console.

Por fim, utilizando a funcionalidade de arrays **'filter'** em **arrayQuadrados**, crie uma **arrow function** que teste se um valor recebido por parâmetro é maior que **30** (trinta) e confira o array resultante.

Mais uma vez, imprima o array resultante da execução do filter.

>Dicas:
> O array final deve ser igual à: [36, 49, 64, 81]
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

# Exercício 3

Em um arquivo **app.js**, incluído em um documento **index.html**:

Utilizando um array de objetos similares aos de uma nota fiscal, com **'nome'** e **'preco'** (preço).
Ex.:
const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 }
];

No arquivo html, crie um campo de texto (para digitar o nome de um produto) e um botão.

Ao clicar no botão, deve ser executada uma busca pelo preço do item, exibido em um parágrafo o preço (caso o item seja encontrado) ou exibindo a mensagem 'Produto não encontrado'.

Crie uma função que receba o nome de algum dos produtos por parâmetro e, utilizando o método de array **find**, encontre o item.

Depois de encontrar o item com find, pegue o valor do produto e exiba em um parágrafo. Exiba o valor na tela em um elemento html como **parágrafo** (<p>). Caso o item não exista, escreva **Produto não encontrado** no parágrafo.

Por fim, crie uma arrow function **reducer** para ser usada em conjunto com o método de array **reduce** e encontre o valor total da soma do valor de todos os produtos da lista.

Exiba também esse valor na tela em um outro parágrafo:
Ex.: Valor total de 34
(caso seja usado o mesmo array do exemplo anterior)

>Dicas:
> O array final deve ser igual à: [36, 49, 64, 81]
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

# Exercício 4

Em um novo arquivo JavaScript **'Pessoa.js'** crie uma classe **Pessoa**, que possui os atributos **'nome'** (do tipo público), **'cpf'** (do tipo privado) e um método **'imprime'** que mostra no console o **nome** e o **cpf** da pessoa..

> Ex.: "Patricia - 12345678901"

Após isso, faça com que a classe Pessoa seja **exportada como padrão** do módulo (export default class Pessoa).

Em outro arquivo **'app.js'** (type="module"), importe a classe Pessoa, crie uma instância de pessoa e execute o método 'imprime'.
Ex.:
const patricia = new Pessoa('Patricia', '12345678901');
console.log(patricia.imprime());

No arquivo **index.html** deve ser incluído apenas o arquivo **app.js**. O arquivo **Pessoa.js** deve ser importado em **app.js**.

Por fim, devemos ter no console a exibição da chamada do método **imprime()** de alguma instância de Pessoa.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

# Exercício 5

Para treinar os conceitos de Rest e módulos.

Crie três arquivos:
- **index.html**
- **app.js**
- **utils.js**

Utilizando o atributo **type="module"**, inclua o arquivo **app.js** em **index.html**.
> Ex.: <script type="module" src="app.js"></script>

No arquivo **utils.js**, utilizando o operador **Rest**, crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras (números inteiros) e exporte esta função.

A função deve retornar a soma de todos os parâmetros.
Após executada a função, o resultado deve ser exibido no console.
> Ex.:
> resultado = somaTudo(1, 2, 3, 4);
> console.log(resultado);
> // resultado deve ser 10

**Obs.:** em **index.html** apenas deve ser incluído o arquivo **app.js**, para executarmos a função do arquivo **utils.js**, devemos importá-la e chamá-la em **app.js**.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

# Exercício 6

Para treinar os conceitos de Spread e módulos.

Crie três arquivos:
- **index.html**
- **app.js**
- **utils.js**

Utilizando o atributo **type="module"**, inclua o arquivo **app.js** em **index.html**.
> Ex.: <script type="module" src="app.js"></script>

Em **utils.js** desenvolva e exporte uma função que receba dois arrays e realize a **concatenação** entre eles utilizando o operador **Spread**.
Apresente o resultado no console.log(novoArray).
> Ex.:
> const novoArray = concatena([1, 2, 3], [4, 5, 6]);
> console.log(novoArray);
> // novo array deve ser [1, 2, 3, 4, 5, 6]

**Obs.:** em **index.html** apenas deve ser incluído o arquivo **app.js**, para executarmos a função do arquivo **utils.js**, devemos importá-la e chamá-la em **app.js**.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

# Exercício 7

Vamos trabalhar com funções assíncronas agora.

Crie um arquivo **app.js**, neste crie uma função assíncrona chamada: "**euNaoEspero()**"

Essa função irá chamar outra função chamada "**aguarda3Segundos()**".

Então, na linha debaixo da chamada da função insira um **console.log('Eu não espero')**.

O código de **aguarda3Segundos()** pode ser encontrado abaixo:

async function aguarda3Segundos() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log('Função diz: Terminei!');
}

Chame a função **euNaoEspero()** e verifique se ele está aguardando **aguarda3Segundos()** terminar de rodar para executar o resto do programa. 

Por que isso acontece?

Agora crie outra função assíncrona chamada **euEspero()**, ela possui a mesma organização que **euNãoEspero()**, porém ela deve aguardar (await) **aguarda3Segundos()** terminar de executar.
 
Como podemos fazer isso modificando apenas uma linha do código?

# Exercício 8

Para treinar os conceitos de Classe e operador Rest.

Crie um arquivo **app.js** incluído em **index.html** faça o que se pede a seguir.

Desenvolva uma Classe de Produto que contenha os seguintes atributos:
- **nome**
- **quantidade**
- **valor**

Desenvolva uma função que receba como parâmetro uma quantidade indefinida de instâncias de Produto e realize o seguinte cálculo entre seus atributos: (**quantidade * valor**) de cada produto e retorne a **soma total** de todos os produtos recebidos no parâmetro da função (se possível, faça com reduce).

Ex. 1: Produto Guardanapo - quantidade: 2 , valor: 3.00 = total 6.00
        Produto Lava Roupas - quantidade: 1, valor: 5.00 = total 5.00
                         RETORNAR SOMA TOTAL ===========> 11.00

Ex.2:
const arroz = new Produto('arroz', 3, 9);
const feijao = new Produto('feijao', 2, 12);
const batata = new Produto('batata', 4, 8);
const macarrao = new Produto('macarrao', 1, 5);
const total = calculaTotal(arroz, feijao, batata, macarrao);
console.log(total);
// total deve ser 88

Exiba o valor total no console.

>Dicas:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**BÔNUS:** Coloque a definição da classe e a função em arquivos **js** separados de **app.js** e os importe como módulos em **app.js**

Ex.:
Produto.js
> export default class Produto {

utils.js
> export function calculaTotal(...produtos) {

app.js
> import Produto from 'Produto.js'
> import { calculaTotal } from 'utils.js'

# Exercício 9

Crie dois arquivos:
- **index.html**
- **app.js**

Em **index.html**, crie um **campo de texto** para escrevermos um CEP, um **botão** para vincularmos um eventListener e um **parágrafo** para exibirmos um resultado.

Em **app.js**, desenvolva uma função em Javascript para consultar CEP na API ViaCEP.

O **endpoint** para essa consulta será **[https://viacep.com.br/ws/88032005/json](https://viacep.com.br/ws/88032005/json)**, onde o valor **"88032005"** deverá ser substituído pelo CEP digitado no campo de texto, o qual desejamos consultar.

Para a requisição, você pode utilizar "**fetch**", com o encadeamento "**then**" e "**catch**" de promises. 

O a cidade presente no resultado da consulta de CEP deverá ser apresentada em tela, no parágrafo criado.

Para isso, aplique todos os conceitos aprendidos sobre DOM e CSS.

Para mais informações sobre a API, consulte:
https://viacep.com.br

> Dicas:
> https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

**BÔNUS:** Baseando-se na mesma consulta feita da API ViaCEP, crie uma versão utilizando apenas uma função assíncrona, ainda com "**fetch**", porém desta vez fazendo uso de **async** e **await**. Utilize os blocos **try**/**catch** para substituir "**.then()**" e "**.catch()**".

# Exercício 10

Crie dois arquivos:
- **index.html**
- **app.js**

Em **index.html**, crie um elemento imagem (img) que exibirá a imagem de um gato da internet e um botão para vincularmos um eventListener.

Em **app.js**, desenvolva uma **função assíncrona** (async) em JavaScript para consultar uma imagem no [The Cat API](https://docs.thecatapi.com).

O **endpoint** para essa consulta será **https://api.thecatapi.com/v1/images/search](https://api.thecatapi.com/v1/images/search)**.

Para a função que iremos construir, usaremos "**fetch**" promise com **await** e **try**/**catch**.

O resultado de cada consulta no endpoint deve conter uma URL, utilizando manipulação do DOM, altere o atributo **src** do elemento imagem, para que exiba um gato diferente cada.

A consulta deve ser disparada quando o botão for clicado.

Para mais informações sobre o The Cat API, consulte: https://docs.thecatapi.com

> Dicas:
> https://youtu.be/Yp9KIcSKTNo
> https://www.codegrepper.com/code-examples/javascript/fetch+api+async+await+try+catch

**BÔNUS:** Faça com que a primeira consulta aconteça automaticamente, assim, cada vez que recarregar a página aparecerá um gato diferente.