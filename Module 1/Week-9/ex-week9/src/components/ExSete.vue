<template>
<div class="container">
    <label style="color: red" v-show="texto">Mostrando texto</label>
    <div class="border-red" style="color: red; border: dashed red" v-show="texto">
        <h2 id="h-sete" v-text="texto"></h2>
    </div>
    <input type="text" v-model="texto">
</div>   
</template>
<script>
export default {
    data() {
        return {
            texto: undefined
        }
    }
}
</script>
<style>
.border-red {
    margin:10px 300px 
}

</style>