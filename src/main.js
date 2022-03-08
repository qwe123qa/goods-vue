import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from 'gsap'

window.gsap = gsap

createApp(App)
.use(store)
.use(router)
.mount('#app')