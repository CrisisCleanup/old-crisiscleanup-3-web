<template>
<div class = "row justify-content-center">
    <div class = "col-12">
        <div class = "card-group">
            <div class = "card text-white bg-dark col-8">
                <div class = "card-body">
                        <h6 class="card-title">{{ user.name }}</h6>
                        <p class="card-text">
                            {{ user.last_used_phone_number }}</br>
                            Taking calls from {{ gateway.name }}
                        </p>
                        <button class="btn-success" v-on:click="editUserInfo">Edit</button>
                </div>
            </div>
            <div class = "card text-white bg-dark col-4 text-center">
                <div class = "card-body">
                    <b-button type="submit" variant="primary" v-on:click="goToWelcome">Welcome Screen</b-button>
                    <br><br>
                    <b-button v-bind:class="{'btn-success' : this.callState != 'AVAILABLE', 'btn-danger' : this.callState == 'AVAILABLE'}" v-on:click="startTakingCalls">{{this.getMessage()}}</b-button>
                    <!--TODO: queue functionality doesn't exist yet
                        p class = "card-text">
                        calls in queue</br>
                        32
                    </p-->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "phone-user-info",
  data() {
    return {
      message: "Start Taking Calls"
    };
  },
  computed: {
    ...mapGetters("phone", {
      user: "getUser",
      gateway: "getGateway",
      callState: "getCallState"
    })
  },
  methods: {
    editUserInfo() {
      this.$emit("needsEdit");
    },
    startTakingCalls() {
      //TODO: now that the message changes in a separate function,
      //I don't like how this function's only purpose is to fire off a response
      this.$emit("stateChanged");
    },
    getMessage() {
      if (this.callState != "AVAILABLE") {
        return "Start Taking Calls";
      } else {
        return "Stop Taking Calls";
      }
    },
    goToWelcome() {
      this.$store.commit("phone/needsWelcome");
      this.$router.push("/worker/phone/welcome");
    }
  }
};
</script>