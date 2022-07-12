import { createRouter, createWebHistory } from 'vue-router';

import HomeRoutes from '@/router/HomeRoutes';
import MoodRoutes from '@/router/MoodListRoutes';
import YearsInPixels from '@/router/YearsInPixels';
import MyPage from '@/router/MyPage';

const routes = [].concat(HomeRoutes, MoodRoutes, YearsInPixels, MyPage);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
