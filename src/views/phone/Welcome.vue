<template>
  <div>
    <b-container fluid>
    <b-row>
       <!-- ******************** Check-list ********************* -->
      <b-col md="4">
        <b-card no-body header="Getting Started">
          <b-list-group flush>
            <b-list-group-item @click="getTrained" href="#">Get Trained
              <i class="icon-check float-right" v-if="user.is_training_completed" style="font-size:18pt"></i><i class="icon-exclamation float-right" v-else style="font-size:18pt"></i>
            </b-list-group-item>
            <b-list-group-item @click="getUpToDate" href="#">Get Up To Date
              <i class="icon-check float-right" v-if="user.is_up_to_date" style="font-size:18pt"></i><i class="icon-exclamation float-right" v-else style="font-size:18pt"></i>      
            </b-list-group-item>      
            <b-list-group-item @click="getStarted" href="#">Get Started
              <i class="icon-control-play float-right" style="font-size:18pt"></i>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <!-- ******************** Call center experts ********************* --> 
      <b-col md="8" offset-md="4">
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
      </b-col>
    </b-row>

    <!-- ******************** Call center planning  ********************* -->
    <b-card no-body>
        <b-tabs card>
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
      </b-card>

    </b-container>
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
      data() {
        return {
          user: {},
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
        var userId = this.$store.getters['auth/getUserId'];
        //Grab user information
        this.$store.dispatch('phone/getUser', {userId, overwrite: true}).then(() => {
            this.user = this.$store.state.phone.user;
            this.getGatewayData();
        });
      },
      getGatewayData(){
        //Get user's current gateway info
        if (this.user.last_used_gateway != null) {
          this.$store.dispatch('phone/getGateway', this.user.last_used_gateway).catch(err => {
            console.log(err);
          });
        } else {
          //TODO: add default gateway
          console.log("no gateway specified for user");
        }
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
        this.$router.push({ path: 'News' });
      },
      getTrained() {
        this.$router.push({ path: 'Training' });
      },
      getStarted() {
        this.$store.commit('phone/seenWelcome');
        this.$router.push({ name: 'Phone' });
      }
    }
  }
</script>