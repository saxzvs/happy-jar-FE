import { createApp } from 'vue';
import router from '@/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

import App from './App.vue';

library.add(far, fas);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(VCalendar)
  .mount('#app');
