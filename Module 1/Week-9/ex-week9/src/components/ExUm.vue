<template>
    <div>
        <h2 v-text="texto"></h2>
        <input type="text" v-model="texto">
    </div>
</template>
<script>
export default {
    data() {
        return {
            texto:''
        }
    }
}
</script>
<style scoped>
.title {
    margin-bottom: 20px;
}
</style>