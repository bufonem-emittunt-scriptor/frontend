import { api } from '@/services/api';

export default {
  state: {
    profile: {}
  },
  actions: {
    getProfile({commit, dispatch}, id) {
      commit('setLoading', true);
      api.get('/profile/' + id)
      .then(response => {
        commit('saveProfile', response.data);
      })
      .catch(error => {

      })
      .finally(() => {
        commit('setLoading', false);
      })
    }
  },
  mutations: {
    saveProfile(state, profile) {
      state.profile = profile;
    }
  },
};
