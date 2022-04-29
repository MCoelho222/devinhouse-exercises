<template>
    <div class="container">
        <div class="list-title">
            <p class="p-title">{{ jsonCep.Solicitante == null? 'Caro cliente, veja aqui sua informações' : jsonCep.Solicitante + ', aqui estão suas informações' }}</p>
            <hr>
        </div>
        <ul id="info-list">
            <li v-for="(value, name) in jsonCep" :key="value">{{ name }}: {{ value }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        jsonCep: {
            type: Object,
        }
    }
}
</script>
<style scoped>

.container {
    text-align: center;
    margin-top: 50px;
    background-color:aliceblue;
    border-radius: 4px;
    padding-bottom: 10px;
    width: 40%;
    
}
#info-list {
    list-style: none;
}
.list-title {
    font-size: 0.7em;
}
.p-title {
    margin: 10px 0 0 0;
}
</style>