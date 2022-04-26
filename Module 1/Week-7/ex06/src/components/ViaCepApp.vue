<template>
<div class="inputs">
    <label for="cep-input">Qual o CEP?</label>
    <input id="cep-input" type="text" v-model="seuCep" >
    <button @click="buscaCep(seuCep)">Consultar</button>
</div>


<div id="data">
<p id="list-title">Informações</p>
    <ul id="info-list">
        <li v-for="(value, name) in dataCep" :key="value">{{ name }}: {{ value }}</li>
    </ul>
</div>
   
</template>
<script>
import cep from 'cep-promise'
export default {
    data() {
        return {
            seuCep: '',
            dataCep: null
        }
    },
    methods: {
        async buscaCep(num) {
            let callCep = await cep(num)
            console.log(callCep)
            this.dataCep = callCep
        }
    }
}
</script>
<style scoped>
label {
    font-size: 1em;
    margin-right: 10px;
}
.inputs {
    text-align: center;
    display: inline-flex;
    width: 30%;
}
#cep-input {
    margin-right: 10px;
}
#data {
    margin-top: 50px;
    display:grid;
    padding-left: 600px;
    text-align: left;
    background-color:aliceblue;
    border-radius: 4px;
}
#info-list {
    list-style: none;
    
}
#list-title {
    font-size: 1.5em;
    
    
}
</style>