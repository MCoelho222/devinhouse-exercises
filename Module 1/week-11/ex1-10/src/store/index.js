import { createStore } from 'vuex'
import students from './modules/students'
import viacep from './modules/viacep'
import users from './modules/users'
import auth from './modules/auth'

const store = createStore({
    modules: {
        students,
        users,
        auth,
        viacep
    }
})

export default store