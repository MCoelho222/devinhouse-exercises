<template>
<!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="userInFocus.name">
            </div>
            <div class="mb-3">
                <label for="birth" class="form-label">Birth date</label>
                <input type="date" class="form-control" id="birth" v-model="userInFocus.birthdate">
            </div>
            <div class="mb-3">
                <label for="zipcode" class="form-label">Zip Code</label>
                <input type="number" class="form-control" id="zipcode" v-model="userInFocus.zipcode">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="update">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        update() {
            console.log(this.userInFocus)
            this.$store.dispatch('students/studentChanges', this.userInFocus)
            this.$router.push('/course/list')
        }
    },
    computed: {
      userInFocus() {
            return this.$store.state.students.userToUpdate
        },
        check() {
          return this.$store.state.students.userToUpdate
        }
    } 
}
</script>