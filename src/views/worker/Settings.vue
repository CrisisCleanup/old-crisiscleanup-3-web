<template>
  <div class="animated fadeIn">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Role</h1>
          <div v-show="errors.key.has" class="alert alert-danger" role="alert">
            {{errors.key.msg}}
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3 ">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input v-model="userInfo.name" type="text" class="form-control" v-bind:placeholder = "$t('activate.first_name_placeholder')" required>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3 ">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input v-model="userInfo.name" type="text" class="form-control" v-bind:placeholder = "$t('activate.last_name_placeholder')" required>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-envelope"></i></span>
            <input v-model="userInfo.email" type="email" class="form-control" v-bind:placeholder = "$t('activate.email_placeholder')" required v-bind:class="{'is-invalid': errors.email.has}">
            <div v-show="errors.email.has" class="invalid-feedback">{{errors.email.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-lock"></i></span>
            <input v-model="userInfo.password1" type="password" class="form-control" v-bind:placeholder = "$t('activate.pw1_placeholder')" v-bind:class="{'is-invalid': errors.password1.has}">
            <div v-show="errors.password1.has" class="invalid-feedback">{{errors.password1.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-phone"></i></span>
            <input v-model="userInfo.mobile" type="text" class="form-control" v-bind:placeholder = "$t('activate.mobile_placeholder')" required v-bind:class="{'is-invalid': errors.mobile.has}">
            <div v-show="errors.mobile.has" class="invalid-feedback">{{errors.mobile.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12">
          <button @click="updateRole()" type="button" class="btn btn-block btn-success">{{ $t('actions.save') }}</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Assets</h1>
          <div v-show="errors.key.has" class="alert alert-danger" role="alert">
            {{errors.key.msg}}
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3 ">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input v-model="userInfo.name" type="text" class="form-control" v-bind:placeholder = "$t('activate.first_name_placeholder')" required>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3 ">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input v-model="userInfo.name" type="text" class="form-control" v-bind:placeholder = "$t('activate.last_name_placeholder')" required>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-envelope"></i></span>
            <input v-model="userInfo.email" type="email" class="form-control" v-bind:placeholder = "$t('activate.email_placeholder')" required v-bind:class="{'is-invalid': errors.email.has}">
            <div v-show="errors.email.has" class="invalid-feedback">{{errors.email.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-lock"></i></span>
            <input v-model="userInfo.password1" type="password" class="form-control" v-bind:placeholder = "$t('activate.pw1_placeholder')" v-bind:class="{'is-invalid': errors.password1.has}">
            <div v-show="errors.password1.has" class="invalid-feedback">{{errors.password1.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-phone"></i></span>
            <input v-model="userInfo.mobile" type="text" class="form-control" v-bind:placeholder = "$t('activate.mobile_placeholder')" required v-bind:class="{'is-invalid': errors.mobile.has}">
            <div v-show="errors.mobile.has" class="invalid-feedback">{{errors.mobile.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12">
          <button @click="updateAssets()" type="button" class="btn btn-block btn-success">{{ $t('actions.save') }}</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Settings</h1>
          <div v-show="errors.key.has" class="alert alert-danger" role="alert">
            {{errors.key.msg}}
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3 ">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input v-model="userInfo.name" type="text" class="form-control" v-bind:placeholder = "$t('activate.first_name_placeholder')" required>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3 ">
            <span class="input-group-addon"><i class="icon-user"></i></span>
            <input v-model="userInfo.name" type="text" class="form-control" v-bind:placeholder = "$t('activate.last_name_placeholder')" required>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-envelope"></i></span>
            <input v-model="userInfo.email" type="email" class="form-control" v-bind:placeholder = "$t('activate.email_placeholder')" required v-bind:class="{'is-invalid': errors.email.has}">
            <div v-show="errors.email.has" class="invalid-feedback">{{errors.email.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-lock"></i></span>
            <input v-model="userInfo.password1" type="password" class="form-control" v-bind:placeholder = "$t('activate.pw1_placeholder')" v-bind:class="{'is-invalid': errors.password1.has}">
            <div v-show="errors.password1.has" class="invalid-feedback">{{errors.password1.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="input-group mb-3">
            <span class="input-group-addon"><i class="icon-phone"></i></span>
            <input v-model="userInfo.mobile" type="text" class="form-control" v-bind:placeholder = "$t('activate.mobile_placeholder')" required v-bind:class="{'is-invalid': errors.mobile.has}">
            <div v-show="errors.mobile.has" class="invalid-feedback">{{errors.mobile.msg}}</div>
          </div>
        </div>

        <div class="col-sm-12">
          <button @click="updateSettings()" type="button" class="btn btn-block btn-success">{{ $t('actions.save') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      userInfo: {},
      hasErrors: false,
      errorMessage: "",
      invitationKey: "",
      errors: {
          email: {
            has: false,
            msg: this.$t('activate.email_error')
          },
          password1: {
            has: false,
            msg: this.$t('activate.password_length_error')
          },
          mobile: {
            has: false,
            msg: this.$t('activate.mobile_error')
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
      this.$http.post(`/rest-auth/registration/`, this.userInfo).then(response => {
        this.invitees = "";
      }, error => {
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
  .container {
    margin-bottom: 40px;
  }
</style>
