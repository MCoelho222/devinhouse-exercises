import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ExUmDoisTres from './components/ExUmDoisTres.vue'
import ExQuatro from './components/exquatro/ExQuatro.vue'

const routes = [
    {path:'/', component: ExUmDoisTres},
    {path: '/exquatro', component: ExQuatro}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})
const app = createApp(App)
app.use(router)
app.mount('#app')
