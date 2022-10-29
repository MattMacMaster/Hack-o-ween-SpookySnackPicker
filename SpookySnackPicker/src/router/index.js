import {createRouter, createWebHistory} from 'vue-router'
import Main from '@/views/MainPage.vue'
import About from '@/views/AboutPage.vue'

const routes = [
    {path: '/about', name:"About", component:About},
    {path: '/', name:"Main", component:Main},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
