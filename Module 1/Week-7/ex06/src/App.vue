<template>
  <h2>Buscador de CEP</h2>
  <FormCep @cep-json="setJsonCep"></FormCep>
  <ViaCepApp :jsonCep="jsonCep"></ViaCepApp>
  <p id="msg-p">{{ message }}</p>
  <footer>Marcelo Coelho 2022</footer>
</template>

<script>
import ViaCepApp from './components/ViaCepApp.vue'
import FormCep from './components/FormCep.vue'
export default {
  name: 'App',
  components: {
    ViaCepApp,
    FormCep
  },
  data() {
    return {
      jsonCep: {},
      message: ''
    }
  },
  methods: {
    setJsonCep(item) {
      if (item.status) {
        this.jsonCep = {
          Solicitante: item.nome,
          CEP: item.cepNum.cep,
          Estado: item.cepNum.state,
          Cidade: item.cepNum.city,
          Bairro: item.cepNum.neighborhood,
          Rua: item.cepNum.street,
          Provedor: item.cepNum.service
        }
      }
      if (!item.status) {
        this.message = item.msg
        this.jsonCep = {}
        
      }
    },
  }
}
</script>

<style>

body {
  background-color:cadetblue;
}
h2 {
  text-align: center;
  margin-bottom: 60px;
}
p {
  text-align: center;
  font-size: 2em;
}
footer {
  width: 100%;
  position:absolute;
  bottom: 0;
  text-align: center;
}
#msg-p {
  margin-top: 100px;
  font-size: 1.5em;
}
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
