import { mount } from '@vue/test-utils';

import Home from "../../components/Home.vue";
// import { createRouter, createWebHistory } from 'vue-router';

describe("Home.vue", () => {

	test("1은 1이야.", () => {
		expect(1).toBe(1);
	});

	test("renders Home component", () => {
		const wrapper = mount(Home, {});

		expect(wrapper.find('[data-test="title"]').exists()).toBe(true);
	});
})

