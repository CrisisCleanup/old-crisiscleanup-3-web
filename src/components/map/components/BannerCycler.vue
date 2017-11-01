<template>
  <h3 id="realtime-map-banner" v-bind:class="[currentBannerClass, 'realtime-map-banner', 'slider']" v-html="bannerText"></h3>
</template>
<script>

  export default {
    props: [],
    data() {
      return {
        textCycle: [
          {
            wait: 2000,
            delay: 4000,
            text: "Who's on the ground <b style=\"color: white;\">right now</b> helping in <b style=\"color: white;\">your</b> community?",
            bannerClass: "realtime-map-banner-topright"
          },
          {
            wait: 8000,
            delay: 10000,
            text: "Since <b style=\"color: white;\">2011</b>, <b style=\"color: white;\">Crisis Cleanup</b> has helped over <b style=\"color: white;\">1,200</b> organizations help <b style=\"color: white;\">43,686</b> homes and businesses cleanup and recover after natural disasters.",
            bannerClass: "realtime-map-banner-bottomleft"
          },
          {
            wait: 20000,
            delay: 5000,
            text: "How can <b style=\"color: white;\">you</b> help in <b style=\"color: white;\">your</b> community?",
            bannerClass: "realtime-map-banner-topright"
          },
          {
            wait: 28000,
            delay: 5000,
            text: "Be a part of the <b style=\"color: white;\">cleanup</b>, be a part of <b style=\"color: white;\">your</b> community. Join <b style=\"color: white;\">Crisis Cleanup</b> today.",
            bannerClass: "realtime-map-banner-bottomleft"
          },
        ],
        bannerText: "",
        currentBannerClass: {}
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
