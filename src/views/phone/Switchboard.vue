<template>
    <div>
      <button @click="setNeedsWelcome">DEBUG: Set needs welcome = true</button>
      <br>
      <user-info :userName="userName" :phoneNumber="phoneNumber" :gatewayMessage="gatewayMessage" v-on:available="setAvailability" v-on:needsEdit= "editSessionInfo"/>
      <incoming-call :userName="userName" v-if="showIncomingCall"/>
      <outbound-call-home v-if="showOutboundCallHome"/>
      <session-info-confirm :userName="userName" v-on:confirm="sessionInfoConfirmed" v-if="showConfirmSessionInfo"/>
    </div>
</template>

<script>
  import { mapMutations, mapState, mapGetters } from 'vuex'
  import PhoneService from '@/services/phone';
  import SessionInfoConfirm from '@/components/phone/SessionInfoConfirm'
  import UserInfo from '@/components/phone/UserInfo'
  import IncomingCall from '@/components/phone/IncomingCall'
  import OutboundCallHome from '@/components/phone/OutboundCallHome'

  export default {
    components: {
      'session-info-confirm':SessionInfoConfirm,
      'user-info':UserInfo,
      'incoming-call':IncomingCall,
      'outbound-call-home':OutboundCallHome
    },
    mounted: function() {
      if (this.needsWelcome) {
        this.$router.push('/worker/phone/welcome');
      }

      // var a = new PhoneService();
      // a.login();
    },
    data() {
      return {
        showConfirmSessionInfo: true,
        showIncomingCall: false,
        showOutboundCallHome: true
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
      editSessionInfo() {
        this.showConfirmSessionInfo = true;
      },
      setAvailability() {
        if (this.state == 'available')
        {
          this.$store.commit('phone/notAvailable');
          this.showOutboundCallHome = false
          this.showIncomingCall = false
        }
        else
        {
          this.$store.commit('phone/available');
          this.showOutboundCallHome = true;
          this.showIncomingCall = true;
        }

      },
      setNeedsWelcome() {
        this.$store.commit('phone/needsWelcome');
        this.$router.push('/worker/phone/welcome');
      },
    }
  }
</script>