import axios from 'axios'
import { useCookies } from 'vue3-cookies'
const cookies = useCookies().cookies
export default {
    namespaced: true,
    state() {
        return {
            user: {},
            error: false,
            errorMsg: null
        }
    },
    actions: {
        
        async authUser(context, user) {
            await axios.get(`https://627ab2a44a5ef80e2c1fa829.mockapi.io/api/v1/users/`).then ((response) => {
                let users = response.data
                let match = 0
                users.forEach(element => {
                    if (user.email === element.email && user.password === element.password) {
                        localStorage.setItem('status', true)
                        cookies.set('logged', true)
                        match += 1
                    }
                    if (user.email === element.email && user.password !== element.password) {
                        context.state.error = true
                        setTimeout(() => context.state.error = false, 5000)
                        context.state.errorMsg = 'Invalid password'
                        match += 1
                    }
                    if (user.email !== element.email && user.password === element.password) {
                        context.state.error = true
                        setTimeout(() => context.state.error = false, 5000)
                        context.state.errorMsg = 'Invalid e-mail'
                        match += 1
                    }
                });
                if (match === 0) {
                    context.state.errorMsg = 'You must register'
                }
            })
        }
    }
}