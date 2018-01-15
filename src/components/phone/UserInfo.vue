<template>
<div class = "row justify-content-center">
    <div class = "col-6">
        <div class = "card-group">
            <div class = "card text-white bg-dark col-8">
                <div class = "card-body">
                        <h6 class="card-title">{{ userName.first }}  {{ userName.last }}</h6>
                        <p class="card-text">
                            {{ phoneNumber }}</br>
                            {{ gatewayMessage }}
                        </p>
                        <button class="btn-success" v-on:click="editUserInfo">edit</button>
                </div>
            </div>
            <div class = "card text-white bg-dark col-4 text-center">
                <div class = "card-body">
                    <button v-bind:class="{'btn-success' : this.state != 'takingIncomingCalls', 'btn-danger' : this.state == 'takingIncomingCalls'}" v-on:click="startTakingCalls">{{this.message}}</button>
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
  import { mapMutations, mapState, mapActions } from 'vuex' //do we want to map acitons here?
  export default {
      name: 'phone-user-info',
      props: [
          'userName',
          'phoneNumber',
          'gatewayMessage',
      ],
      data() {
        return {
            message: 'Start Taking Calls',
        };
        },
      computed: {
      ...mapState('phone', {
        state: state => state.state
      }),
    },
      methods: {
          editUserInfo() {
              console.log("clicked edit");
              this.$emit('needsEdit')
          },
          startTakingCalls() {
              console.log("start taking calls");
              this.$emit('takingCalls');
              if (this.state != 'takingIncomingCalls') {
                this.message = 'Start Taking Calls'
              }
              else {
                 this.message = 'Stop Taking Calls' 
              }
          },
      }
  }
</script>