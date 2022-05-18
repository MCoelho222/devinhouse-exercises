<template>
    <div class="container">
        <NavBar></NavBar>
        <h1>Welcome to the course environment</h1>
        <p>You are free to navigate!!</p>
        <router-view></router-view>
       
    </div>
</template>
<script>
import NavBar from '../components/navbar/NavBar'

export default {
    components: {
        NavBar
    }
}
</script>
<style>
.container {
    text-align: center;
}
</style>