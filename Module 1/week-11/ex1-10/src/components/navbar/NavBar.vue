<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://devinhouse.tech/">DEVinHouse</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/course/list">Students</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/course/find">Find student</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/course/subscribe">Subscribe</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/register">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#/login" v-if="login">Login</a>
                        <a class="nav-link" href="#/login" @click="logout" v-else>Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { useCookies } from 'vue3-cookies'
const cookies = useCookies().cookies
export default {
    computed: {
        login() {
            return cookies.get('logged') === null ? false : cookies.get('logged') === 'false'
        }
    },
    methods: {
        logout() {
            cookies.set('logged', false)
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.navbar {
    margin-bottom: 40px;
}
</style>