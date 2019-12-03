import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const getMeal = {
  state: {
    meals: {}
  },
  mutations: {
    setMeals(state,payload) {
      state.meals = payload;
    }
  }
};
let store = new Vuex.Store({
  modules: {
    getMeal
  }
});
export default store;
