<template>
    <div>
    <b-card no-body>
      <div class="card-header text-center">Call Center Training
          <!-- TODO: Hide for admins only -->
          <button class="clear-button float-right" @click="toggleEditMode" invisible><i class="icon-settings"></i></button>
      </div>
      <b-list-group flush v-if="trainingModules.length > 0">
        <b-list-group-item v-for="trainingModule in trainingModules.filter(x => !x.isDeleted)" v-bind:key="trainingModule.id" @click="clickTrainingModule(trainingModule)" href="#">
          {{trainingModule.title}}
          <span v-if="!inEditMode"> 
            <i class="icon-check float-right" v-if="trainingModule.isCompleted" style="font-size:18pt"></i>
            <i class="icon-exclamation float-right" v-else style="font-size:18pt"></i>
          </span>
          <!--Show edit mode buttons-->
          <span v-else> 
              <button class="clear-button float-right" invisible><i class="icon-trash"></i></button>
          </span>
        </b-list-group-item>
      </b-list-group>
      <b-card-body>
        <div class="alert alert-info" role="alert" v-if="trainingModules.length == 0">
          No Training Available.
        </div>
        <div class="alert alert-success" role="alert" v-else-if="allTrainingModulesRead && !inEditMode">
          <strong>Congratulations! </strong>You've completed all available training. Come back any time for a refresher.
        </div>
        <button class="btn btn-success" @click="addTrainingModule" v-if="inEditMode"><i class="icon-plus"></i></button>
      </b-card-body>
      <div class="card-footer" >
        <button type="button" class="btn btn-primary" @click="save">Save</button>
      </div>
    </b-card>
    </div>
</template>

<style lang="scss">
// Import Main styles for this application
@import "./scss/crisiscleanup/_phone.scss";
</style>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      newtrainingModule: {
        title: null,
        description: null,
        isCompleted: false,
        isDeleted: false
      },
      inEditMode: false,
      trainingModules: [],
      originaltrainingModules: [],
      allTrainingModulesRead: false
    };
  },
  computed: {
    ...mapGetters('auth', {
      userId : 'getUserId'
    })
  },
  created: function() {
    this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      this.$store.dispatch("phone/getUserDetails", {
        userId: this.userId, overwrite: false
      })
      .then(r => {
        this.getUsertrainingModules();
      });    
    },
    getUsertrainingModules() {
      this.inEditMode = false;
      //Get all the global trainingModules
      this.trainingModules = [];
      var vm = this;
      this.$http
        .get(`${process.env.API_PHONE_ENDPOINT}/trainingModules`)
        .then(r => {
          this.trainingModules = r.data.results;
          //Mark all of the trainingModules which the user has read
          this.trainingModules.forEach(function(trainingModule) {
            var trainingModuleFound = vm.$store.state.phone.user.training_completed.find(
              function(completedTraining) {
                return completedTraining === trainingModule.id;
              }
            );
            vm.$set(
              trainingModule,
              "isCompleted",
              trainingModuleFound === undefined ? false : true
            );
            vm.$set(trainingModule, "isDeleted", false);
          });
        });
    },
    addTrainingModule(evt) {
      this.$router.push({ path: "training/create" });
    },
    deleteTrainingModule(trainingModule) {
      trainingModule.isDeleted = true;
    },
    toggleEditMode() {
      this.inEditMode = !this.inEditMode;
      if (this.inEditMode) {
        //Store original trainingModules in-case user cancels
        this.originaltrainingModules = JSON.parse(
          JSON.stringify(this.trainingModules)
        );
      } else {
        //Otherwise if they are toggleing out revert to originals
        //TODO: Warn user they will lose their changes
        this.trainingModules = this.originaltrainingModules;
      }
    },
    clickTrainingModule(module) {
      if (this.inEditMode) {
        this.deleteTrainingModule(module);
      } else {
        this.$router.push({ path: "training/view/" + module.id });
      }
    },
    save() {
      var vm = this;
      if (this.inEditMode) {
        //Delete trainingModules flagged for deletion
        var deletedtrainingModuleIds = this.trainingModules
          .filter(x => x.isDeleted)
          .map(x => x.id);
        if (deletedtrainingModuleIds.length > 0) {
          this.$http
            .post(
              `${process.env.API_PHONE_ENDPOINT}/trainingModules/bulk_delete`,
              deletedtrainingModuleIds
            )
            .then(r => {
              this.getUsertrainingModules();
            })
            .catch(err => {
              console.log(err);
            });
        }
      } else {
        this.$router.go(-1);
      }
    }
  },
  watch: {
    //Watch for changes in the trainingModules
    trainingModules: {
      handler(val) {
        this.allTrainingModulesRead = true;
        //Check if all trainingModules have been read
        this.trainingModules.forEach(function(trainingModule) {
          if (!trainingModule.isCompleted) {
            this.allTrainingModulesRead = false;
          }
        }, this);
      },
      deep: true
    }
  }
};
</script>