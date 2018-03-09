<template>
  <div>
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
            <h1 v-if="ok">Yes</h1>
            <b-list-group-item @click="getStarted" href="#" v-if="user.is_training_completed && user.is_up_to_date">Get Started
              <i class="icon-control-play float-right" style="font-size:18pt"></i>
            </b-list-group-item>
            <b-list-group-item @click="getStarted" href="#" v-else disabled>Get Started
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
    </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      callCenterExperts: [],
      stories: [{ description: "xyz" }, { description: "xyz" }]
    };
  },
  mounted() {},
  created: function() {
    this.getUserData();
    this.getCallExperts();
  },
  computed: {
    ...mapGetters("auth", {
      userId: "getUserId"
    }),
    ...mapGetters("phone", {
      user: "getUser",
      gateway: "getGateway"
    })
  },
  methods: {
    async getUserData() {
      //Grab user information
      this.$store
        .dispatch("phone/getUserDetails", {
          userId: this.userId,
          overwrite: true
        })
        .then(() => {
          this.getGatewayData();
        });
    },
    async getGatewayData() {
      //Get user's current gateway info
      if (this.user.gateway != null) {
        await this.$store
          .dispatch("phone/getGatewayDetails", this.user.gateway)
          .catch(err => {
            console.log(err);
          });
      } else {
        //TODO: add default gateway
        console.log("no gateway specified for user");
      }
    },
    getCallExperts() {
      //Grab the call expert ids/numbers
      this.$http
        .get(
          `${process.env
            .API_PHONE_ENDPOINT}/users?willing_to_be_call_center_support=true`
        )
        .then(r => {
          var callExperts = r.data.results;
          console.log(callExperts);
          if (callExperts != null && callExperts.length > 0) {
            callExperts.forEach(function(expert) {
              expert.number = expert.last_used_phone_number;
              expert.name = expert.name;
            });
            this.callCenterExperts = callExperts;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUpToDate() {
      this.$router.push({ path: "News" });
    },
    getTrained() {
      this.$router.push({ path: "Training" });
    },
    getStarted() {
      this.$store.commit("phone/seenWelcome");
      this.$router.push({ name: "Phone" });
    }
  }
};
</script>