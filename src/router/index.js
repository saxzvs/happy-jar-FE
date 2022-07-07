import { createRouter, createWebHistory } from 'vue-router';

import Home from "@/views/Home";
import Product from "@/views/Product";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/product',
        component: Product
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router
