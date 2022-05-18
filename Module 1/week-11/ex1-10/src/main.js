import { createApp } from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css'
//import VueJWT from 'vuejs-jwt'
import App from './App.vue'
import store from './store/index'
import router from './routes/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueToast)
//app.use(VueJWT)
app.mount('#app')
