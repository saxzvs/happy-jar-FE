import { mount, flushPromises } from '@vue/test-utils';
import Modal from '@/components/Modal/Modal';
import { $background, $happy, $peaceful } from '@/style/color.scss';

describe('Modal.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Modal);
  });

  test('기분 리스트 item 6개인지 확인', () => {
    const moodListCount = wrapper.findAll('[data-test="today-mood-item"]').length;

    expect(moodListCount).toBe(6);
  });

  test('오늘의 기분 기본 값("happy")이 리스트에서 선택되어 있는지?', async () => {
    await wrapper.setProps({
      todayMoodType: 'happy',
    });

    const happyMoodItem = wrapper.get('[data-test="today-mood-happy"]');
    const happyMoodItemStyle = getComputedStyle(happyMoodItem);

    expect(happyMoodItem.classes('selected')).toBeTruthy();
    expect(happyMoodItemStyle.background).toBe($happy);
  });

  test('기분 리스트 item("peaceful") 선택 시, 다른 item 선택 해제 되는지 확인.', async () => {
    const peacefulMoodItem = wrapper.get('[data-test="today-mood-peaceful"]');
    const angryMoodItem = wrapper.get('[data-test="today-mood-angry"]');
    const peacefulMoodItemStyle = getComputedStyle(peacefulMoodItem);
    const angryMoodItemStyle = getComputedStyle(angryMoodItem);

    await peacefulMoodItem.trigger('click');

    await expect(peacefulMoodItemStyle.background).toBe($peaceful);
    await expect(angryMoodItemStyle.background).toBe($background);
  });
});
