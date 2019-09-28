export default {
  state: {
    userType: 'volunteer',
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
