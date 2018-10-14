import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Full from '@/containers/Full'
import Main from '@/containers/Main'

import WorkerDashboard from '@/views/worker/Dashboard'
import MyOrganization from '@/views/worker/MyOrganization'
import WorkerMapView from '@/views/worker/WorkerMapView'
import Profile from '@/views/worker/Profile'
import Settings from '@/views/worker/Settings'
import Charts from '@/views/Charts'

import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/Login'
import Register from '@/views/pages/Register'
import RegisterOrganization from '@/views/RegisterOrganization'
import RealtimeMap from '@/views/RealtimeMap'
import Roadmap from '@/views/Roadmap'
import Donate from '@/views/Donate'
import BrowseWorksites from '@/views/worker/BrowseWorksites'
import MyWorksites from '@/views/worker/MyWorksites'
import BrowseOrganizations from '@/views/worker/BrowseOrganizations'
import Terms from '@/views/pages/Terms'
import Privacy from '@/views/pages/Privacy'
import Training from '@/views/pages/Training'
import ThankYou from '@/views/pages/ThankYou'
import About from '@/views/pages/About'


import vueAuthInstance from '@/services/auth.js'
import i18n from '@/services/i18n';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return $('html,body').stop().animate({scrollTop: $(to.hash).offset().top - 70}, 1000);
    } else {
      return $('html,body').stop().animate({scrollTop: 0}, 500);
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
          component: RealtimeMap,
          meta: {auth: false, title: i18n.t('routerIndex.map_html_title')}
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500,
          meta: {auth: false, title: i18n.t('routerIndex.500_html_title')}
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
          meta: {auth: false, title: i18n.t('routerIndex.login_html_title')}
        },
        {
          path: 'roadmap',
          name: 'Roadmap',
          component: Roadmap,
          meta: {auth: false, title: i18n.t('routerIndex.roadmap_html_title')}
        },
        {
          path: 'donate',
          name: 'Donate',
          component: Donate,
          meta: {auth: false, title: i18n.t('routerIndex.donate_html_title')}
        },
        {
          path: 'register-other',
          name: 'Register',
          component: Register,
          meta: {auth: false, title: i18n.t('routerIndex.register_html_title')}
        },
        {
          path: 'terms',
          name: 'Terms',
          component: Terms,
          meta: {auth: false, title: i18n.t('routerIndex.terms_html_title')}
        },
        {
          path: 'privacy',
          name: 'Privacy',
          component: Privacy,
          meta: {auth: false, title: i18n.t('routerIndex.privacy_html_title')}
        },
        {
          path: 'training',
          name: 'Training',
          component: Training,
          meta: {auth: false, title: i18n.t('routerIndex.training_html_title')}
        },
        {
          path: 'thank_you',
          name: 'Thank You',
          component: ThankYou,
          meta: {auth: false, title: i18n.t('routerIndex.thank_you_html_title')}
        },
        {
          path: 'about',
          name: 'About',
          component: About,
          meta: {auth: false, title: i18n.t('routerIndex.about_html_title')}
        },
        {
          path: 'register',
          name: 'Register Organization',
          component: RegisterOrganization,
          meta: {auth: false, title: i18n.t('routerIndex.register_org_html_title')}
        }
      ]
    },
    {
      path: '/worker',
      redirect: '/worker/dashboard',
      name: 'Worker',
      component: Full,
      meta: {auth: true, title: 'Vue.Authenticate'},
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: WorkerDashboard,
          meta: {auth: true, title: i18n.t('routerIndex.dashboard_html_title')}
        },
        {
          path: 'map',
          name: 'WorkerMap',
          component: WorkerMapView,
          props: {mapImpl: 'leaflet-map'},
          meta: {auth: true}
        },
        {
          path: 'my-organization',
          name: 'MyOrganization',
          component: MyOrganization,
          meta: {auth: true, title: i18n.t('routerIndex.my_organization_html_title')}
        },
        {
          path: 'worksites',
          name: 'MyWorksites',
          component: MyWorksites,
          meta: {auth: true, title: 'My Work Orders'},
        },
        {
          path: 'browse',
          name: 'BrowseWorksites',
          component: BrowseWorksites,
          meta: {auth: true, title: i18n.t('routerIndex.browse_worksites_html_title')}
        },
        {
          path: 'organizations',
          name: 'BrowseOrganizations',
          component: BrowseOrganizations,
          meta: {auth: true, title: i18n.t('routerIndex.browse_orgs_html_title')}
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts,
          meta: {auth: true, title: i18n.t('routerIndex.charts_html_title')}
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings,
          meta: {auth: true, title: i18n.t('routerIndex.settings_html_title')}
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile,
          meta: {auth: true, title: i18n.t('routerIndex.profile_html_title')}
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
        router.push({name: 'Login'})
      }
    } else {
      if (vueAuthInstance.isAuthenticated()) {
        router.push({name: 'Home'})
      } else {
        next()
      }
    }
  } else {
    next()
  }
});

export default router;
