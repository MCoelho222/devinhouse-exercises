<template>
<div class="container">
    <div id="table">
        <p v-if="users.length === 0" style="color: black">No subscriptions</p>
        
        <table class="table" v-else>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Birthdate</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <transition-group name="list" tag="tbody">
                <tr v-for="(item, index) in users" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ item.userName }}</td>
                <td>{{ item.userBirthday }}</td>
                <td><button type=button class="btn btn-danger" @click="deleteUser(index)">Delete</button></td>
                </tr>
            </transition-group>
        </table>
    </div>
</div>    
</template>
<script>
export default {
    data() {
        return {
            users: this.$store.state.register.usersList
        }
    },
    methods: {
        deleteUser(index) {
            this.$store.commit('delUser', index)
        },
    },
}
</script>
<style scoped>

#table {
    padding: 10px 20px;
    text-align: center;
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

