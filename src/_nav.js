import i18n from '@/services/i18n';

export default {
  items: [
    {
      name: i18n.t('nav.dashboard'),
      url: '/worker/dashboard',
      icon: 'icon-home',
    },
    {
      name: 'Leaflet Map',
      url: '/worker/map',
      icon: 'fa fa-wrench',
    },
    {
      name: 'Google Map',
      url: '/worker/google',
      icon: 'fa fa-wrench',
    },
    {
      name: i18n.t('nav.my_work_orders'),
      url: '/worker/worksites',
      icon: 'fa fa-heart',
    },
    {
      name: i18n.t('nav.browse'),
      url: '/worker/browse',
      icon: 'fa fa-list',
    },
    {
      name: i18n.t('nav.my_organization'),
      url: '/worker/my-organization',
      icon: 'fa fa-users',
    },
    {
      name: i18n.t('nav.contacts'),
      url: '/worker/contacts',
      icon: 'fa fa-address-book',
    },
    {
      name: 'Organizations',
      url: '/worker/organizations',
      icon: 'icon-people',
    },
    {
      name: i18n.t('nav.all_organizations'),
      url: '/worker/orgs',
      icon: 'fa fa-sitemap',
    },
    {
      name: i18n.t('nav.charts'),
      url: '/worker/charts',
      icon: 'fa fa-area-chart',
    },
    {
      name: i18n.t('nav.stats'),
      url: '/worker/stats',
      icon: 'fa fa-star',
    },
    {
      name: i18n.t('nav.about'),
      url: '/map#go-poweredby',
      icon: 'fa fa-rocket',
    },
    {
      name: i18n.t('nav.help'),
      url: '/training',
      icon: 'fa fa-support',
    }
  ]
}
