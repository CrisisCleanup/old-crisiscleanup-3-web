<template>
    <div>
    <div class="row">

       <!-- ******************** Check-list ********************* -->
    <div class="col-md-6">
          <div class="col-md-6">
            <button type="button" class="btn btn-block btn-primary"><i class="icon-check float-left" v-if="user.is_trained" style="font-size:18pt"></i><i class="icon-exclamation float-left" v-else style="font-size:18pt"></i>Get Trained</button>
            <button type="button" class="btn btn-block btn-primary" @click="getUpToDate"><i class="icon-check float-left" v-if="user.is_up_to_date" style="font-size:18pt"></i><i class="icon-exclamation float-left" v-else style="font-size:18pt"></i>Get Up To Date</button>
            <button type="button" class="btn btn-block btn-primary" @click="getStarted">Get Started</button>
          </div>   
      </div>
      <!-- ******************** Call center experts ********************* --> 

      <div class="col-lg-6"  align="right">
          <div class="card">
            <div class="card-header text-center">Ask a Call Center Expert</div>
            <div class="card-body" >
              <p class="card-text">
              <table style="width:100%">
                <tr v-for="expert in callCenterExperts" v-bind:key="expert.id">
                    <td style="width:50%">{{ expert.name }}</td>
                    <td style="width:50%">{{ expert.number }}</td>
                </tr>
              </table>
              </p>
            </div>
          </div>
      </div>
</div>
    

    <!-- ******************** Call center planning  ********************* -->

    <b-tabs>
      <b-tab title="Schedule" active>
        <br>
        <a href="https://api.sling.is/" target="_blank"> 
          <img src="/static/img/front_end/logo-sling.jpg" alt="Sling" img height="100">
        </a>
      </b-tab>
      <b-tab title="Hours" >
        <br>A beautiful hours report
      </b-tab>
      <b-tab title="Stats">
        <br>Stats here
      </b-tab>
    </b-tabs>


    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
      data() {
        return {
          user: {},
          gateway: {},
          callCenterExperts: [],
          stories: [
            { description: "xyz"},
            { description: "xyz"}
          ]
      }
    },
    mounted() {
    },
    created: function() {
      this.getUserData();
      this.getCallExperts();
    },
    methods: {
      getUserData(){
        //Grab the user id from the login info
        var userId = this.$store.state.worker.currentUserId;
        //Grab user information
        this.$store.dispatch('phone/getUser', userId).then(() => {
            this.user = this.$store.state.phone.user;
            console.log(this.user);
        });
      },
      getCurrentGateway(){
        //Get user's current gateway info
        console.log("gateway: " + this.user.last_used_gateway);
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/gateways/` + this.user.last_used_gateway + `/get_detail`).then(r => {
            this.gateway = r.data;
            this.$store.commit('phone/setGateway', this.gateway);
        }).catch(err => {
          console.log(err);
        });
      },
      getCallExperts(){
        //Grab the call expert ids/numbers
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/users?willing_to_be_call_center_support=true`).then(r => {
          var callExperts = r.data.results;
          console.log(callExperts);
          if(callExperts != null && callExperts.length > 0) {
            callExperts.forEach(function(expert) {
              expert.number = expert.last_used_phone_number
              expert.name = expert.name
            })
            this.callCenterExperts = callExperts;
          }
        }).catch(err => {
          console.log(err)
        });
      },
      getUpToDate() {
        this.$router.push({ path: 'getUpToDate' });
      },
      getStarted() {
        this.$store.commit('phone/seenWelcome');
        this.$router.push({ name: 'Phone' });
      }
    }
  }
</script>