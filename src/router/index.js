import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Calendar from '../components/Calendar.vue'
import Article from '../components/Article.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/calendar', component: Calendar },
    { path: '/article', component: Article },
    { path: '/profile', component: Profile }



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router