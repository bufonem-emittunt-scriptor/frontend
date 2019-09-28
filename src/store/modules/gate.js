export default {
  state: {
    userType: 'member'
  },
  actions: {

  },
  mutations: {
    setUserType(state, newUserType) {
      state.userType = newUserType;
    }
  },
};
