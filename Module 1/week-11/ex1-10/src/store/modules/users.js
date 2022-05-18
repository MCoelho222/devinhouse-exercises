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
            showList: false,
            setUserError: false
        }
    },
    actions: {
        async setUser(context, user) {
            await axios.post('https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users', user).then(() => {
                context.state.setUserError = false
            }).catch(() => {
                context.state.setUserError = true
            })
        },
        async getUser(context, id) {
            await axios.get(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users/${id}`).then((response) => {
                context.state.userById = response.data
                context.state.showList = true
            }).catch((error) => {
                context.state.error = true
                setTimeout(() => context.state.error = false, 5000)
                context.state.errorMsg = error
            })
        },
        delUser(context, id) {
            axios.delete(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users/${id}`).then(() => {
                context.dispatch('allUsers')
            })
        },
        allUsers(context) {
            axios.get('https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users').then((response) => {
                context.state.users = response.data
            })
        },
        updateUser(context, id) {
            axios.get(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users/${id}`).then((response) => {
                context.state.userToUpdate = response.data
            })
        },
        userChanges(context, value) {
            axios.put(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users/${value.id}`, value).then(() => {
                context.dispatch('allUsers')
            })
        }
    }
}