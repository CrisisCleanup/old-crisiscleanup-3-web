<template>
  <div class="app">
    <notifications group="foo" />
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <div v-bind:class="viewWrapperClasses">
          <router-view v-bind:class="routerClasses"></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
  </div>
</template>

<script>
  import nav from '../_nav'
  import {Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb} from '../components/'
  import DashboardEventHub from "@/events/DashboardEventHub";

  export default {
    name: 'full',
    components: {
      AppHeader,
      Sidebar,
      AppAside,
      AppFooter,
      Breadcrumb
    },
    data() {
      return {
        nav: nav.items
      }
    },
    mounted() {
      DashboardEventHub.$on('open-aside', (e) => {
        // document.body.classList.toggle('aside-menu-hidden')
      });
      DashboardEventHub.$on('close-aside', (e) => {
        // document.body.classList.toggle('aside-menu-hidden')
      });
    },

    computed: {
      name() {
        let r = this.$route.name
        console.log(r);
        return r
      },
      list() {
        return this.$route.matched
      },
      viewWrapperClasses() {
        if (this.$route.name === 'WorkerMap') {
          return {
            'fullsize-map': true
          }
        }
        return {
          'container-fluid': true,
          'quick-dash': true
        }
      },
      routerClasses() {
        if (this.$route.name === 'WorkerMap') {
          return {
            'fullsize-map': true
          }
        }
        return {}
      }
    }
  }
</script>
<style>
  .quick-dash {
    margin-top: 20px;

  }
</style>
