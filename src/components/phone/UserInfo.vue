<template>
<div class = "row justify-content-center">
    <div class = "col-6">
        <div class = "card-group">
            <div class = "card text-white bg-dark col-8">
                <div class = "card-body">
                        <h6 class="card-title">{{ userInfo.name }}</h6>
                        <p class="card-text">
                            {{ userInfo.phoneNumber }}</br>
                            Taking calls from {{ userInfo.gatewayName }}
                        </p>
                        <button class="btn-success" v-on:click="editUserInfo">edit</button>
                </div>
            </div>
            <div class = "card text-white bg-dark col-4 text-center">
                <div class = "card-body">
                    <button v-bind:class="{'btn-success' : this.callState != 'available', 'btn-danger' : this.callState == 'available'}" v-on:click="startTakingCalls">{{this.message}}</button>
                    <p class = "card-text">
                        calls in queue</br>
                        32
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
      name: 'phone-user-info',
      props: [
          'userInfo'
      ],
      mounted: function () {
        this.user = this.$store.state.phone.user;
        this.gateway = this.$store.state.phone.gateway;
      },
      data() {
        return {
            message: 'Start Taking Calls',
        };
        },
      computed: {
      ...mapState('phone', ['callState']),
      ...mapMutations('phone', [
          'available', 'notAvailable'
      ])
    },
      methods: {
          editUserInfo() {
              this.$emit('needsEdit')
          },
          startTakingCalls() {
              this.$emit('available');
              console.log("name: " + this.userInfo.phoneNumber);
              console.log(this.callState)
              if (this.callState != 'available') {
                this.message = 'Start Taking Calls'
              }
              else {
                 this.message = 'Stop Taking Calls' 
              }

          },
      }
  }
</script>