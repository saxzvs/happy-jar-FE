import { mount, flushPromises } from '@vue/test-utils';

import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  test('"Home" 컴포넌트 렌더링 확인.', () => {
    const wrapper = mount(Home, {});

    expect(wrapper.find('[data-test="title"]').exists()).toBe(true);
  });

  test('"edit" 버튼 생성 여부.', () => {
    const wrapper = mount(Home);

    expect(wrapper.find('[data-test="mood-edit-button"]'));
  });

  test('"edit"버튼 클릭 시, 모달 생성 확인.', async () => {
    const wrapper = mount(Home);

    await wrapper.find('[data-test="mood-edit-button"]').trigger('click');
    await flushPromises();

    expect(wrapper.find('[data-test="modal"]').exists()).toBe(true);
  });
});
