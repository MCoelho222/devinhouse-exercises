<template>
<div class="container">
        <Form @submit="subscribeUser" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label for="nome" class="form-label">Name</label>
                <Field name="nome" type="text" class="form-control" id="nome" v-model="user.userName"/>
                <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
            </div>
            <div class="mb-3">
                <label for="data-nasc" class="form-label">Birthdate</label>
                <Field name="birth" type="date" class="form-control" id="data-nasc" v-model="user.userBirthday"/>
                <span class="text-danger" v-text="errors.birth" v-show="errors.birth"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
        </Form>
    </div>
</template>
<script>
import { Form, Field, defineRule } from 'vee-validate'

defineRule('required', value => {
    if(!value) {
        return 'Campo obrigatório'
    }
    return true
})

defineRule('fullname', value => {
    let criteria = value.split(' ')
    if (criteria.length < 2) {
        return 'Enter your full name'
    }
    return true
})

defineRule('birthdate', value => {
    let today = new Date()
    let birthday = new Date(value + ` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`)
    let birthdayMs = birthday.getTime()
    let todayMs = today.getTime()
    if (birthdayMs > todayMs) {
        return 'Invalid birth date'
    }
    return true
})
export default {
    components: {
        Form, 
        Field
    },
    data() {
        return {
            schema: {
                nome: 'required|fullname',
                birth: 'required|birthdate'
            },
            user: {
                userName: null,
                userBirthday: null
            },
        }
    },
    methods: {
        subscribeUser() {
            this.$store.commit('insertUser', {...this.user})
        },
    }
}
</script>
<style scoped>

.container {
    width: 600px;
}
.btn {
    margin: 2px;
}

</style>