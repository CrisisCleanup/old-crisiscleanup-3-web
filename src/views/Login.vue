<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-body">
                <h1>{{ $t('actions.login') }}</h1>
                <p class="text-muted">{{ $t('login.sign_in_msg') }}</p>
                <p class="red-text" v-if="loginErrors">{{ $t('login.invalid_credentials_msg') }}</p>
                <b-form @submit="login" id="login-form">
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <b-form-input id="login-email" v-model="email" type="email" required autofocus
                                  v-bind:placeholder="$t('login.email_placeholder')" :state="loginErrors ? false : null"/>
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <b-form-input id="login-password" v-model="password" type="password" required
                                  :state="loginErrors ? false : null"
                                  v-bind:placeholder="$t('login.password_placeholder')"/>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <!-- <button id="login-submit-btn" @keyup.enter="login" @click="login" type="button" class="btn btn-primary px-4">{{ $t('actions.login') }} </button> -->
                      <button id="login-submit-btn" type="submit" class="btn btn-primary px-4">{{ $t('actions.login') }} </button>
                    </div>
                    <!--<div class="col-6 text-right">-->
                    <!--<button type="button" class="btn btn-link px-0">{{ $t('actions.forgot_password') }}</button>-->
                    <!--</div>-->
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapGetters, mapState} from 'vuex';
  import Notifications from 'vue-notification';

  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        loginTriggered: false
      }
    },
    components: {

    },
    mounted() {
      this.$store.commit('auth/setLoginErrors', {hasError: null});
    },
    computed: {
      ...mapState('auth', ['isAuthenticated', 'loginErrors']),
      emailErrorState() {
        if (this.loginErrors) {
          return 'invalid'
        }
        return 'valid'
      }
    },
    methods: {
      login(evt) {
        evt.preventDefault();
        if (this.$notify) {
          this.$notify({
            group: 'core',
            title: this.$t('notify.login_attempt'),
            text: this.$t('notify.logging_in'),
            width: 500,
          });
        }
        // this.loginTriggered = true;
        this.$store.commit('auth/setLoginErrors', {hasError: null});
        const user = {
          email: this.email,
          password: this.password
        };

        this.$store.dispatch('auth/login', {user}).then(() => {
          this.$router.push({path: '/worker/dashboard'});
          const successMsg = this.$t('notify.login_successful');
          const failMsg = this.$t('notify.login_failed');
          const failedMsg = this.$t('notify.login_failed_msg');

          setTimeout(() => {
            if (this.$notify) {
              this.$notify({
                type: 'success',
                group: 'core',
                title: successMsg,
                text: '',
                width: 500,
              });
            }
          }, 1000);

        }, (error) => {
           setTimeout(() => {
            if (this.$notify) {
              this.$notify({
                type: 'error',
                group: 'core',
                title: failMsg,
                text: failedMsg,
                width: 500,
              });
            }
          }, 1000);
        });
      }
    }
  }
</script>

<style scoped>

  .red-text {
    color: red;
  }

</style>
