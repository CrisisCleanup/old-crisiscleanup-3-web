<template>
<div>
  <div class="row">
    <div class="col">
      <div class="mx-auto" role="group">
        <button id="newSiteBtn" @click="enterNewSite" class="btn btn-primary">{{ $t('actions.new') }}</button>
        <button type="button" v-show="getWorksiteViews && getWorksiteViews.editWorksite" @click="saveForm" id="save-btn-top" class="btn btn-secondary">{{ $t('actions.save') }}</button>
        <!--<b-btn id="printBtn" v-b-modal.modal1>Print</b-btn>-->
        <button id="claim-btn" @click="fireClaimBtn" class="btn btn-secondary" v-show="isCurrentSiteClaimedByUserOrg || !isCurrentSiteClaimed" v-text="!isCurrentSiteClaimed || isCurrentSiteClaimed === null ? $t('actions.claim') : $t('actions.unclaim')"></button>
        <!--<button id="historyBtn" v-show="getWorksiteViews && getWorksiteViews.editWorksite" class="btn btn-secondary">{{ $t('actions.history') }}</button>-->
        <!--<button @click="contactOrg" class="btn btn-secondary">Contact</button>-->
      </div>
    </div>
    <PrintWorksite />
  </div>
</div>
</template>


<script>
import PrintWorksite from './PrintWorksite';
import {
  mapGetters
} from 'vuex';
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
    ...mapGetters(['isCurrentSiteClaimed', 'isCurrentSiteClaimedByUserOrg', 'getWorksiteViews'])
  },
  methods: {
    enterNewSite() {
      this.$store.commit('setActiveWorksiteView', {
        view: 'editWorksite'
      });
      this.$store.commit('resetCurrentSiteData');
      this.$store.commit('setSiteFormErrors', {})
    },
    saveForm() {
      this.$notify({
        group: 'foo',
        title: 'Saving...',
        //text: '',
        position: 'top left',
        width: 500
      });
      this.$store.dispatch('saveSite').then((result) => {
          this.$notify({
            type: 'notification.success',
            group: 'foo',
            title: 'Success!',
            text: 'Worksite saved.',
            position: 'bottom center',
            width: 500
          });
      }, (error) => {
          this.$notify({
            type: 'notification.success',
            group: 'foo',
            title: 'Error!',
            text: '',
            position: 'bottom center',
            width: 500
          });

      });
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
      if (this.isCurrentSiteClaimed) {
        this.$store.dispatch('unclaimSite');
      } else {
        this.$store.dispatch('claimSite');
      }
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
