<template>
<div class="container center_div">
    <h2><span class="badge bg-danger" v-show="error">{{ getErrorMsg }}</span></h2>
    <form id="form" @submit.prevent="lookForUser">
    <div class="mb-3">
        <label for="id" class="form-label">ID</label>
        <input type="text" class="form-control" id="id" v-model="userId">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <table class="table" v-show="showList">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Zip Code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{{printUserX.id}}</td>
            <td>{{printUserX.name}}</td>
            <td>{{printUserX.birthdate}}</td>
            <td>{{printUserX.zipcode}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default {
    data() {
        return {
            userId: null,
        }
    },
    methods: {
        lookForUser() {
            this.$store.dispatch('students/getStudent', this.userId)
            this.userId = null
            
        }
    },
    computed: {
        printUserX() {
            return this.$store.state.students.userById
        },
        getErrorMsg() {
            return this.$store.state.students.errorMsg
        },
        error() {
            return this.$store.state.students.error
        },
        showList() {
            return this.$store.state.students.showList
        }
    }
}
</script>
<style scoped>
.table {
    margin-top: 60px;
    vertical-align: middle;
}
h1 {
    margin-bottom: 60px;
}
tr {
    vertical-align: middle;
}

</style>