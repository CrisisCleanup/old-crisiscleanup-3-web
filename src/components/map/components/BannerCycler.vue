<template>
  <h3 id="realtime-map-banner" v-bind:class="[currentBannerClass, 'realtime-map-banner', 'slider']" v-html="bannerText"></h3>
</template>
<script>

  export default {
    props: [],
    data() {
      return {
        bannerText: "",
        currentBannerClass: {}
      }
    },
    computed: {
      textCycle() {
        return [
          {
            wait: 2000,
            delay: 4000,
            text: `${this.$t('bannerCycler.msg1')}`,
            bannerClass: "realtime-map-banner-topright"
          },
          {
            wait: 8000,
            delay: 10000,
            text: `${this.$t('bannerCycler.msg2')}`,
            bannerClass: "realtime-map-banner-bottomleft"
          },
          {
            wait: 20000,
            delay: 5000,
            text: `${this.$t('bannerCycler.msg3')}`,
            bannerClass: "realtime-map-banner-topright"
          },
          {
            wait: 28000,
            delay: 5000,
            text: `${this.$t('bannerCycler.msg4')}`,
            bannerClass: "realtime-map-banner-bottomleft"
          },
          {
            wait: 36000,
            delay: 5000,
            text: `${this.$t('bannerCycler.msg5')}`,
            bannerClass: "realtime-map-banner-topright"
          }
        ]
      }
    },
    mounted() {
      this.textCycle.forEach((cycle, i) => {
        setTimeout(() => {
          $("#realtime-map-banner").fadeIn('fast').delay(cycle.delay).fadeOut('slow');
          this.currentBannerClass = cycle.bannerClass;
          this.bannerText = cycle.text;
        }, cycle.wait);
      });
    }
  }
</script>
<style>
  .realtime-map-banner {
    background-color: #333;
    padding: 10px;
    display:inline;
    text-align:center;
    position: absolute;
    font-family: 'Roboto', 'sans-serif';
    margin: auto;
    z-index: 5;
    color: #FFCC44;

  }

  .realtime-map-banner-topright {
    top: 100px;
    left: 65%;
    right: 10px;
  }

  .realtime-map-banner-bottomleft {
    bottom: 150px;
    right: 65%;
    left: 10%;
  }

</style>