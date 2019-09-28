export default {
  state: {
    userType: 'member',
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
