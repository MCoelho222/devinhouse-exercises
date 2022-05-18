import Template from '../../views/TemplateView.vue'
import FindStudent from '../../views/FindStudent.vue'
import Home from '../../views/HomeView.vue'
import Students from '../../views/StudentsList.vue'
import Subscribe from '../../views/SubscribeStudent.vue'
import Register from '../../views/RegisterUser.vue'
import Login from '../../views/LoginUser.vue'

import { useCookies } from 'vue3-cookies'
const cookies = useCookies().cookies


const routes = [
    {path:'/', component: Home},
    {path: '/register', component: Register},
    {path: '/login', component: Login, beforeEnter: (to) => {
        if (cookies.get('logged') === 'true') {
            return to.path = '/course'
        }
    }},
    {path:'/course', component: Template, beforeEnter: (to) => {
        if (cookies.get('logged') === 'false' || cookies.get('logged') === null) {
            return to.path = '/'
        }
        }, 
        children: [
            {path: 'subscribe', component: Subscribe},
            {path: 'find', component: FindStudent},
            {path: 'list', component: Students},
        
        ]}
    
    
    
]

export default routes