import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeModule: 'Bar'
  },
  mutations: {
    setActiveModule(state, newModule) {
      state.activeModule = newModule;
    }
  }
});
