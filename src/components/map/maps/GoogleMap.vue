<template>
  <div class="fullsize-map">
    <div id="floating-panel">
      <button class="btn-primary" @click="toggleHeatmap()">{{ $t('workerCCUMap.toggle_heatmap') }}</button>
      <!--<button @click="changeGradient()">{{ $t('workerCCUMap.change_gradient') }}</button>-->
      <!--<button @click="changeRadius()">{{ $t('workerCCUMap.change_radius') }}</button>-->
      <!--<button @click="changeOpacity()">{{ $t('workerCCUMap.change_opacity') }}</button>-->
    </div>
    <gmap-map
      id="worker-map"
      :center="center"
      :zoom="zoomLevel"
      :options="options"
      style="width: 100%; height: 100%;"
      @click="mapIsClicked"
      @zoom_changed="setZoomLevel($event)"
      @dragstart="setDragging(true)"
      @dragend="setDragging(false)"
      ref="map"
      @center_changed="mapCenterChanged"
    >
    </gmap-map>
  </div>
</template>

<script>

  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import MarkerClusterer from 'marker-clusterer-plus';
  import {loaded} from 'vue2-google-maps'
  import { mapMutations } from 'vuex';
  import CCUMapEventHub from '@/events/CCUMapEventHub';
  import generateMarkerImagePath from '../utils/markerImageManager';
  import {style as mapStyle} from '../styles/snowOrange';

  export default {
    data() {
      return {
        options: {
          scrollwheel: false,
          styles: mapStyle,
          fullscreenControl: false
        },
        heatmap: null,
        points: [],
        $markerCluster: null,
        trackingMapCenter: {},
      }
    },

    mounted() {

      loaded.then(() => {
          CCUMapEventHub.$on('site-search', (e) => {
            const currentSite = this.$store.getters.getCurrentSiteData;
            this.addMarker(currentSite);
            this.centerOnSiteWithZoom();
          });

      });

    },
  }
</script>

<style>
  #floating-panel {
    position: absolute;
    /*top: px;*/
    /*left: 50%;*/
    z-index: 5;
    /*background-color: #fff;*/
    padding: 5px;
    /*border: 1px solid #999;*/
    text-align: center;
    font-family: 'Roboto', 'sans-serif';
    line-height: 30px;
    padding-left: 10px;
    width: 10%;
    right: 0;
    margin: auto
  }

  .fullsize-map {
    height: 100%;
    width: 100%;
  }
</style>
