import { createStore } from 'vuex'
import register from './modules/register'
import newuser from './modules/newuser'
import auth from './modules/auth'

const store = createStore({
    modules: {
        register,
        newuser,
        auth
    }
})

export default store