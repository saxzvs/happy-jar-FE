import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import HomeRoutes from "@/router/HomeRoutes";
import MoodRoutes from "@/router/MoodListRoutes";
import App from '@/App.vue';

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

    const routerCount = wrapper.findAll('.link').length;

    expect(routerCount === MenuList.length).toBe(true);
  });


  test("Font Awesome 아이콘 설정값으로 제대로 호출해오는지 확인.", async () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.setData({
      menus: MenuList
    });

    const fontAwesomeIcons = wrapper.findAll(`font-awesome-icon`);

    MenuList.forEach(({ icon }, index) => {
      const isString = typeof icon === "string";
      const iconName = isString ? icon : icon[1];

      expect(fontAwesomeIcons[index].attributes('icon').includes(iconName)).toBe(true);
    });
  });


  test("Navigation 'home' 버튼 클릭시, 라우팅되는지 확인.", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });

    await wrapper.get('[data-test="nav-router-home"]').trigger("click");
    await flushPromises();

    expect(wrapper.get('[data-test="title"]').text()).toBe("Home");
    expect(wrapper.get('[data-test="icon-home"]').classes('selected')).toBe(true);
  });


  test("Navigation 'moodList' 버튼 클릭 시, 라우팅 확인.", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });

    await wrapper.get('[data-test="nav-router-moodList"]').trigger("click");
    await flushPromises();

    expect(wrapper.get('[data-test="title"]').text()).toBe("MoodList");
    expect(wrapper.get('[data-test="icon-moodList"]').classes('selected')).toBe(true);
  });

})
