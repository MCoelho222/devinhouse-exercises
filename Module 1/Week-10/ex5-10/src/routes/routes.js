import MyHome from '../views/home/MyHome.vue'
import TemplateOne from '../views/TemplateOne.vue'
import UsersList from '../views/users/list/UsersList.vue'
import NewSubs from '../views/users/subscriptions/NewSubscriptions.vue'
import Register from '../views/users/register/RegisterApp.vue'
import AuthUser from '../views/auth/AuthUser.vue'
import { useCookies } from 'vue3-cookies'
const cookies = useCookies().cookies

export default [
    { path: '/', component: MyHome },

    { path: '/users', component: TemplateOne, children: [
        { path: 'auth', component: cookies.get('authorized') == true ? Register : AuthUser },
        { path: 'subscriptions', component: NewSubs, beforeEnter: (to) => {
            if (cookies.get('authorized') == null || cookies.get('authorized') === 'false') {
               
                return to.path = '/users/auth'
            }
            return true
        } },
        { path: 'userslist', component: UsersList, beforeEnter: (to) => {
            if (cookies.get('authorized') == null || cookies.get('authorized') === 'false') {
                return to.path = '/users/auth'
            }
            return true
        } },
        { path: 'register', component: Register, beforeEnter: (to) => {
            if (cookies.get('authorized') == null || cookies.get('authorized') === 'false') {
                return to.path = '/users/auth'
            }
            return true
        } },
    ]}
]