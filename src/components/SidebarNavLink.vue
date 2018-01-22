<template>
  <router-link :to="url" class="nav-link"  v-if="isVisible">
    <i :class="icon"></i> {{name}}
    <b-badge :variant="badge.variant">{{badge.text}}</b-badge>
  </router-link>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
  computed: {
    ...mapGetters('phone', ['getCallCenterAccessible']),
    isVisible: function() {
      if(this.name == "Phone"){
        return this.getCallCenterAccessible;
      }
      return true;
    }
  },
  name: 'sidebar-nav-link',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    badge: {
      default: ''
    }
  },
  created: function() {
    this.setVisibility(this.name)
  },
  methods: {
    setVisibility(itemName) {
      if(itemName == "Phone"){
        //Phone menu item should only be visible if they opted in for the Call Center
        var userId = this.$store.state.worker.currentUserId;
        this.$store.dispatch('phone/getUser', {userId, overwrite: false});
      }
    }
  }
}
</script>
