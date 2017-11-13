<template>
    <div>
       <h1>Welcome to the Call Center</h1>
       <table style="width:20%">
        <tr style="width:20%">
          <td><input type="checkbox" id="isTrained" value="" v-model="isTrained" disabled readonly></td>
          <td><label for="isTrained">Get Trained</label></td>
          <td><button type="button"><i class="fa fa-book"/></button></td>
        </tr>
        <tr style="width:60%">
          <td><input type="checkbox" id="isUpToDate" value="" v-model="isUpToDate" disabled readonly></td>
          <td><label for="isUpToDate">Get Up To Date</label></td>
          <td><button type="button"><i class="fa fa-question"/></button></td>
        </tr>
        <tr style="width:20%">
          <td></td>
          <td>Get Started</td>
          <td><button type="button"><i class="fa fa-play"/></button></td>
        </tr>
        </table>
      <br>

      <div class="col-lg-4 col-md-6">
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
          ]
      }
    }
  }
</script>
