<template>
    <my-navbar></my-navbar>
    <router-view></router-view>
</template>
<script>
import NavBar from '../components/shared/navbar/NavBar.vue'
export default {
    components: {
        'my-navbar': NavBar
    },
    
}
</script>