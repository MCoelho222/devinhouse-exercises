export default {
    state() {
        return {
            newUsers: [],
            authorize: false
        }
    },
    mutations: {
        insertNewUser(state, value) {
            state.newUsers.push(value)
        },
        
    }
}