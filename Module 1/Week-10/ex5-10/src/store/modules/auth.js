import { useCookies } from 'vue3-cookies'
const cookies = useCookies().cookies
export default {
    namespaced: true,
    state() {
        return {
            set:  cookies.set('authorized', false),
            authenticated: false,
            userNow: null,
            stdUser: 'admin@admin.com',
            stdPass: 'admin123'
        }
    },
    mutations: {
        isLogin(state, value) {
            cookies.set('authorized', true)
            state.authenticated = true
            state.userNow = value
            //console.log(state.userNow)
            //console.log(state.authenticated)
        },
        beLogout(state) {
            state.authenticated = false
            cookies.set('authorized', false)
            
        }
    },
    getters :{
        logged(state) {
            return state.authenticated
        }
    }
}