import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => state.products,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get("https://fakestoreapi.com/products");
        commit("SET_PRODUCTS", data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
