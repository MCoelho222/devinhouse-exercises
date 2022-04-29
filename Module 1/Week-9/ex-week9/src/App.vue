<template>
  <h2 class="title">Ex.01 Input altera texto da tag</h2>
  <ExUm></ExUm>
  <hr>
  <h2 class="title">Ex.02 Input não altera texto da tag</h2>
  <ExDois></ExDois>
  <hr>
  <h2 class="title">Ex.03 Renderizar html</h2>
  <ExTres></ExTres>
  <hr>
  <h2 class="title">Ex.04 Label com cor digitada no input</h2>
  <ExQuatro/>
  <hr>
  <h2 class="title">Ex.05 Botões mudam label</h2>
  <ExCinco/>
  <hr>
  <h2 class="title">Ex.06 Laço renderizando itens da lista</h2>
  <ExSeis/>
  <hr>
  <h2 class="title">Ex.07 Mostrar header se houver algo no input</h2>
  <ExSete/>
  <hr>
  <h2 class="title">Ex.08 Formulário e listagem</h2>
  <ExOito/>
  <hr>
  <h2 class="title">Ex.09 Diretiva personalizada</h2>
  <ExNove/>
  <hr>
  <h2 class="title">Ex.10 Black-Jack</h2>
  <ExDez/>

</template>

<script>

import ExUm from './components/ExUm.vue'
import ExDois from './components/ExDois.vue'
import ExTres from './components/ExTres.vue'
import ExQuatro from './components/ExQuatro.vue'
import ExCinco from './components/ExCinco.vue'
import ExSeis from './components/ExSeis.vue'
import ExSete from './components/ExSete.vue'
import ExOito from './components/ExOito.vue'
import ExNove from './components/ExNove.vue'
import ExDez from './components/ExDez.vue'

export default {
  name: 'App',
  components: {
    ExUm,
    ExDois,
    ExTres,
    ExQuatro,
    ExCinco,
    ExSeis,
    ExSete,
    ExOito,
    ExNove,
    ExDez
}
}
</script>

<style>
body {
  background-color: #2c3e50;
}
.title {
  margin-bottom: 60px;
}
#app {
  background-color: aliceblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
