<template>
    <h1 style="color: blue">Exercícios 1, 2 e 3</h1>
    <div class="ex12">
        <Transition>
            <h2 v-show="show1">Text fade out</h2>
        </Transition>
    </div>
    <button class="btn btn-primary" type="button" @click="show1 = !show1">Apply</button>
   
    <div class="ex3">
        <Transition mode="out-in">
            <h2 v-show="show" v-if="show">Text fade out</h2>
            <h2 v-show="!show" v-else>Text fade in</h2>
        </Transition>
    </div>
    <button class="btn btn-primary" type="button" @click="show = !show">Apply mode out-in</button>
   
    <router-link class="link" to="/exquatro" style="font-size: 1em; display: block">Exercício 4</router-link>
</template>
<script>
export default {
    data() {
        return {
            show1: true,
            show: true
        }
    },
}
</script>
<style scoped>

.link {
    margin-top: 60px;
}
.ex12, .ex3 {
    margin: 30px;
}
.container {
    width: 300px;
}

.v-enter-active,
.v-leave-active {
    transition: all 2s ease;
}
.v-enter-from,
.v-leave-to {
    opacity:0;
}
</style>