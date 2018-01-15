<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-body">
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <div class="input-group mb-3">
                  <span class="input-group-addon"><i class="icon-user"></i></span>
                  <b-form-input id="login-email" v-model="email" type="text"
                                placeholder="Email" :state="loginErrors ? false : null"/>
                  <b-form-invalid-feedback>Invalid email or password.</b-form-invalid-feedback>
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-addon"><i class="icon-lock"></i></span>
                  <b-form-input id="login-password" v-model="password" type="password"
                                :state="loginErrors ? false : null"
                                placeholder="Password"/>
                  <b-form-invalid-feedback>Invalid email or password.</b-form-invalid-feedback>
                </div>
                <div class="row">
                  <div class="col-6">
                    <button id="login-submit-btn" @click="login" type="button" class="btn btn-primary px-4">Login</button>
                  </div>
                  <!--<div class="col-6 text-right">-->
                    <!--<button type="button" class="btn btn-link px-0">Forgot password?</button>-->
                  <!--</div>-->
                </div>
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

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
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
    login() {
      this.$store.commit('auth/setLoginErrors', {hasError: null});
      const user = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch('auth/login', { user }).then(() => {
        this.$router.push({path: '/worker/dashboard'});
      });
    }
  }
}
</script>
