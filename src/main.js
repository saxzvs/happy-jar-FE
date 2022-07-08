import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far, fas);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
