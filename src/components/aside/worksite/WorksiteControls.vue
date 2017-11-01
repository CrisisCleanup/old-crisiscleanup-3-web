<template>
  <div style="background-color: white; z-index: 100; border-bottom: 3px solid gray">
    <div class="row">
      <div class="col">
        <div class="btn-group mx-auto" role="group" aria-label="Basic example">
          <button @click="enterNewSite" class="btn btn-primary">New</button>
          <button @click="firePrintBtn" class="btn btn-secondary">Print</button>
          <button class="btn btn-secondary">History</button>
          <button id="claim-btn" @click="fireClaimBtn" class="btn btn-secondary"
                  v-show="isCurrentSiteClaimedByUserOrg || !isSiteClaimed"
                  v-text="isSiteClaimed ? 'Unclaim' : 'Claim'"></button>
          <button @click="contactOrg" class="btn btn-secondary">Contact</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: "Open, unassigned"
      }
    },
    computed: {
      isSiteClaimed() {
        return this.$store.getters.isCurrentSiteClaimed;
      },
      isCurrentSiteClaimedByUserOrg() {
        return this.$store.getters.isCurrentSiteClaimedByUserOrg;
      }
    },
    methods: {
      enterNewSite() {
        this.$store.commit('setCurrentSiteData', {});
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
        this.$http.patch(`${process.env.API_ENDPOINT}/api/worksites/${this.siteId}/`, patchedSite).then(resp => {
          const data = resp.body;
          this.claimedBy = data.claimedBy;
          this.status = data.status;
          this.marker.setIcon(generateMarkerImagePath(this.claimedBy, this.status, this.workType));
        });

      }
    }
  }
</script>
