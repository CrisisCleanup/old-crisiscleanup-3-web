<template>
    <div>
      <button @click="setNeedsWelcome">DEBUG: Set needs welcome = true</button>
      <br>
      <user-info :userName="userName" :phoneNumber="phoneNumber" :gatewayMessage="gatewayMessage"/>
      <session-info-confirm :userName="userName" v-on:confirm="sessionInfoConfirmed" v-if="showConfirmSessionInfo" />
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import SessionInfoConfirm from '@/components/phone/SessionInfoConfirm'
  import UserInfo from '@/components/phone/UserInfo'
var a;
  export default {
    components: {
      'session-info-confirm': SessionInfoConfirm,
      'user-info':UserInfo
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
        return {first: 'Juanita', last: 'Jones'};
      },
      phoneNumber() {
        return '6015544938';
      },
      gatewayMessage() {
        return 'taking calls from Hurricane Irma'
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