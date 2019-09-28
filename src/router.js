import Vue from 'vue';
import Router from 'vue-router';

import Auth from '@/views/auth/auth';
import Home from '@/views/home/home';
import Profile from '@/views/profile/profile';
import TicketPass from '@/views/qrscanner.vue';
import Ticket from '@/views/ticket.vue';
import EventCreator from '@/views/member/event-creator.vue';
import Error from '@/views/error.vue';
import Event from '@/views/event.vue';
import Me from '@/views/me.vue';
import SettingsProfile from '@/views/settings-profile/settings.vue';
import SettingsMuseum from '@/views/settings-museum.vue';
import ForVol from '@/views/forvol.vue';
import Memo from '@/views/memo.vue';

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
      path: '/forvol',
      name: 'forvol',
      component: ForVol,
    },
    {
      path: '/memo',
      name: 'memo',
      component: Memo,
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/event/:id',
      name: 'event',
      component: Event,
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
      path: '/settings-profile',
      name: 'profile_settings',
      component: SettingsProfile,
      meta: {
        roles: ['member', 'volunteer']
      }
    },
    {
      path: '/settings-museum',
      name: 'museum_settings',
      component: SettingsMuseum,
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
