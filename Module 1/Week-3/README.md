# Exercício 1

Crie um documento HTML com um elemento **<script>** para programar com **JavaScript** dentro do próprio HTML ou vincularmos o script via atributo **src**.

Para este exercício utilizaremos três recursos já disponíveis em todos os navegadores: Alert, Prompt, Confirm.

Criando as variáveis necessárias, pergunte à pessoa usuária as seguintes informações: 
• Nome (prompt); string
• Idade (prompt); number
• Quer praticar um esporte? (confirm). boolean

Armazenando as respostas em três variáveis, após recebidas as informações, exiba-as com um Alert, informando o nome a idade e se gosta ou não de praticar esportes.

Ex. 1:
Entradas Nome (Ada), Idade (27), Quer praticar esportes? (OK)
Saída alert "Ada, de 27 anos, quer praticar esportes"

Ex. 2:
Entradas Nome (Kathleen), Idade (99), Quer praticar esportes? (Cancelar)
Saída alert "Kathleen, de 99 anos, não quer praticar esportes"

> Dicas:
> https://developer.mozilla.org/pt-BR/docs/Web/API/window/alert
> https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt
> https://developer.mozilla.org/pt-BR/docs/Web/API/window/confirm

# Exercício 2

Em uma página **HTML**, insira um campo de **<input>** do tipo **number** para que possamos inserir um número.

Coloque também um **<button>**, para que possamos acionar a execução da função através do evento de clique (onclick).

Programe uma função em JavaScript para **verificar se o número inserido é par ou ímpar**, e **informe o resultado** através de um elemento **<p>**, na página HTML, atualizando seu texto.

> Dica:
> https://www.w3schools.com/js/js_functions.asp
> https://www.w3schools.com/jsref/event_onclick.asp
> https://www.w3schools.com/jsref/prop_text_value.asp
> https://www.w3schools.com/js/js_htmldom_html.asp

# Exercício 3

Faça uma página HTML contendo **2 campos** de texto (dica: input type number), **para** que possamos inserir, em cada um, **os valores** que desejamos calcular.

Coloque também na página **4 botões**, um indicando **soma** (+), outro **subtração** (-), outro **multiplicação** (*), e outro **divisão** (/).

Adicione um **outro campo** de texto, apenas leitura (**readonly**), para exibirmos os resultados.

**Quando o clicarmos no botão** de soma (ou multiplicação, ou divisão, ou subtração), **a sua página deve realizar o cálculo** adequado (somar, multiplicar, dividir ou subtrair) **com os 2 valores inseridos** e **exibir o resultado no campo de apenas leitura**.

Programe essa interatividade utilizando JavaScript.

> Dica:
> https://www.w3schools.com/tags/att_input_readonly.asp

# Exercício 4

Vamos calcular uma **Progressão Aritmética** (PA).

Em um documento HTML, coloque **2 campos para entrada de números** (um para informarmos a raiz da PA e outro para informarmos o valor inicial), **1 botão para acionarmos a função** de cálculo (que pegará os valores e montará a PA) **e um parágrafo** para exibir o resultado (onde exibiremos nossa PA).

Após inserirmos esses valores nos campos de Raiz e Valor Inicial (acrescentar os rótulos em cada campo), quando clicarmos no botão para calcular a PA, o **seu script deve calcular os 10 primeiros valores da sequência e exibir na tela** (dentro do parágrafo criado para isso). 

Relembrando: PA (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. 

Exemplo:
• Valor inicial = **1**;
• Raiz = **3**;
• PA = **1, 4, 7, 10, 13, 16, 19, 22, 25, 28**

> Dica:
> https://www.w3schools.com/js/js_loop_for.asp
> https://matematicabasica.net/progressao-aritmetica
> https://www.javascriptprogressivo.net/2018/12/progressao-aritmetica-pa-em-javascript.html

**BÔNUS:**
Fazer uma versão que calcule a Progressão Geométrica (PG)
https://www.todamateria.com.br/progressao-geometrica

# Exercício 5

Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato **"23:59"** (HH:mm).

**Agora faça com que o relógio se atualize automaticamente:**

Utilizando os recursos de **setInterval** ou **setTimeout**, faça com que, a cada segundo, o script verifique a hora atual e atualize o horário na página.

> Dica:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
> https://www.w3schools.com/Jsref/jsref_gethours.asp
> https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval
> https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

# Exercício 6

Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.

# Exercício 7

Crie uma página em HTML que exiba em qual estação do ano estamos (considerando as datas deste exercício).

Sua página deve conter um texto e uma imagem, ambos representando a estação.

Ao carregar a página, baseado na data atual, seu código deve verificar qual a estação atual do ano no hemisfério sul, e deve alterar o texto e a imagem, para que passem a representar a estação correta.

Considere:
**22/12** a **21/03** - **Verão**;
**22/03** a **21/06** - **Outono**;
**22/06** a **21/09** - **Inverno**;
**22/09** a **21/12** - **Primavera**.

> Dica: 
> Faça primeiro funcionar com texto, depois acrescente as imagens.
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

# Exercício 8

Em um documento HTML, **vamos fazer uma lista de compras** com funcionalidades de adicionar itens e exibir todos itens adicionados.

Na página, **exiba um campo de texto** (para que possamos escrever o nome de um item) **e um botão** (para adicionar o item à lista).

A página deve possibilitar inserir itens em uma lista e exibir a lista atualizada à medida que forem sendo adicionados novos itens.

A página deve conter um **rótulo** (<label>) "Item a adicionar" seguido do **campo** de texto (<input>) onde o usuário possa digitar o item.

O **botão** "Adicionar" (<button>), deve, no momento do clique, inserir o item digitado na lista e apagar o texto do campo.

Se o texto estiver vazio (length), deve mostrar uma mensagem (alert) ao usuário solicitando a inserção de algum texto.

A página também deve conter uma **lista** (<ul><li>), que exibirá os itens adicionados pelo usuário.

> DIcas:
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
> https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ul

**BÔNUS:** Acrescentar um botão ao lado de cada item para que seja possível removê-lo da lista.
https://love2dev.com/blog/javascript-remove-from-array

# Exercício 9

Utilizando a mesma página do exercício anterior (**M1S03 Ex 8**), **adicione um novo botão "Salvar lista"**.

Quando o clicarmos nesse botão, a lista de itens de mercado deve ser convertida para JSON e salva no LocalStorage do navegador.

> Dicas:
> https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON
> https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage

**BÔNUS:** Faça com que a lista seja salva automaticamente a cada novo item adicionado (ou removido).

# Exercício 10

Utilizando a mesma página dos 2 exercícios anteriores (**M1S03 Ex 8, Ex 9**), crie um novo botão "Carregar lista", que ao ser clicado deve buscar no LocalStorage se existe uma lista de itens de mercado salva em memória.

**Caso exista uma lista previamente salva**, deve mostrar os itens na lista da página (<ul><li>).

**Caso não exista uma lista salva**, deve informar o usuário "Não há itens salvos".

O script deve verificar se existe algo no localStorage, caso exista, deve converter a string JSON para valores do JavaScript e exibir na tela a lista que acabou de ser recuperada. 

> Dicas:
> https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON
> https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage

**BÔNUS:** Faça com que o carregamento da lista salva aconteça automaticamente ao acessar a página. Lembre-se sempre de verificar se existe algo salvo e preparar o código para também saber lidar com um localStorage vazio.