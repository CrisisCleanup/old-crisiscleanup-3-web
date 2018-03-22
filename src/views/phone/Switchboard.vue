<template>
    <div>
      <user-info v-on:stateChanged="setAvailability" v-on:needsEdit="editSessionInfo"/>
      <incoming-call v-if="this.callState == 'ENGAGED-INBOUND'"   />
      <outbound-call-home v-if="showOutboundCallHome" v-on:makingCall="makeOutboundCall" v-on:cancelCall="cancelOutboundCall"/>

    <b-modal ref="infoConfirmModal" centered @ok="editSessionInfoOk" hide-footer>
        <session-info-confirm v-on:confirm="sessionInfoConfirmed"/>
    </b-modal>

    </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import PhoneService from "@/services/phone";
import SessionInfoConfirm from "@/components/phone/SessionInfoConfirm";
import UserInfo from "@/components/phone/UserInfo";
import IncomingCall from "@/components/phone/IncomingCall";
import OutboundCallHome from "@/components/phone/OutboundCallHome";

export default {
  components: {
    "session-info-confirm": SessionInfoConfirm,
    "user-info": UserInfo,
    "incoming-call": IncomingCall,
    "outbound-call-home": OutboundCallHome
  },
  mounted: function() {
    if (this.needsWelcome) {
      this.$router.push("/worker/phone/welcome");
    }
  },
  data() {
    return {
      showConfirmSessionInfo: true,
      showIncomingCall: false,
      showOutboundCallHome: true,
      phoneService: null,
      loggedIn: false
    };
  },
  computed: {
    ...mapState("phone", ["needsWelcome"]),
    ...mapGetters({ aside: "getAsideView" }),
    ...mapGetters("phone", {
      gateway: "getGateway",
      callState: "getCallState"
    }),
    ...mapMutations(["setAsideView"])
  },
  methods: {
    sessionInfoConfirmed(info) {
      //if the gateway changed, logout and re-log back in
      if (info.changedInfo == true && this.phoneService) {
        this.logoutOfPhoneService();
      }
      this.$refs.infoConfirmModal.hide();
    },
    editSessionInfoOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
    },
    editSessionInfo() {
      this.$refs.infoConfirmModal.show();
    },
    setAvailability() {
      if (this.callState == "AVAILABLE") {
        this.enterAwayState();
      } else {
        this.enterAvailableState();
      }
    },
    enterAvailableState() {
      this.showOutboundCallHome = true;

      //if an agent is not logged in, log in
      //otherwise - change state to available
      if (this.loggedIn == false) {
        //start up new phone service instance when entering Switchboard for first time
        //manually set state to available since the previous state is automatically 'AVAILABLE' on login
        this.phoneService = new PhoneService();
        this.phoneService.login().then(() => {
          this.$store.dispatch('phone/changeState', 'AVAILABLE').then(() => {
            console.log("this.callState = ", this.callState);
            this.phoneService.changeState(this.callState);
            this.loggedIn = true;
          })
        }).catch(err => {
          console.log(err);
        });
      }
    },
    enterAwayState() {
      //change state in store and call center to 'AWAY'
      //this.$store.commit('phone/away');
      this.phoneService.changeState("AWAY");
      this.showOutboundCallHome = false;
      this.showIncomingCall = false;
      if (this.aside == true) {
        //if open, aside should close once the call ends
        document.body.classList.toggle("aside-menu-hidden", this.aside);
        this.$store.commit("setAsideView");
      }

    },
    takeIncomingCall() {
      this.showIncomingCall = true;
      if (this.aside == false)
      {
        //if they are on a call and the aside is not already toggled open, open it 
        document.body.classList.toggle('aside-menu-hidden', this.aside)
        this.$store.commit('setAsideView')
      }
    },
    makeOutboundCall(destination) {
      //currentState becomes 'TRANSITION'
      //TODO: change store state based on user being on call
      //TODO: refactor the hiding of components to be based on state and not "showIncomingCall, showOutboundCall, etc"
      if (this.loggedIn && this.phoneService && this.callState=="AVAILABLE" && destination )
      {
        //TODO: regex check the destination
        this.phoneService.dial(destination)
      }
    }, 
    cancelOutboundCall() {
      //currentState becomes 'TRANSITION'
      //TODO: change store state based on user being on call
      //TODO: refactor the hiding of components to be based on state and not "showIncomingCall, showOutboundCall, etc"
      //if (this.loggedIn && this.phoneService && this.callState=="AVAILABLE" && destination )
      //{
        //TODO: regex check the destination
        this.phoneService.hangup()
      //}
    },
    logoutOfPhoneService() {
      //enter away state to hide necessary components, then log out of call center
      this.enterAwayState();
      this.phoneService.logout();
      this.loggedIn = false;
    },
    makeOutboundCall(destination) {
      //currentState becomes 'TRANSITION'
      //TODO: change store state based on user being on call
      //TODO: refactor the hiding of components to be based on state and not "showIncomingCall, showOutboundCall, etc"
      if (
        this.loggedIn &&
        this.phoneService &&
        this.callState == "AVAILABLE" &&
        destination
      ) {
        //TODO: regex check the destination
        this.phoneService.dial(destination);
      }
    },
    logoutOfPhoneService() {
      //enter away state to hide necessary components, then log out of call center
      this.enterAwayState();
      this.phoneService.logout();
      this.loggedIn = false;
    }
  }
};
</script>