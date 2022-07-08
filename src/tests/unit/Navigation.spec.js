import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import HomeRoutes from "@/router/HomeRoutes";
import MoodRoutes from "@/router/MoodListRoutes";

import Navigation from '@/components/App/Navigation.vue';

import MenuList from '@/assets/datas/navigationMenu.js';


const routes = [].concat(HomeRoutes,MoodRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


describe("Navigation.vue", () => {

  test("Navigation 렌더링 확인.", () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.get('[data-test="nav-wrapper"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="nav-router"]').exists()).toBe(true);
  });


  test("Navigation 메뉴 리스트 모두 불러오는지 확인.", async () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.setData({
      menus: MenuList
    });

    const routerCount = wrapper.findAll('[data-test="nav-router"]').length;

    expect(routerCount === MenuList.length).toBe(true);
  });

})
