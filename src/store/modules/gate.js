export default {
  state: {
    userType: 'default',
    authoized: false,
    user: {}
  },
  actions: {

  },
  mutations: {
    setUserType(state, newUserType) {
      state.userType = newUserType;
    },
    setAuth(state, value) {
      state.authoized = value;
    },
    setUser(state, value) {
      state.user = value;
    }
  },
};
