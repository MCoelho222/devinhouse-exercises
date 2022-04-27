<template>
    <div class="container">
        <form @submit.prevent="buscaCep(info.cepNum)">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome:</label>
                <input type="text" class="form-control" name="nome" id="nome" v-model="info.nome" placeholder="Qual o seu nome?"/>
            </div>
            <div class="mb-3">
                <label for="cepNum" class="form-label">CEP:</label>
                <input class="form-control" name="nome" id="cepNum" v-model.number="info.cepNum" :placeholder="ask + info.nome"/>
            </div>
            <button type="submit" class="btn btn-primary">Buscar</button>
        </form>
    </div>
</template>

<script> 
import cep from 'cep-promise'
export default {
    data() {
        return {
            ask: 'Digite seu CEP ',
            info: {
                nome: '',
                cepNum: null
            },
            errorMsg: {
                msg:'Whoops! Algo deu errado...'
                }
        }
    },
    methods: {
    async buscaCep(num) {
        try {
            let callCep = await cep(num)
            this.info.cepNum = callCep
            this.info.status = true
            this.$emit('cep-json', this.info)
            this.info.nome = ''
            this.info.cepNum = null
        } catch (e) {
            this.errorMsg.status = false
            this.$emit('cep-json', this.errorMsg)
            this.info.nome = ''
            this.info.cepNum = null
        }
        
        }
    }
}
</script>
<style scoped>
.container {
    width:30%
}
</style>