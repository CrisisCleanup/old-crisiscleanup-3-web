<template>
<div class = "row justify-content-center">
    <div class = "col-6">
        <div class = "card-group">
            <div class = "card text-white bg-dark col-8">
                <div class = "card-body">
                        <h6 class="card-title">{{ user.first_name }}  {{ user.last_name }}</h6>
                        <p class="card-text">
                            {{ user.last_used_phone_number }}</br>
                            Taking calls from {{ user.last_used_gateway }}
                        </p>
                        <button class="btn-success" v-on:click="editUserInfo">edit</button>
                </div>
            </div>
            <div class = "card text-white bg-dark col-4 text-center">
                <div class = "card-body">
                    <button v-bind:class="{'btn-success' : this.state != 'available', 'btn-danger' : this.state == 'available'}" v-on:click="startTakingCalls">{{this.message}}</button>
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
      ],
      mounted: function () {
        this.user = this.$store.state.phone.user;
      },
      data() {
        return {
            user: {},
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
              this.$emit('needsEdit')
          },
          startTakingCalls() {
              this.$emit('available');
              if (this.state != 'available') {
                this.message = 'Start Taking Calls'
              }
              else {
                 this.message = 'Stop Taking Calls' 
              }
          },
      }
  }
</script>