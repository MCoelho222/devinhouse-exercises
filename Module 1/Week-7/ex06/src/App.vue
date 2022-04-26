<template>
  <div id="app">
    <h2>Buscador de CEP</h2>
    <ViaCepApp></ViaCepApp>
  </div>
  
</template>

<script>
import ViaCepApp from './components/ViaCepApp.vue'
export default {
  name: 'App',
  components: {
   
    ViaCepApp
}
}
</script>

<style>

body {
  background-color:cadetblue;
}
h2 {
  margin-bottom: 60px;
}
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
