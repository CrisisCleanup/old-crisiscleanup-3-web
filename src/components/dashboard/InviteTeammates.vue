<template>
  <div>
    <p>{{ $t('inviteTeammates.invite_teammates_instructions') }}</p>
    <div class="form-group">
      <input type="text" v-model="invitees"
             :state="formErrors && formErrors.hasOwnProperty('test') ? false : null"
             placeholder="i.e. john@example.com, jane@example.com, steve@example.com" id="emails-to-send"/>
      <div v-show="formErrors" class="invalid-feedback">{{errorMessage}}</div>
      <!-- <div v-show="successfulInvites" class="success">{{ $t('inviteTeammates.invites_sent_success') }}</div>
      -->
    </div>
    <br/>
    <button class="btn btn-lg btn-primary" id="submit-invites-btn" @click="sendInvites()">{{
      $t('inviteTeammates.send_invites') }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'invite-teammates',
    data() {
      return {
        invitees: "",
        successfulInvites: false,
        errorMessage: ""
      }
    },
    computed: {
      formErrors() {
        return this.$store.getters.getLoginFormErrors;
      },
    },
    methods: {
      sendInvites() {
        const invites = this.invitees.split(',').map(emailAddress => {
          return {"email": emailAddress}
        });
        this.$store.dispatch('sendInvites', invites).then(() => {
          this.successfulInvites = true;
          this.invitees = "";
          this.$notify({
            type: 'warn',
            group: 'core',
            title: 'Success!',
            text: 'Invites have been sent.',
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
          setTimeout(() => {
            this.successfulInvites = false;
          }, 3000);
        }, error => {
          this.errorMessage = error.msg;

        });
      }
    }

  }
</script>
