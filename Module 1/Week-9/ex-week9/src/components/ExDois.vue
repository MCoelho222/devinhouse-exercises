<template>
<div>
    
    <h2 v-once v-text="texto"></h2>
    <input type="text" v-model="texto">
</div>
</template>
<script>
export default {
    data() {
        return {
            texto:'Hello, world!'
        }
    }
}
</script>