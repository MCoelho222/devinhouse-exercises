<template>
    <div class="seis">
        
        <ul>
            <li style="list-style: none" v-for="(item, index) in lista" :key="item">{{ index + 1 }} - {{ item }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lista: ['Abacate', 'Maça', 'Pêra', 'Banana']
        }
    }
}
</script>