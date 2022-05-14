<template>
<div class="container">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <!-- Navbar content -->
  <div class="container-fluid">
    <a class="navbar-brand" href="#/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/users/subscriptions">Subscriptions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#/users/userslist">Users List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#/users/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#/users/auth" v-if="!isLogged">Login</a>
          <button class="btn btn-outline-secondary" type="button" href="#/users/auth" @click="userLogout" v-else>Logout</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#/">Home</a></li>
            <li><a class="dropdown-item" href="#/users/subscriptions">Subscriptions</a></li>
            <li><a class="dropdown-item" href="#/users/register">Register</a></li>
            <li><a class="dropdown-item" href="#/users/userslist">Users List</a></li>
            <li>
            <a class="dropdown-item" href="#/users/auth" v-if="!isLogged">Login</a>
            <a class="dropdown-item" href="#/users/auth" v-else>Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>
<script>
// import { useCookies } from 'vue3-cookies'
// const cookies = useCookies().cookies
export default {
  data() {
    return {
      //logged: this.$store.state.auth.authenticated 
    }
  },
  methods: {
    userLogout() {
      //cookies.set('authorized', false)
      this.$store.commit('auth/beLogout')
      this.$router.push('/')
    }
  },
  computed: {
    isLogged() {
      return this.$store.getters['auth/logged']
    }
  }
}
</script>