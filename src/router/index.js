import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/pages/MainPage.vue'),
        },
        {
            path: '/result',
            name: 'result',
            component: () => import('@/pages/ResultPage.vue'),
        },
    ]
})

export default router
