<template>
<div>
    <label for="color" v-text="texto" v-color="texto"></label>
    <input type="text" v-model="texto" id="color">
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