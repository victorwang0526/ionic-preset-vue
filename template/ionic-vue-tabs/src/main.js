import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { addIcons } from "ionicons";
import { construct, home } from "ionicons/icons";

addIcons({
  "ios-construct": construct.ios,
  "md-construct": construct.md,
  "ios-home": home.ios,
  "md-home": home.md,
});

Vue.use(Ionic);
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/];
defineCustomElements(window);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
