<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mx-4">
            <div class="card-body p-4">
              <h1>Activate Account</h1>
              <div v-show="errors.key.has" class="alert alert-danger" role="alert">
                {{errors.key.msg}}
              </div>
              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-envelope"></i></span>
                <input v-model="userInfo.email" type="email" class="form-control" placeholder="Email"
                       required v-bind:class="{'is-invalid': errors.email.has}">
                <!--<div v-show="errors.email.has" class="invalid-feedback">{{errors.email.msg}}</div>-->
              </div>

              <div class="input-group mb-3 ">
                <span class="input-group-addon"><i class="icon-user"></i></span>
                <input v-model="userInfo.name" type="text" class="form-control" placeholder="Name" required>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-phone"></i></span>
                <input v-model="userInfo.mobile" type="text" class="form-control" placeholder="Mobile Phone Number"
                        required v-bind:class="{'is-invalid': errors.mobile.has}">
                <!--<div v-show="errors.mobile.has" class="invalid-feedback">{{errors.mobile.msg}}</div>-->
              </div>

              <div class="input-group mb-3">
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                <input v-model="userInfo.password1" type="password" class="form-control" placeholder="Password"
                       v-bind:class="{'is-invalid': errors.password1.has}">
                <!--<div v-show="errors.password1.has" class="invalid-feedback">{{errors.password1.msg}}</div>-->
              </div>

              <div class="input-group mb-4">
                <span class="input-group-addon"><i class="icon-lock"></i></span>
                <input v-model="userInfo.password2" type="password" class="form-control" placeholder="Repeat password"
                       v-bind:class="{'is-invalid': errors.password2.has}">
                <!--<div v-show="errors.password2.has" class="invalid-feedback">{{errors.password2.msg}}</div>-->
              </div>

              <div class="row">
                <div class="col-md-12">
                  <b-form-checkbox :plain="true" value="3">
                    <b>I agree to the Terms of Service and Privacy Policy</b>
                  </b-form-checkbox>
                </div>
              </div>

              <button @click="activateAccount()" type="button" class="btn btn-block btn-success">Activate Account</button>
            </div>
            <div class="card-footer p-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      userInfo: {},
      hasErrors: false,
      errorMessage: "",
      invitationKey: "",
      errors: {
          email: {
            has: false,
            msg: ""
          },
          password1: {
            has: false,
            msg: ""
          },
          password2: {
            has: false,
            msg: ""
          },
          mobile: {
            has: false,
            msg: ""
          },
          key: {
            has: false,
            msg: ""
          },
      }

    }
  },
  mounted() {
  },
  methods: {
    activateAccount() {
      this.userInfo.key = this.$route.query.invitation_key
      this.$http.post(`${process.env.API_ENDPOINT}/rest-auth/registration/`, this.userInfo).then(response => {
        console.log(response);
        this.invitees = "";
      }, error => {
        console.log(error);
        for (let k in this.errors) {
          this.errors[k].has = false;
        }
        for (let k in error.body) {
          this.errors[k].has = true;
          this.errors[k].msg = error.body[k][0];
        }
      });
    }
  }
}
</script>
<style scoped>
  /*.input-group {*/
    /*padding-bottom: 1em;*/
  /*}*/

  .input-group .invalid-feedback {
    position: absolute;
    left: 0;
    top: 1.5em;
  }
</style>
