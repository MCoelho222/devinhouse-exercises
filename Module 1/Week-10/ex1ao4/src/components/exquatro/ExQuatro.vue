<template>
<div class="ex4">
    <h1 style="color: blue">Exercício 4</h1>
    <div class="container">
        <Form @submit="cadastrar" :validation-schema="schema" v-slot="{ errors }">
            <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <Field name="nome" type="text" class="form-control" id="nome" v-model="pessoa.nome"/>
                <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
            </div>
            <div class="mb-3">
                <label for="data-nasc" class="form-label">Data de nascimento</label>
                <Field name="birth" type="date" class="form-control" id="data-nasc" v-model="pessoa.birth"/>
                <span class="text-danger" v-text="errors.birth" v-show="errors.birth"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
        </form>
    </div>
    <hr>
    <div id="table">
        <p v-if="pessoas.length === 0" style="color: black">Não há pessoas cadastradas</p>
        
        <table class="table" v-else>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Data de nascimento</th>
                <th scope="col">Ação</th>
                </tr>
            </thead>
            <transition-group name="list" tag="tbody">
                <tr v-for="(item, index) in pessoas" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ item.nome }}</td>
                <td>{{ item.birth }}</td>
                <td><button type=button class="btn btn-danger" @click="deletar(index)">Excluir</button></td>
                </tr>
            </transition-group>
        </table>
    </div>
    <button class="btn btn-primary" @click="goToRoot">Exercício 1, 2 e 3</button>
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
export default {
    components: {
        Form, 
        Field
    },
    data() {
        return {
            schema: {
                nome: 'required',
                birth: 'required'
            },
            pessoa: {
                nome: null,
                birth: null
            },
            pessoas: []
        }
    },
    methods: {
        cadastrar() {
            this.pessoas.push({...this.pessoa})
            if (this.pessoas.length > 1) {
                let ages = []
                let orderedList = []
                this.pessoas.forEach(item => ages.push(Date.parse(item.birth)))
                let orderedAges = ages.sort()
                for (let i = 0; i < orderedAges.length; i++) {
                    const element = orderedAges[i];
                    this.pessoas.forEach(item => {
                        if (Date.parse(item.birth) === element) {
                            orderedList.push(item)
                        }
                    })

                    
                }
                this.pessoas = orderedList.reverse()
            }
            
        },
        deletar(index) {
            this.pessoas.splice(index, 1)
        },
        goToRoot() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>

#table {
    padding: 10px 200px;
    text-align: center;
}
.container {
    width: 300px;
}
.btn {
    margin: 2px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
