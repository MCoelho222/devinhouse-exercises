<template>

    <div class="container center_div">
        <my-form id="form" @submit="register" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <my-field type="text" class="form-control" name="name" v-model="user.name"/>
                <span class="text-danger" v-text="errors.name" v-show="errors.name"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Birth date</label>
                <my-field type="date" class="form-control" name="birth" v-model="user.birthdate"/>
                <span class="text-danger" v-text="errors.birth" v-show="errors.birth"></span>
            </div>
            <div class="mb-3">
                <label class="form-label">Zip Code</label>
                <my-field type="number" class="form-control" name="zipcode" v-model="user.zipcode"/>
                <span class="text-danger" v-text="errors.zipcode" v-show="errors.zipcode"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </my-form>
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

defineRule('birthcheck', value => {
    let now = new Date()
    let day = String(now.getDate()).length > 1 ? String(now.getDate()) : `0${String(now.getDate())}`
    let month = String(now.getMonth()).length > 1 ? String(now.getMonth() + 1) : `0${String(now.getMonth() + 1)}`
    let year = String(now.getFullYear())
    let checkDate = new Date(`${year}-${month}-${day}` + " 00:00:00")
    let birth = new Date(value + " 00:00:00")
    if (Date.parse(birth) > Date.parse(checkDate)) {
        return 'Date is not valid.'
    }
    return true
})

export default {
    components: {
        'my-form': Form,
        'my-field': Field,
    },
    data() {
        defineRule('checkcep', async value => {
            //[0-9]{}
            let erro = false
            let regexp = /^[0-9]{8}$/
            if (!regexp.test(value)) {
                return 'Invalid number'}
            if (regexp.test(value)) {
               await this.$store.dispatch('viacep/checkCep', value).then(() => {
                    if (!this.$store.state.viacep.status) {
                        erro = true
                    }
                })
            }
            return erro === true ?  'Zip code is not valid.' : true
        })
        return {
            schema: {
                name: 'required',
                birth: 'required|birthcheck',
                zipcode: 'required|checkcep'
            },
            user: {}
        }
    },
    methods: {
        register() {
            this.$store.dispatch('students/setStudent', {...this.user})
            let form = document.getElementById('form')
            form.reset()
            this.$toast.success('Subscription MODE ON!!!')
        }
    },
}
</script>
<style>
.center_div{
    margin: 0 auto;
    width:45% /* value of your choice which suits your alignment */
}
</style>