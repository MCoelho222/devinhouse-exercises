<template>
    <div class="container center_div">
        <h1>Register</h1>
        <user-form @submit="subscribe" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <user-field type="text" class="form-control" name="name" v-model="user.name"/>
                <span class="text-danger" v-text="errors.name" v-show="errors.name"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <user-field type="email" class="form-control" name="email" aria-describedby="emailHelp" v-model="user.email"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <span class="text-danger" v-text="errors.email" v-show="errors.email"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <user-field type="password" class="form-control" name="password" v-model="user.password"/>
                <span class="text-danger" v-text="errors.password" v-show="errors.password"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Confirm password</label>
                <user-field type="password" class="form-control" name="confirm" v-model="user.confirm"/>
                <span class="text-danger" v-text="errors.confirm" v-show="errors.confirm"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </user-form>
        <div class="gotologin">
        <p>Already a user?</p>
        <router-link to="/login">Go to login</router-link>
        </div>
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
        defineRule('confirm', value => {
            if (value != this.user.password) {
                return 'Password is invalid.'
            }
            return true
        })
        return {
            schema: {
                name: 'required',
                email: 'required',
                password: 'required',
                confirm: 'required|confirm'
            },
            user: {}
        }
    },
    components: {
        'user-form': Form,
        'user-field': Field,
    },
    methods: {
        subscribe() {
            this.$store.dispatch('users/setUser', {...this.user}).then(() => {
                if (!this.$store.state.users.setUserError) {
                    this.$toast.success('Registered!')
                    this.$router.push('/login')
                }
                if (this.$store.state.users.setUserError) {
                    this.$toast.error('Something went wrong...')
                }
            })
        }
    }
}
</script>
<style scoped>
h1 {
    margin-top: 60px;
    margin-bottom: 30px;
}
</style>