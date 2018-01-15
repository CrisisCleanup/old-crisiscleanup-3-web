<template>
    <div>
      <button @click="setNeedsWelcome">DEBUG: Set needs welcome = true</button>
      <br>
      <user-info :userName="userName" :phoneNumber="phoneNumber" :gatewayMessage="gatewayMessage" v-on:takingCalls="takingIncomingCalls"/>
      <incoming-call-script :userName="userName" v-if="showIncomingCallScript"/>
      <session-info-confirm :userName="userName" v-on:confirm="sessionInfoConfirmed" v-if="showConfirmSessionInfo" />
    </div>
</template>

<script>
  import { mapMutations, mapState, mapGetters } from 'vuex'
  import SessionInfoConfirm from '@/components/phone/SessionInfoConfirm'
  import UserInfo from '@/components/phone/UserInfo'
  import IncomingCallScript from '@/components/phone/IncomingCallScript'

  export default {
    components: {
      'session-info-confirm': SessionInfoConfirm,
      'user-info':UserInfo,
      'incoming-call-script': IncomingCallScript
    },
    mounted: function() {
      if (this.needsWelcome) {
        this.$router.push('/worker/phone/welcome');
      }
    },
    data() {
      return {
        showConfirmSessionInfo: true,
        showIncomingCallScript: false,
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
        'needsWelcome',
        'state',
      ]),
    },
    methods: {
      sessionInfoConfirmed(info) {
        console.log('Session info confirmed', info);
        this.showConfirmSessionInfo = false;
      },
      takingIncomingCalls() {
        if (this.state == 'takingIncomingCalls')
        {
          this.$store.commit('phone/notTakingCalls');
          this.showIncomingCallScript = false;
        }
        else
        {
          this.$store.commit('phone/takingCalls');
          this.showIncomingCallScript = true;
        }

      },
      setNeedsWelcome() {
        this.$store.commit('phone/needsWelcome');
        this.$router.push('/worker/phone/welcome');
      },
    }
  }
</script>