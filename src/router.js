import Vue from 'vue';
import Router from 'vue-router';

import Auth from '@/views/auth/auth';
import Home from '@/views/home';
import MuseumProfile from '@/views/museum/profile';
import VolunteerProfile from '@/views/volunteer/profile';

import store from '@/store/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/museum/:id',
      name: 'museum',
      component: MuseumProfile,
    },
    {
      path: '/volunteer/:id',
      name: 'volunteer',
      component: VolunteerProfile,
    },
    // {
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // }
  ],
});

export default router;
