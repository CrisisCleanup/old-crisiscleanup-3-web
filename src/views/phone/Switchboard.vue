<template>
    <div>
      <button @click="setNeedsWelcome">DEBUG: Set needs welcome = true</button>
      <br>
      <session-info-confirm :userName="userName" v-on:confirm="sessionInfoConfirmed" v-if="showConfirmSessionInfo" />
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import SessionInfoConfirm from '@/components/phone/SessionInfoConfirm'
var a;
  export default {
    components: {
      'session-info-confirm': SessionInfoConfirm
    },
    mounted: function() {
      if (this.needsWelcome) {
        this.$router.push('/worker/phone/welcome');
      }
    },
    data() {
      return {
        showConfirmSessionInfo: true
      }
    },
    computed: {
      userName() {
        return 'Juanita';
      },
      ...mapState('phone', [
        'needsWelcome'
      ]),
    },
    methods: {
      sessionInfoConfirmed(info) {
        console.log('Session info confirmed', info);
        this.showConfirmSessionInfo = false;
      },
      setNeedsWelcome() {
        this.$store.commit('phone/needsWelcome');
        this.$router.push('/worker/phone/welcome');
      }
    }
  }
</script>