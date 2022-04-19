<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <ViaCep></ViaCep>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ViaCep from './components/ViaCep.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    ViaCep
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
