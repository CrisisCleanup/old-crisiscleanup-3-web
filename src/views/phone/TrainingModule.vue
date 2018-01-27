<template>
    <div>
      <div class="card">
        <div class="card-header text-center">
          {{title}}
        </div>
            <div class="card-body" >
              <p class="card-text">
                <div v-if="videoUrl != null" align="middle">
                  <youtube :video-id="getVideoId()"></youtube>
                </div>
                {{description}}
                <!-- Questions -->
                <br>
                <ol>
                  <b>
                  <li v-for="question in questions" v-bind:key="question.id">
                    {{question.question}}
                    <br>
                    <b-form-group>
                      <b-form-radio-group id="question.id"
                                          buttons
                                          v-model="question.userChoice"
                                          :options="options"/>
                    </b-form-group>
                    <font v-bind:style="{color: question.isValid ? 'green' : 'red'}" >{{question.validatedText}}</font>
                  </li>
                  </b>
                </ol>
                <div class="alert alert-danger" role="alert" v-if="showSubmitError">
                  Please answer all questions correctly.
                </div>
              </p>
          </div>
          <div class="card-footer" >
            <button type="button" class="btn btn-primary" @click="submit">Submit</button>
          </div>
        </div>
      </div>
</template>

<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";

Vue.use(VueYouTubeEmbed);

export default {
  data() {
    return {
      id: this.$route.params.id,
      title: null,
      videoUrl: null,
      description: null,
      questions: [],
      quizAlert: null,
      options: [{ text: "True", value: true }, { text: "False", value: false }],
      showSubmitError: false
    };
  },
  created: function() {
    this.getTrainingModule();
  },
  methods: {
    getTrainingModule() {
      this.$http
        .get(
          `${process.env.API_PHONE_ENDPOINT}/trainingModules/` +
            this.id +
            `/get_detail`
        )
        .then(r => {
          var vm = this;
          this.title = r.data.title;
          this.videoUrl = r.data.video_url;
          this.description = r.data.description;
          this.questions = r.data.questions;
          this.questions.forEach(function(question) {
            vm.$set(question, "userChoice", null);
            vm.$set(question, "isValid", false);
            vm.$set(question, "validatedText", null);
          }, this);
        });
    },
    getVideoId() {
      return this.$youtube.getIdFromURL(this.videoUrl);
    },
    validateAllAnswers(markEmpty) {
      //Validate all questions
      var allValid = true;
      var validateAnswer = this.validateAnswer;
      this.questions.forEach(function(question) {
        question.isValid = validateAnswer(question, markEmpty) || false;
        allValid = allValid && question.isValid;
      });
      return allValid;
    },
    validateAnswer(question, markEmpty) {
      if (question.userChoice == null && markEmpty) {
        question.validatedText = "Please answer the question.";
        return false;
      } else if (question.userChoice != null) {
        if (question.userChoice == question.answer) {
          question.validatedText = "Correct!";
          return true;
        } else {
          question.validatedText = "Opps! Try Again.";
          return false;
        }
      }
    },
    submit() {
      var vm = this;
      if (this.validateAllAnswers(true)) {
        //Mark the training as completed
        this.$http
          .post(
            `${process.env.API_PHONE_ENDPOINT}/users/` +
              vm.$store.state.phone.user.id +
              `/set_completed_training`,
            JSON.stringify(vm.id),
            {
              headers: { "content-type": "application/json" }
            }
          )
          .then(r => {
            var user = JSON.parse(JSON.stringify(this.$store.state.phone.user));
            user.training_completed.push(this.id);
            this.$store.commit("phone/setUser", user);
            this.$router.go(-1);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.showSubmitError = true;
      }
    }
  },
  watch: {
    //Watch for changes in the articles
    questions: {
      handler(val) {
        this.validateAllAnswers();
        this.showSubmitError = false;
      },
      deep: true
    }
  }
};
</script>