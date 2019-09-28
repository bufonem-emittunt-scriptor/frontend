import Vue from 'vue';
import Vuex from 'vuex';

import core from './modules/core';
import gate from './modules/gate';
import posts from './modules/posts';
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
    gate,
    posts,
    profile
  },
});
