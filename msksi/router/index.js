import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/Home',
    name: 'Home',
    component: function () {
        return import('../pages/Home.vue')
    }
},
{
    path: '/AboutUs',
    name: 'About Us',
    component: function () {
        return import('../pages/AboutUs.vue')
    }
},
{
    path: '/Calendar',
    name: 'Calendar',
    component: function () {
        return import('../pages/Calendar.vue')
    }
},
{
    path: '/Gallery',
    name: 'Gallery',
    component: function () {
        return import('../pages/Gallery.vue')
    }
},
{
    path: '/Resources',
    name: 'Resources',
    component: function () {
        return import('../pages/Resources.vue')
    }
},
{
    path: '/JoinUs',
    name: 'Join Us',
    component: function () {
        return import('../pages/JoinUs.vue')
    }
},

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router