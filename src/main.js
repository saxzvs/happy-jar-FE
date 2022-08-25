import { createApp } from 'vue';

import store from '@/store';
import router from '@/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import axios from 'axios';

import App from './App.vue';

const BACKEND_PORT = process.env.BACKEND_PORT === null ? '' : `:${process.env.BACKEND_PORT}`;
// eslint-disable-next-line no-restricted-globals
const BACKEND_DOMAIN = process.env.BACKEND_DOMAIN === null ? `${location.protocol}//${location.hostname}` : process.env.BACKEND_DOMAIN;
axios.defaults.baseURL = `${BACKEND_DOMAIN}${BACKEND_PORT}`;

library.add(far, fas);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(VCalendar)
  .mount('#app');
