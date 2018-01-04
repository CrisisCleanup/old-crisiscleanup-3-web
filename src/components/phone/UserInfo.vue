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
                        <a v-on:click="updateUserInfo">edit</a>
                </div>
            </div>
            <div class = "card text-white bg-dark col-4 text-center">
                <div class = "card-body">
                    <button class="btn btn-success" @click="startTakingCalls">Start </br> Taking </br> Calls</button>
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
      computed: {
          ...mapState('phone', [
        'takingCalls'
        ]),
      },
      methods: {
          updateUserInfo() {
              console.log("clicked edit");
          },
          startTakingCalls() {
              console.log("start taking calls");
          },
          ...mapActions([
            'getTakingCalls',
        ])
      }
  }
</script>