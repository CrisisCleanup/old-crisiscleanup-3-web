import Vue from 'vue'
import Router from 'vue-router'

import Full from '@/containers/Full'
import Main from '@/containers/Main'

import WorkerDashboard from '@/views/worker/Dashboard'
import MyOrganization from '@/views/worker/MyOrganization';
import BrowseWorksites from '@/views/worker/BrowseWorksites';
import BrowseOrganizations from '@/views/worker/BrowseOrganizations';
import WorkerMapView from '@/views/worker/WorkerMapView';
import Profile from '@/views/worker/Profile';
import Charts from '@/views/Charts'
import Phone from '@/containers/Phone';
import PhoneWelcome from '@/views/phone/Welcome';
import PhoneNews from '@/views/phone/News';
import PhoneTraining from '@/views/phone/Training';
import PhoneTrainingModule from '@/views/phone/TrainingModule';
import PhoneTrainingModuleCreateForm from '@/views/phone/TrainingModuleCreateForm';
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
import i18n from '@/services/i18n';
import store from '@/store';

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
          meta: { auth: true, title: i18n.t('routerIndex.dashboard_html_title') },
        },
        {
          path: 'map',
          name: 'WorkerMap',
          component: WorkerMapView,
          meta: { auth: true, title: i18n.t('routerIndex.worker_map_html_title') },
        },
        {
          path: 'my-organization',
          name: 'MyOrganization',
          component: MyOrganization,
          meta: { auth: true, title: i18n.t('routerIndex.my_organization_html_title') },
        },
        {
          path: 'worksites',
          name: 'BrowseWorksites',
          component: BrowseWorksites,
          meta: {auth: true, title: 'Browse Worksites'},
        },
        {
          path: 'organizations',
          name: 'BrowseOrganizations',
          component: BrowseOrganizations,
          meta: {auth: true, title: 'Browse Organizations'},
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts,
          meta: { auth: true, title: i18n.t('routerIndex.charts_html_title') },
        },
        {
          path: 'profile',
          component: Profile,
          meta: { auth: true, title: i18n.t('routerIndex.profile_html_title') },
        },
        {
          path: 'phone',
          component: Phone,
          meta: { auth: true, title: i18n.t('routerIndex.phone_html_title') },
          children: [
            {
              path: 'welcome',
              component: PhoneWelcome,
              meta: { auth: true, title: 'Phone Welcome' },
            },
            {
              path: 'news',
              component: PhoneNews,
              meta: { auth: true, title: 'Phone News' },
            },
            {
              path: 'training',
              component: PhoneTraining,
              meta: { auth: true, title: 'Phone Training' },
            },
            {
              path: 'training/view/:id',
              component: PhoneTrainingModule,
              meta: { auth: true, title: 'Phone Training Module' },
            },
            {
              path: 'training/create',
              component: PhoneTrainingModuleCreateForm,
              meta: { auth: true, title: 'Phone Training Module Create Form' },
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

  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta && to.meta.auth !== undefined) {
    store.dispatch('auth/checkToken');
    if (to.meta.auth) {
      if (store.state.auth.isAuthenticated) {
        next()
      } else {
        router.push({ name: 'Login' })
      }
    } else {
      if (store.state.auth.isAuthenticated) {
        router.push({ name: 'public' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
});

export default router;
