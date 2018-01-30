<template>
  <div >
    <div class="row">
      <div class="col">
        <div class="mx-auto" role="group">
          <button id="newSiteBtn" @click="enterNewSite" class="btn btn-primary">{{ $t('actions.new') }}</button>
          <button id="searchFilterBtn" @click="fireSearchFilterBtn" class="btn btn-secondary">{{ $t('actions.save') }}</button>
          <!--<b-btn id="printBtn" v-b-modal.modal1>{{ $t('actions.print') }}</b-btn>-->
           <button id="claim-btn" @click="fireClaimBtn" class="btn btn-secondary"
                  v-show="isCurrentSiteClaimedByUserOrg || !isSiteClaimed"
                  v-text="isSiteClaimed ? $t('actions.claim') : $t('actions.unclaim')"></button>
          <button id="historyBtn" class="btn btn-secondary">{{ $t('actions.history') }}</button>
          <!--<button @click="contactOrg" class="btn btn-secondary">{{ $t('actions.contact') }}</button>-->
        </div>
      </div>
      <PrintWorksite />
    </div>
  </div>
</template>
<script>
  import PrintWorksite from './PrintWorksite';
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
      isSiteClaimed() {
        return this.$store.getters.isCurrentSiteClaimed;
      },
      isCurrentSiteClaimedByUserOrg() {
        return this.$store.getters.isCurrentSiteClaimedByUserOrg;
      }
    },
    methods: {
      enterNewSite() {
        this.$store.commit('setActiveWorksiteView', {view: 'editWorksite'});
        this.$store.commit('resetCurrentSiteData');
        this.$store.commit('setSiteFormErrors', {})
      },
      fireSearchFilterBtn() {
        this.$store.commit('setActiveWorksiteView', {view: 'searchFilter'})
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
