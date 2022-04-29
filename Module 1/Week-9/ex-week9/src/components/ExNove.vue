<template>
<div class="container">
    <div class="row">
        <div class="col" v-size>
        <label for="nome">Nome</label>
            <input type="text" id="nome">
        </div>
        <div class="col">
        <label for="idade" v-size>Idade</label>
            <input type="text" id="idade">
        </div>
    </div>
</div>
</template>
<style scoped>
.container {
    width: 40%
}
</style>