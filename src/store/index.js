import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    cart: [],
    amountOfProducts: null
  },
  mutations: {
    pushProductToCart(state, service) {
      state.cart.push(service)
      state.amountOfProducts = state.cart.length
    }
  },
  actions: {
    addProductToCart(context, service) {
      context.commit('pushProductToCart', service)
    }
  },
  modules: {}
});
