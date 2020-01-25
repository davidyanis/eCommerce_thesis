import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(faArrowLeft, faLongArrowAltRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false;

Vue.use({
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: "http://localhost:3000"
    });
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        path: '/tjanster',
      })
    } else {
      next()
    }
    
  }else {
    next() // make sure to always call next()!
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
