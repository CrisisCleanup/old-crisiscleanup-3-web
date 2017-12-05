<template>
    <div>
       <h1>Welcome to the Call Center</h1>
    <div class="row">

       <!-- ******************** Check-list ********************* -->
    <div class="col-md-6">
            <div class="col-md-4">
            <button type="button" class="btn-block btn-primary"><input align="left" type="checkbox" id="isTrained" value="" v-model="isTrained" disabled readonly>Get Trained </button>
            <button type="button" class="btn-block btn-primary"><input type="checkbox" id="isUpToDate" value="" v-model="isUpToDate" disabled readonly>Get Up To Date</button>
            <button type="button" class="btn-block btn-primary">Get Started</button>
          </div>   
      </div>
      <!-- ******************** Call center experts ********************* --> 

      <div class="col-lg-6"  align="right">
          <div class="card">
            <div class="card-header text-center">Ask a Call Center Expert</div>
            <div class="card-body" >
              <p class="card-text">
              <table style="width:100%">
                <tr v-for="expert in callCenterExperts">
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
        <br>Sling Link
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
  export default {
      data() {
        return {
          isTrained: true,
          isUpToDate: false,
          callCenterExperts: [
            { badge: '../static/img/badges/gold-medal.png',  name: 'Julie Super Caller', number: '(111) 111-1111'},
            { badge: '../static/img/badges/silver-medal.png',  name: 'Frank Cellmaster', number: '(222) 222-2222'},
            { badge: '../static/img/badges/heart.png',  name: 'Wille Wireless', number: '(333) 333-3333'},
            { badge: '../static/img/badges/medal-2.png',  name: 'Phonelapy Smith', number: '(444) 444-4444'}
          ],
          stories: [
            { description: "xyz"},
            { description: "xyz"}
          ]
      }
    }
  }
</script>