import { createRouter, createWebHistory } from 'vue-router';

import Home from "@/components/Home";
import Product from "@/components/Product";

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
