import Vue from 'vue';
import Router from 'vue-router';

import Auth from '@/views/auth/auth';
import Home from '@/views/home/home';
import MuseumProfile from '@/views/museum/profile';
import VolunteerProfile from '@/views/volunteer/profile';
import MemberProfile from '@/views/member/profile';
import TicketPass from '@/views/qrscanner.vue';
import Ticket from '@/views/ticket.vue';
import EventCreator from '@/views/member/event-creator.vue';
import Error from '@/views/error.vue';

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
    {
      path: '/member/:id',
      name: 'member',
      component: MemberProfile,
    },
    {
      path: '/ticketpass',
      name: 'ticketpass',
      component: TicketPass,
    },
    {
      path: '/ticket/:guid',
      name: 'ticket',
      component: Ticket,
    },
    {
      path: '/error/:type',
      name: 'error',
      component: Error,
    },
    {
      path: '/newevent',
      name: 'newevent',
      component: EventCreator,
      meta: {
        roles: ['member']
      }
    },
    {
      path: '/*',
      redirect: '/error/nopage'
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.roles) {
    if (!to.meta.roles.includes(store.state.gate.userType)) {
      next('/');
      return;
    }
  }
  next();
});

export default router;
