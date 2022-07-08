import { createRouter, createWebHistory } from 'vue-router';

import HomeRoutes from "@/router/HomeRoutes";
import MoodRoutes from "@/router/MoodListRoutes";

const routes = [].concat(HomeRoutes, MoodRoutes);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router
