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
                      <td style="width:20%"><img height="40" :src="expert.badge"></td>
                      <td style="width:40%">{{ expert.name }}</td>
                      <td style="width:40%">{{ expert.number }}</td>
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
          callCenterExperts: [
            { id: 1, badge: '../../static/img/badges/gold-medal.png',  name: 'Julie Super Caller', number: '(111) 111-1111'},
            { id: 2, badge: '../../static/img/badges/silver-medal.png',  name: 'Frank Cellmaster', number: '(222) 222-2222'},
            { id: 3, badge: '../../static/img/badges/heart.png',  name: 'Wille Wireless', number: '(333) 333-3333'},
            { id: 4, badge: '../../static/img/badges/medal-2.png',  name: 'Phonelapy Smith', number: '(444) 444-4444'}
          ],
          stories: [
            { description: "xyz"},
            { description: "xyz"}
          ]
      }
    },
    created: function() {
      this.getUserData();
      this.getCallExperts();
    },
    methods: {
      getUserData(){
        //Grab the user id from the login info
        var userId = this.$store.state.worker.currentUserId;

        //Grab the user information if available
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/users/` + userId + `/get_detail`).then(r => {
          this.user = r.data;
          console.log(this.user);
          this.$store.commit('phone/setUser', this.user);
        }).catch(err => {
            var userInfo = {
              id: userId,
              willing_to_receive_calls: true,
            };
            //Incase the user data not available add them to api
            this.$http.post(`${process.env.API_PHONE_ENDPOINT}/users`, userInfo).then(r => {
              this.user = r.data;
              this.$store.commit('phone/setUser', this.user);
            }).catch(err => {
              console.log(err)
            });
          });
      },
      getCallExperts(){
        //Grab the call expert ids/numbers
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/users?willing_to_be_call_hero=true`).then(r => {
          var callExperts = r.data.results;
          console.log(callExperts);
          if(callExperts != null && callExperts.length > 0) {
            //Go and get their names TODO: Come up with a more efficient way of doing this
            callExperts.forEach(function(expert) {
              expert.number = expert.last_used_phone_number
              expert.name = "Dummy name"
              //TODO: Why is this missing the bearer token?
              // Vue.axios.get(`/users/` + expert.id).then(r => {
              //   expert.name = r.data.name;
              // }).catch(err => {
              //   console.log(err)
              // });
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