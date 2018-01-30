<template>
    <div>
      <button @click="setNeedsWelcome">DEBUG: Set needs welcome = true</button>
      <br>
      <user-info v-on:stateChanged="setAvailability" v-on:needsEdit= "editSessionInfo"/>
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
    },
    data() {
      return {
        showConfirmSessionInfo: true,
        showIncomingCall: false,
        showOutboundCallHome: true,
        phoneService: null,
        loggedIn: false
      }
    },
    computed: {
      ...mapState('phone', [
        'needsWelcome'
      ]),
      ...mapGetters({aside: 'getAsideView'}),
      ...mapGetters('phone', {
        gateway: 'getGateway',
        callState: 'getCallState'
    }),
      ...mapMutations(['setAsideView']),
  },
    methods: {
      sessionInfoConfirmed(info) {
        console.log('Session info confirmed', info);

        //if the gateway changed, logout and re-log back in 
        if (info.changedGateway == true) 
        {
          this.logoutOfPhoneService();
        }
        this.showConfirmSessionInfo = false;
      },
      editSessionInfo() {
        this.showConfirmSessionInfo = true;
      },
      setAvailability() {
        if (this.callState == 'AVAILABLE')
        {
          this.enterAwayState();
        }
        else
        {
          this.enterAvailableState();
        }
      },
      setNeedsWelcome() {
        this.$store.commit('phone/needsWelcome');
        this.$router.push('/worker/phone/welcome');
      },
      enterAvailableState() {
        this.$store.commit('phone/available');
        this.showOutboundCallHome = true;
       
       //if an agent is not logged in, log in
       //otherwise - change state to available
        if (this.loggedIn == false) {

        //start up new phone service instance when entering Switchboard for first time
        this.phoneService = new PhoneService();
        
        this.phoneService.login().then(() => {
          this.phoneService.changeState(this.callState);
          this.loggedIn = true;
        }).catch(err => {
          console.log(err);
        });
        } else {
          this.phoneService.changeState(this.callState).catch(err => {console.log(err)});
        }

        //this.makeOutboundCall('6304707096');
      
      },
      enterAwayState() {
        //change state in store and call center to 'AWAY'
        this.$store.commit('phone/away');

        this.showOutboundCallHome = false
        this.showIncomingCall = false
        if (this.aside == true)
        {
          //if open, aside should close once the call ends
          document.body.classList.toggle('aside-menu-hidden', this.aside)
          this.$store.commit('setAsideView');
        }

        this.phoneService.changeState(this.callState);
      },
      takeIncomingCall() {
        this.showIncomingCall = true;
        if (this.aside == false)
        {
          //if they are on a call and the aside is not already toggled open, open it 
          document.body.classList.toggle('aside-menu-hidden', this.aside)
          this.$store.commit('setAsideView');
        }
      },
      makeOutboundCall() {
        //currentState becomes 'TRANSITION'
        //TODO: change store state based on user being on call
        //TODO: refactor the hiding of components to be based on state and not "showIncomingCall, showOutboundCall, etc"
        this.phoneService.dial('6304707096');
      }, 
      logoutOfPhoneService() {
        //enter away state to hide necessary components, then log out of call center
        this.loggedIn = false;
        this.enterAwayState();
        this.phoneService.logout();
        this.phoneService = new PhoneService();
      }
    }
  }
</script>