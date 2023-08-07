import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 프로그램 전역 변수 관리
export default new Vuex.Store({
  modules: {
  },
  state: {
    vuexSample: '',
  },
  mutations: {
    setLoginId(state, vuexSample) {
      state.vuexSample = vuexSample;
    },
  },
  actions: {},
  getters: {
  },
});
