import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: "http://localhost:3000"
    });
  }
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
