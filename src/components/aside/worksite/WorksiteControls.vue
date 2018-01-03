<template>
  <div >
    <div class="row">
      <div class="col">
        <div class="mx-auto" role="group">
          <button id="newSiteBtn" @click="enterNewSite" class="btn btn-primary">New</button>
          <button type="button" @click="saveForm" id="save-btn-top" class="btn btn-secondary">Save</button>
          <!--<b-btn id="printBtn" v-b-modal.modal1>Print</b-btn>-->
          <button id="claim-btn" @click="fireClaimBtn" class="btn btn-secondary"
                  v-show="isCurrentSiteClaimedByUserOrg || !isCurrentSiteClaimed"
                  v-text="isCurrentSiteClaimed ? 'Claim' : 'Unclaim'"></button>
          <button id="historyBtn" class="btn btn-secondary">History</button>
          <!--<button @click="contactOrg" class="btn btn-secondary">Contact</button>-->
        </div>
      </div>
      <PrintWorksite />
    </div>
  </div>
</template>
<script>
  import PrintWorksite from './PrintWorksite';
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        status: "Open, unassigned"
      }
    },
    components: {
      PrintWorksite
    },
    computed: {
      ...mapGetters(['isCurrentSiteClaimed', 'isCurrentSiteClaimedByUserOrg'])
    },
    methods: {
      enterNewSite() {
        this.$store.commit('setActiveWorksiteView', {view: 'editWorksite'});
        this.$store.commit('resetCurrentSiteData');
        this.$store.commit('setSiteFormErrors', {})
      },
      saveForm() {
        this.$store.dispatch('saveSite');
      },
      contactOrg() {
        console.log("Contact org");
      },
      firePrintBtn() {
        console.log("Print")
      },
      fireEditBtn() {
        console.log("Load Form")
      },
      fireHistoryBtn() {
        console.log("Load History")
      },
      fireClaimBtn() {
        this.$store.dispatch('claimSite');
        // TODO: Update marker (emit/on or vuex computed prop)
//        this.marker.setIcon(generateMarkerImagePath(this.claimedBy, this.status, this.workType));
      },
      statusChanged(event) {
        const patchedSite = {
          status: this.status
        };
        this.$http.patch(`/worksites/${this.siteId}`, patchedSite).then(resp => {
          const data = resp.data;
          this.claimedBy = data.claimedBy;
          this.status = data.status;
          this.marker.setIcon(generateMarkerImagePath(this.claimedBy, this.status, this.workType));
        });

      }
    }
  }
</script>
