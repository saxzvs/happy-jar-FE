import { createStore } from 'vuex';

export default createStore({
  state: {
    todayMood: '',
  },
  getters: {},
  mutations: {
    setTodayMood(state, payload) {
      state.todayMood = payload;
    },
  },
  actions: {},
});
