<template>
    <div class="container">
        <p v-if="users.length == 0">No subscriptions at the moment.</p>
        <table class="table" v-else>
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Zip Code</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in users" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.birthdate }}</td>
            <td>{{ item.zipcode }}</td>
            <td><button class="btn btn-danger" @click="delUser(item.id)">Delete</button><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="updateUser(item.id)">Edit</button></td>
            </tr>
        </tbody>
    </table>
    </div>
    <Update></Update>
</template>
<script>
import Update from './UpdateStudent'
export default {
    components: {
        Update
    },
    data() {
        return {
            
        }
    },
    computed: {
        users() {
            let usersNow = this.$store.state.students.users
            return usersNow
        }
    },
    methods: {
        delUser(index) {
            this.$store.dispatch('students/delStudent', index)
        },
        updateUser(index) {
            this.$store.dispatch('students/updateStudent', index)
        }
    },
    mounted() {
        this.$store.dispatch('students/allStudents')
    },
    
}
</script>
<style>
.btn {
    margin: 4px;
}

</style>