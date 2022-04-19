<template>
    <p>
        {{ cep }}
    </p>
</template>
<script>
    import ViaCep from "vue-viacep"

    export default {
        data() {
            return {
                cep: ViaCep.buscarCep('82015040').then(obj => console.log(obj)),
            }
        },
        methods: {
            buscaCep() {
                ViaCep.buscarCep('82015040').then(obj => console.log(obj))
            }
        }
    }
</script>