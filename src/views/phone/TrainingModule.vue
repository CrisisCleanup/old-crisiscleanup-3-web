<template>
    <div>
      <div class="card">
        
        <div class="card-header text-center">
          {{title}}
        </div>
            <div class="card-body" >
              <p class="card-text">
                <div v-if="videoUrl != null && videoUrl != ''">
                  <youtube :video-id="getVideoId()"></youtube>
                </div>
                {{description}}
                <button type="button" class="btn btn-primary" @click="save">Save</button>
              </p>
          </div>
        </div>
      </div>
</template>

<script>
  import Vue from 'vue';
  import VueYouTubeEmbed from 'vue-youtube-embed'
  import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

  Vue.use(VueYouTubeEmbed)

  export default {
      data() {
        return {
          id: this.$route.params.id,
          title: null,
          videoUrl: null,
          description: null,
          questions: []
      }
    },
    created: function() {
      this.getTrainingModule()
    },
    methods: {
      getTrainingModule(){
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/trainingModules/` + this.id + `/get_detail`).then(r => {
            this.title = r.data.title
            this.videoUrl = r.data.video_url
            this.description = r.data.description
            this.questions = r.data.questions
        });
      },
      getVideoId() {
        return this.$youtube.getIdFromURL(this.videoUrl)
      },
      save(){
        this.$router.go(-1);
      }
    }
  }
</script>