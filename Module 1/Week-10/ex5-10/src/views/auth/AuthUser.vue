<template>
    <div class="container">
    <h1>Login</h1>
        <Form @submit="authUser" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <Field name="userEmail" type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="checkUser.email"/>
                <span class="text-danger" v-text="errors.userEmail" v-show="errors.userEmail"></span>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <Field name="userPassword" type="password" class="form-control" id="password" v-model="checkUser.password" :disabled="!this.checkUser.email"/>
                <span class="text-danger" v-text="errors.userPassword" v-show="errors.userPassword"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
        </Form>
        
    </div>
    
    
</template>
<script>
import { Form, Field, defineRule } from 'vee-validate'


export default {
    components: {
        Form,
        Field
    },
    data() {
        defineRule('required', value => {
            if (!value) {
                return 'Required field'
            }
            return true
        })
        defineRule('name-exist', value => {
            if (value) {
                let stdUser = this.$store.state.auth.stdUser
                
                let users = localStorage.getItem('user')
                let response = false
                if (users !== null) {
                    let usersList = JSON.parse(users)
                    usersList.forEach(element => {
                        if (element.email == value) {
                            response = true
                        }
                    });
                }
                if (value === stdUser) {
                    response = true
                }
                return response ? true : 'e-mail not registered'
                
            }
        })
        defineRule('password-check', value => {
            let stdPass = this.$store.state.auth.stdPass
            if (value) {
                let email = this.checkUser.email
                let users = localStorage.getItem('user')
                let response = false
                if (users !== null) {
                    let usersList = JSON.parse(users)
                    usersList.forEach(element => {
                        if (element.email == email && element.password == value) {
                            response = true
                        }
                    });
                }
                if (value === stdPass) {
                    response = true
                }
                return response ? true : 'invalid password'
                
            }
        })
        return {
            schema: {
                userEmail: 'required|name-exist',
                userPassword: 'required|password-check'
            },
            checkUser: {},
        }
    },
    methods: {
        authUser() {
            this.$store.commit('auth/isLogin', {...this.checkUser})
        }
    }
}
</script>