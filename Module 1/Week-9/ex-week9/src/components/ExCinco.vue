<template>
    <div class="cinco">
        <label v-if="color === 'color: black'" :style="color">Label Preto</label>
        <label v-if="color === 'color: red'" :style="color">Label Vermelho</label>
        <label v-if="color === 'color: blue'" :style="color">Label Azul</label>
        <label v-else></label>

        <button @click="color = 'color: black'">Mostrar Preto</button>
        <button @click="color = 'color: red'">Mostrar Vermelho</button>
        <button @click="color = 'color: blue'">Mostrar Azul</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                color:''
            }
        }
    }
</script>