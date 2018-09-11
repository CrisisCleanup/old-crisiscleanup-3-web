<template>
<div id="ccu-worksite-controls">
  <div class="row">
    <div class="col">
      <div class="mx-auto" role="group">
        <button id="ccu-new-site-button" @click="enterNewSite" class="btn btn-primary">{{ $t('actions.new') }}</button>
        <button type="button" v-show="getWorksiteViews && getWorksiteViews.editWorksite" @click="saveForm" id="ccu-save-btn" class="btn btn-secondary">{{ $t('actions.save') }}</button>
        <!--<b-btn id="printBtn" v-b-modal.modal1>Print</b-btn>-->
        <button id="ccu-claim-btn" @click="fireClaimBtn" class="btn btn-secondary" v-show="isCurrentSiteClaimedByUserOrg || !isCurrentSiteClaimed" v-text="!isCurrentSiteClaimed || isCurrentSiteClaimed === null ? $t('actions.claim') : $t('actions.unclaim')"></button>
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
      if (this.$notify) {
        this.$notify({
          type: 'warn',
          group: 'core',
          title: this.$t('notify.new_worksite_form'),
          text: '',
          width: 500,
          animation: 'Velocity',
          speed: 1000,
          duration: 3000
        });
      }
    },
    saveForm() {
      if (this.$notify) {
        this.$notify({
          group: 'core',
          title: this.$t('notify.saving'),
          //text: '',
          width: 500,
          duration: 250
        });
      }
      this.$store.dispatch('saveSite').then((result) => {
        setTimeout(() => {
          this.$notify({
            type: 'success',
            group: 'core',
            title: this.$t('notify.success'),
            text: this.$t('notify.case_saved'),
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
        }, 1000);
      }, (error) => {
        setTimeout(() => {
          this.$notify({
            type: 'error',
            group: 'core',
            title: this.$t('notify.wait'),
            text: this.$t('notify.need_more_info'),
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
        }, 1000);

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
        this.$notify({
            type: 'warn',
            group: 'core',
            title: `${this.$t('notify.unclaimed')} ${this.$store.state.worker.siteData.case_number}.`,
            text: '',
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
      } else {
        this.$store.dispatch('claimSite');
          this.$notify({
            type: 'warn',
            group: 'core',
            title: `${this.$t('notify.claimed')} ${this.$store.state.worker.siteData.case_number}.`,
            text: '',
            width: 500,
            animation: 'Velocity',
            speed: 1000,
            duration: 3000
          });
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
