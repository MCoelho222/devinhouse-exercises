<template>
    <div class="container center_div">
    <h1>Login</h1>
    <h2><span class="badge bg-danger" v-show="error">{{ errorMsg }}</span></h2>
        <login-form @submit="auth" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <login-field type="email" class="form-control" name="email" aria-describedby="emailHelp" v-model="user.email"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <login-field type="password" class="form-control" name="password" v-model="user.password"/>
                <span class="text-danger" v-text="errors.password" v-show="errors.password"></span>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </login-form>
        <p>Not a user?</p>
        <router-link class="link" to="/register">Register</router-link>
        <router-link class="link" to="/">Home</router-link>
        
    </div>
</template>
<script>
import { Form, Field, defineRule } from 'vee-validate'

defineRule('required', value => {
    if (!value) {
        return 'This field is required.'
    }
    return true
})
export default {
    data() {
        return {
            schema: {
                email: 'required',
                password: 'required',
            },
            user: {}
        }
    },
    components: {
        'login-form': Form,
        'login-field': Field,
    },
    methods: {
        auth() {
            this.$store.dispatch('auth/authUser', {...this.user}).then(() => {
                if(!this.$store.state.auth.error) {
                    this.$toast.success('Success!!')
                    this.$router.push('/course')
                }
            })
        }
    },
    computed: {
        error() {
            return this.$store.state.auth.error
        },
        errorMsg() {
            return this.$store.state.auth.errorMsg
        }
    }
}
</script>
<style scoped>
h1 {
    margin-top: 60px;
    margin-bottom: 30px;
}
p {
    margin-top: 60px;
}
.link {
    margin: 4px;
}
</style>