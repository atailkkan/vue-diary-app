import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'List',
        component: () => import('./views/List.vue')
    },
    {
        path: '/detail/:slug',
        name: 'Detail',
        component: () => import('./views/Detail.vue')
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import('./views/Create.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router