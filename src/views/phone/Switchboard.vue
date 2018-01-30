<template>
    <div>
      <button @click="setNeedsWelcome">DEBUG: Set needs welcome = true</button>
      <br>
      <user-info v-on:available="setAvailability" v-on:needsEdit= "editSessionInfo"/>
      <incoming-call v-if="showIncomingCall"/>
      <outbound-call-home v-if="showOutboundCallHome"/>
      <session-info-confirm v-on:confirm="sessionInfoConfirmed" v-if="showConfirmSessionInfo"/>
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
      // a.login().then(() => {
      //   return a.goAvailable();
      // }).then(() => {
      //   return a.dial('18017093623');
      // });
    },
    data() {
      return {
        showConfirmSessionInfo: true,
        showIncomingCall: false,
        showOutboundCallHome: true,
      }
    },
    computed: {
      ...mapState('phone', [
        'needsWelcome',
        'callState',
      ]),
      ...mapGetters(['getAsideView']),
      ...mapMutations(['setAsideView'])
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
        //TODO: for now, the toggling of the worksite aside is linked to the 'available' state
        //once we differentiate between 'available' and 'on call' states, link to 'on call' instead
        var aside = this.getAsideView;
        if (this.callState == 'available')
        {
          this.$store.commit('phone/notAvailable');
          this.showOutboundCallHome = false
          this.showIncomingCall = false
          if (aside == true)
          {
            //if open, aside should close once the call ends
            this.$store.commit('setAsideView');
            document.body.classList.toggle('aside-menu-hidden')
          }
        }
        else
        {
          this.$store.commit('phone/available');
          this.showOutboundCallHome = true;
          this.showIncomingCall = true;
          if (aside == false)
          {
            //if they are on a call and the aside is not already toggled open, open it 
            this.$store.commit('setAsideView');
            document.body.classList.toggle('aside-menu-hidden')
          }}
      },
      setNeedsWelcome() {
        this.$store.commit('phone/needsWelcome');
        this.$router.push('/worker/phone/welcome');
      },
    }
  }
</script>