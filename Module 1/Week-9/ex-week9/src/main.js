import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Registra diretiva v-color-red
app.directive('color', {
    updated(el, binding) {
        el.style = `color: ${binding.value}`
    }
})

app.directive('size', {
    beforeMount(el) {
        el.addEventListener('mouseover', () => {
            el.style ='font-size: 20px'
        })
        el.addEventListener('mouseout', () => {
            el.style ='font-size: 15px'
        })
    }
})
app.mount('#app')
