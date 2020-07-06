import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primeflex/primeflex.css";
import ToastService from "primevue/toastservice";
Vue.use(ToastService);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
/* eslint-disable */
