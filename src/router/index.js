import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Full from '@/containers/Full'
import Main from '@/containers/Main'

import WorkerDashboard from '@/views/worker/Dashboard'
import MyOrganization from '@/views/worker/MyOrganization';
import WorkerMapView from '@/views/worker/WorkerMapView';
import Charts from '@/views/Charts'
import Phone from '@/containers/Phone';
import PhoneWelcome from '@/views/phone/Welcome';
import PhoneGetUpToDate from '@/views/phone/GetUpToDate';
import PhoneSwitchboard from '@/views/phone/Switchboard';

import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/Login'
import Register from '@/views/pages/Register'
import RegisterOrganization from '@/views/RegisterOrganization'
import RealtimeMap from '@/views/RealtimeMap'
import Roadmap from '@/views/Roadmap'
import Donate from '@/views/Donate'

import vueAuthInstance from '@/services/auth.js'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return $('html,body').stop().animate({ scrollTop: $(to.hash).offset().top - 70 }, 1000);
    } else {
      return $('html,body').stop().animate({ scrollTop: 0 }, 500);
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/map',
      name: 'public',
      component: Main,
      children: [
        {
          path: 'map',
          name: 'RealtimeMap',
          component: RealtimeMap
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500,
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'roadmap',
          name: 'Roadmap',
          component: Roadmap,
        },
        {
          path: 'donate',
          name: 'Donate',
          component: Donate,
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
        },
        {
          path: 'register-organization',
          name: 'Register Organization',
          component: RegisterOrganization,
        }
      ]
    },
    {
      path: '/worker',
      redirect: '/worker/dashboard',
      name: 'Worker',
      component: Full,
      meta: { auth: true, title: 'Vue.Authenticate' },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: WorkerDashboard,
          meta: { auth: true, title: 'Dashboard' },
        },
        {
          path: 'map',
          name: 'WorkerMap',
          component: WorkerMapView,
          meta: { auth: true, title: 'Worker Map' },
        },
        {
          path: 'my-organization',
          name: 'MyOrganization',
          component: MyOrganization,
          meta: { auth: true, title: 'My Organization' },
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts,
          meta: { auth: true, title: 'Charts' },
        },
        {
          path: 'phone',
          component: Phone,
          meta: { auth: true, title: 'Phone' },
          children: [
            {
              path: 'welcome',
              component: PhoneWelcome,
              meta: { auth: true, title: 'Phone Welcome' },
            },
            {
              path: 'getUpToDate',
              component: PhoneGetUpToDate,
              meta: { auth: true, title: 'Phone Get Up To Date' },
            },
            {
              path: '',
              name: 'Phone',
              component: PhoneSwitchboard,
              meta: { auth: true, title: 'Phone Home' },
            },
          ]
        },
      ]
    },
    { path: '*', name: 'Page404', component: Page404 }
  ]
});

router.beforeEach(function (to, from, next) {

  if (vueAuthInstance.isAuthenticated()) {
    store.commit('setCurrentUserId', vueAuthInstance.getPayload().user_id);
    store.commit('setCurrentOrgId', vueAuthInstance.getPayload().organization_id);
  }

  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (vueAuthInstance.isAuthenticated()) {
        next()
      } else {
        router.push({ name: 'Login' })
      }
    } else {
      if (vueAuthInstance.isAuthenticated()) {
        router.push({ name: 'Home' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
});

export default router;
