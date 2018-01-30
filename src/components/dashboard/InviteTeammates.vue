<template>
  <div>
    <p>{{ $t('inviteTeammates.invite_teammates_instructions') }}</p>
    <div class="form-group">
      <input type="text" v-model="invitees"
             v-bind:class="{ 'form-control': true, 'is-invalid': hasErrors, 'is-valid': successfulInvites }"
             placeholder="i.e. john@example.com, jane@example.com, steve@example.com" id="emails-to-send"/>
      <div v-show="hasErrors" class="invalid-feedback">{{errorMessage}}</div>
      <div v-show="successfulInvites" class="success">{{ $t('inviteTeammates.invites_sent_success') }}</div>
    </div>
    <br/>
    <button class="btn btn-lg btn-primary" id="submit-invites-btn" @click="sendInvites()">{{ $t('inviteTeammates.send_invites') }}</button>
  </div>
</template>

<script>
  export default {
    name: 'invite-teammates',
    data() {
      return {
        invitees: "",
        hasErrors: false,
        successfulInvites: false,
        errorMessage: ""
      }
    },
    computed: {
      classObject: () => {
        return {
          'form-control': true,
          'is-invalid': this.hasErrors
        }
      }
    },
    methods: {
      sendInvites() {
        const invites = this.invitees.split(',').map(emailAddress => {
          return {"email": emailAddress}
        });
        this.$http.post(`/invites`, invites).then(response => {
          console.log(response);
          this.hasErrors = false;
          this.successfulInvites = true;
          this.invitees = "";
          setTimeout(() => {
            this.successfulInvites = false;
          }, 3000);
        }, error => {
          console.log(error)
          this.hasErrors = true;
          this.errorMessage = error.body[0].email[0]
        });
      }
    }

  }
</script>
