import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    cart: [],
    amountOfProducts: null,
    cookie: localStorage.getItem("cookie") || null,
    displayName: localStorage.getItem("displayName") || null,
  },
  getters: {
    loggedIn(state) {
      return state.cookie != null
    },
  },
  mutations: {
    pushProductToCart(state, service) {
      state.cart.push(service)
      state.amountOfProducts = state.cart.length
    },
    retrieveCookie(state, cookie) {
      state.cookie = cookie.cookie
      state.displayName = cookie.displayName
    },
    destroySession(state) {
      state.cookie = null
      state.displayName = null
    }
  },
  actions: {
    addProductToCart(context, service) {
      context.commit('pushProductToCart', service)
    },
    async destroySession(context) {
      if (context.getters.loggedIn) {
        try {
          localStorage.removeItem("cookie")
          localStorage.removeItem("displayName")
          context.commit("destroySession")
        } catch {
          localStorage.removeItem("cookie")
          localStorage.removeItem("displayName")
          context.commit("destroySession")
        }
      }
    },
    async retrieveCookie(context, credentials) {
      try {
        let response = await axios.post("https://apirestaurangkina.com/api/login", {
          name: credentials.name,
          password: credentials.password
        })

        const cookie = {
          "cookie": response.data.cookie,
          "displayName": response.data.user.displayname
        }

        localStorage.setItem("cookie", cookie.cookie);
        localStorage.setItem("displayName", cookie.displayName);
        context.commit('retrieveCookie', cookie)
      } catch (err) {
        throw err
      }
    }
  },
  modules: {}
});
