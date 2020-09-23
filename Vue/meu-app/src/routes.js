import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './Pages/HomePage/Homepage.vue'
import Loginpage from './Pages/LoginPage/Loginpage.vue'

const history = createWebHistory();


const router = createRouter({
    history, 
    routes: [
        {
            path: '/',
            component: Homepage,
        },
        {
            path: '/Login',
            component: Loginpage
        },
    ]
})

export default router;