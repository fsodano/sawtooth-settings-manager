import Vue from 'vue';
import Vuex from 'vuex';
import sawtooth from './../api/sawtooth';

Vue.use(Vuex);

export const mutations = {
  updateSettingsList(state, settings) {
    this.state.settings = settings;
  },
};

export const actions = {
  async getSettings(context, radixAddress) {
    context.commit('updateSettingsList', await sawtooth.getState(radixAddress));
  },
};

export default new Vuex.Store({
  strict: true,
  state: {
    settings: [],
  },
  mutations,
  actions,
});
