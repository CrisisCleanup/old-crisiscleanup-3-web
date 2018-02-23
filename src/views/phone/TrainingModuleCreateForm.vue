<template>
    <div>
      <div class="card">
        <div class="card-header text-center">
          New Training Module
        </div>
          <div class="card-body" >
            <p class="card-text">
              <b-form @submit.stop.prevent="save">
              <b-form-group
                id="title"
                label="Title"
                label-for="title">
                <b-form-input v-model.trim="title" required></b-form-input>
              </b-form-group>
              <b-form-group
                id="url"
                label="Youtube Video Link"
                description="Provide the link to embed a Youtube video, and verify that the video displays properly below."
                label-for="url">
                <b-form-input type="url" v-model.trim="videoUrl"></b-form-input>
              </b-form-group>
              <div v-if="videoUrl != null" align="middle">
                <youtube :video-id="videoId"></youtube>
              </div>
              <b-form-group
                id="description"
                label="Description"
                label-for="description">
                <b-form-textarea v-model="description" :rows="3"></b-form-textarea>          
              </b-form-group>
              <b-card no-body>
                <div class="card-header text-center">Questions </div>
                  <b-list-group>
                    <b-list-group-item v-for="question in questions" v-bind:key="question.index">
                      <button class="clear-button float-right" @click="deleteQuestion(question)" v-if="question.index != 1" invisible><i class="icon-trash"></i></button>
                      <b-form-group
                        id="question"
                        label="Question"
                        label-for="question">
                        <b-form-input v-model.trim="question.question" required></b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <label>Answer</label><br>
                        <b-form-radio-group id="question.index"
                                            buttons
                                            label="Answer"
                                            v-model="question.answer"
                                            :options="options" required/>
                      </b-form-group>
                    </b-list-group-item>
                  </b-list-group>
                  <b-card-body>
                    <b-button class="btn btn-success" @click.prevent="addQuestion"><i class="icon-plus"></i></b-button>
                  </b-card-body>
                </b-card>
              <b-button type="submit" variant="primary">Save</b-button>
            </b-form>
            </p>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
// Import Main styles for this application
@import "./scss/crisiscleanup/_phone.scss";
</style>

<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";

Vue.use(VueYouTubeEmbed);

export default {
  data() {
    return {
      title: null,
      videoUrl: null,
      description: null,
      questions: [],
      options: [{ text: "True", value: true }, { text: "False", value: false }]
    };
  },
  created: function() {
    this.questions.push({
      index: 1,
      question: null,
      answer: null
    });
  },
  computed: {
    videoId() {
      try {
        return this.$youtube.getIdFromURL(this.videoUrl);
      } catch (err) {
        return null;
      }
    },
    videoUrlState() {
      //Check to see if we can get a video id
      if (this.videoUrl == null) {
        return null;
      }
      console.log(this.videoId);
      return this.videoId ? true : false;
    },
    invalidVideoUrlFeedback() {
      if (!this.videoUrlState) {
        return "Please provide a valid Youtube video link";
      }
      return "";
    }
  },
  methods: {
    addQuestion() {
      this.questions.push({
        index: this.questions.length + 1,
        question: null,
        answer: null
      });
    },
    deleteQuestion(question) {
      this.questions.splice(this.questions.indexOf(question), 1);
    },
    save(evt) {
      evt.preventDefault();
      //TODO: Make more efficient by refactoring into single call
      //Add new articles missing ids
      var newModule = {
        title: this.title,
        description: this.description,
        video_url: this.videoUrl
      };
      this.$http
        .post(`${process.env.API_PHONE_ENDPOINT}/trainingModules`, newModule)
        .then(r => {
          //Bulk post all questions
          this.questions.forEach(function(question) {
            question.module = r.data.id;
          }, this);
          this.$http
            .post(
              `${process.env.API_PHONE_ENDPOINT}/trainingQuestions`,
              this.questions
            )
            .then(r => {
              this.$router.go(-1);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>