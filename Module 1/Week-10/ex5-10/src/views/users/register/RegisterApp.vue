<template>
    <div class="container">
        <Form @submit="register" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <Field name="userName" type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="newUser.name"/>
                <span class="text-danger" v-text="errors.userName" v-show="errors.userName"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <Field name="userEmail" type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="newUser.email"/>
                <span class="text-danger" v-text="errors.userEmail" v-show="errors.userEmail"></span>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <Field name="userPassword" type="password" class="form-control" id="password" v-model="newUser.password"/>
                <span class="text-danger" v-text="errors.userPassword" v-show="errors.userPassword"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
        </Form>
    </div>
    
</template>
<script>
import { Form, Field, defineRule } from 'vee-validate'
import { useCookies } from 'vue3-cookies'
const cookies = useCookies().cookies

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
        return {
            schema: {
                userName: 'required',
                userEmail: 'required',
                userPassword: 'required'
            },
            newUser: {},
        }
    },
    methods: {
        register() {
            let checkCookie = cookies.get('user')
            if (checkCookie === null) {
                cookies.set('user', {...this.newUser}, Infinity)
            }
            if (localStorage.getItem('user') !== null) {
               let sto = JSON.parse(localStorage.getItem('user'))
               console.log(sto)
               sto.push({...this.newUser})
               let str = JSON.stringify(sto)
               localStorage.setItem('user', str)
            } else { 
                localStorage.setItem('user', JSON.stringify([{...this.newUser}]))
            }
        }
    }
}
</script>