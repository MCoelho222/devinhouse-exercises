import axios from 'axios'
export default {
    namespaced: true,
    state() {
        return {
            userById: {},
            userToUpdate: {},
            users: [],
            errorMsg: null,
            error: false,
            showList: false
        }
    },
    actions: {
        setStudent(context, user) {
            axios.post('https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/students', user)
        },
        async getStudent(context, id) {
            await axios.get(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/students/${id}`).then((response) => {
                context.state.userById = response.data
                context.state.showList = true
            }).catch((error) => {
                context.state.error = true
                setTimeout(() => context.state.error = false, 5000)
                context.state.errorMsg = error
            })
        },
        delStudent(context, id) {
            axios.delete(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/students/${id}`).then(() => {
                context.dispatch('allStudents')
            })
        },
        allStudents(context) {
            axios.get('https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/students').then((response) => {
                context.state.users = response.data
            })
        },
        updateStudent(context, id) {
            axios.get(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/students/${id}`).then((response) => {
                context.state.userToUpdate = response.data
            })
        },
        studentChanges(context, value) {
            axios.put(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/students/${value.id}`, value).then(() => {
                context.dispatch('allStudents')
            })
        }
    }
}