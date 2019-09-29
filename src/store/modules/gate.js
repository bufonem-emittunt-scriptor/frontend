export default {
  state: {
    userType: 'default',
    authoized: false
  },
  actions: {

  },
  mutations: {
    setUserType(state, newUserType) {
      state.userType = newUserType;
    },
    setAuth(state, value) {
      state.authoized = value;
    }
  },
};
