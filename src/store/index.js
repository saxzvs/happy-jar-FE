import { createStore } from 'vuex';

export default createStore({
  state: {
    todayMood: 'worry',
  },
  getters: {},
  mutations: {
    setTodayMood(state, payload) {
      state.todayMood = payload;
    },
  },
  actions: {},
});
