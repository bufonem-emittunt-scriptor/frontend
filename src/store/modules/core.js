function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2);
}

function generateKey() {
  let arr = new Uint8Array(16);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}

export default {
  state: {
    appLoading: false,
    notifications: []
  },
  actions: {
    openSnack({state, commit}, {text, icon, color, timeout = 5000}) {
      const unique = generateKey();
      commit('addSnack', {text, icon, color, unique});
      setTimeout(() => {
        commit('removeSnack', unique);
      }, timeout);
    }
  },
  mutations: {
    setLoading(state, value) {
      state.appLoading = value;
    },
    addSnack(state, params) {
      state.notifications.push(Object.assign({}, params));
    },
    removeSnack(state, unique) {
      let indexFound = state.notifications.findIndex(x => x.unique === unique);
      if (indexFound !== -1) {
        state.notifications.splice(indexFound, 1);
      }
    }
  },
};
