<template>
<div class = "row justify-content-center">
    <div class = "col-6">
        <div class = "card-group">
            <div class = "card text-white bg-dark col-8">
                <div class = "card-body">
                        <h6 class="card-title">{{ user.name }}</h6>
                        <p class="card-text">{{ user.last_used_phone_number }}</p>
                        <p class="card-text">{{ this.getCurrentEventInfo() }}</p>
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
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    name: 'phone-user-info',
    data() {
    return {
        message: 'Start Taking Calls',
    };
    },
    computed: {
    ...mapMutations('phone', [
        'available', 'notAvailable'
    ]),
    ...mapGetters('phone', {
        user: 'getUser',
        callState: 'getCallState'
    }),
    ...mapGetters({
        event: 'getCurrentEvent'
    })
    },
    methods: {
        getCurrentEventInfo() {
            var gatewayMessage = "No gateway selected";
            if (this.event) {
                gatewayMessage ="Taking calls from " + this.event.name;
            }
            return gatewayMessage;
        },
        editUserInfo() {
            this.$emit('needsEdit')
        },
        startTakingCalls() {
            this.$emit('available');
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