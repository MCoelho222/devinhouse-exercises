<template>
<div class="container">
    <form @submit.prevent="inserir">
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" v-model="pessoa.nome">
        </div>
        <div class="mb-3">
            <label for="idade" class="form-label">Idade</label>
            <input type="text" class="form-control" id="idade" v-model="pessoa.idade">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <hr>
    <p v-if="pessoas.length === 0"> Não há pessoas cadastradas</p>
    <table class="table" v-else>
    <thead>
        <th>Nome</th>
        <th>Idade</th>
    </thead>
    <tbody>
    <tr v-for="pessoa in pessoas" :key="pessoa">
        <td>{{ pessoa.nome }}</td>
        <td>{{ pessoa.idade }}</td>
    </tr> 
    </tbody>
    </table>
</div>
</template>
<script>
export default {
    data() {
        return {
            pessoa: {
                nome: null,
                idade: null
            },
            pessoas: []
        }
    },
    methods: {
        inserir() {
            this.pessoas.push({...this.pessoa})
            this.pessoa.nome = null
            this.pessoa.idade = null
        }
    }
}
</script>
<style scoped>
.container {
    width: 40%
}
</style>