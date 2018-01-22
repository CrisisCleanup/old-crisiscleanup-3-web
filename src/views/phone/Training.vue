<template>
    <div>
      <div class="card">
        <div class="card-header text-center">Call Center Training
          <!-- TODO: Hide for admins only -->
          <button class="clear-button float-right" @click="toggleEditMode" invisible><i class="icon-settings"></i></button>
        </div>
            <div class="card-body" >
              <p class="card-text">
                <div v-if="trainingModules.length > 0" >
                  <div v-for="trainingModule in trainingModules.filter(x => !x.isDeleted)" v-bind:key="trainingModule.id" class="row">
                     <div class="col-md-1"> 
                       <div v-if="!inEditMode"> 
                          <i class="icon-check float-left" v-if="trainingModule.isCompleted" style="font-size:18pt"></i>
                          <i class="icon-exclamation float-left" v-else style="font-size:18pt"></i>
                        </div>
                        <!--Show edit mode buttons-->
                        <span class="inline-block btn-group" v-else> 
                            <button class="btn btn-sm btn-danger" @click="deletetrainingModule(trainingModule)"><i class="icon-trash"></i></button>
                        </span>
                     </div> 
                     <div class="col-md-11">                      
                      <button type="button" class="btn btn-link" @click="getTrainingModule(trainingModule)">{{trainingModule.title}}</button>
                      <br><br>
                      </div>
                  </div>
                  <div class="alert alert-success" role="alert" v-if="alltrainingModulesRead && !inEditMode">
                    <strong>Congratulations! </strong>You've completed all available training. Come back any time for a refresher.
                  </div>
                </div>
                <div v-else>
                  <div class="alert alert-info" role="alert" v-if="alltrainingModulesRead">
                  No Training Available.
                </div>
                  </div>
                  <button class="btn btn-success" v-b-modal.trainingModuleModal v-if="inEditMode"><i class="icon-plus"></i></button>
                  <br><br>
                  <button type="button" class="btn btn-primary" @click="save">Save</button>
              </p>
          </div>
        </div>

      <!-- Add trainingModule modal -->
      <b-modal id="trainingModuleModal" title="New trainingModule" centered @ok="trainingModuleModalOk" ref="modal" hide-footer>
        <b-form @submit.stop.prevent="addtrainingModule">
        <b-form-input type="text"
                      placeholder="Title"
                      required
                      v-model="newtrainingModule.title"></b-form-input>
        <br>
        <b-form-textarea placeholder="Description"
                      required
                      v-model="newtrainingModule.description"
                      :rows="3"></b-form-textarea>
          <br>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>

      </b-modal>

      </div>
</template>

<style lang="scss">
  // Import Main styles for this application
  @import "./scss/crisiscleanup/_phone.scss";
</style>

<script>
  export default {
      data() {
        return {
          newtrainingModule : {title:null, description:null, isCompleted: false, isDeleted: false},
          inEditMode: false,
          trainingModules: [],
          originaltrainingModules: [],
          alltrainingModulesRead: false
      }
    },
    created: function() {
      this.$store.dispatch('phone/getUser', {userId: this.$store.state.worker.currentUserId, overwrite: false}).then(r => {
        this.getUsertrainingModules();
      });
    },
    methods: {
      getUsertrainingModules(){
        this.inEditMode = false
        //Get all the global trainingModules
        this.trainingModules = [];
        var vm = this;
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/trainingModules`).then(r => {
            this.trainingModules = r.data.results;
            //Mark all of the trainingModules which the user has read
            this.trainingModules.forEach(function(trainingModule) {
              var trainingModuleFound = vm.$store.state.phone.user.completed_training.find(function(completedTraining) {
                return completedTraining === trainingModule.id;
              });
              vm.$set(trainingModule, 'isCompleted', trainingModuleFound === undefined ? false : true);
              vm.$set(trainingModule, 'isDeleted', false);
            });
            console.log(this.trainingModules);
        });
      },
      // trainingModuleModalOk (evt) {
      //   // Prevent modal from closing
      //   evt.preventDefault()
      //   //this.$refs.form1.submit()
      //   this.addtrainingModule(evt)
      // },
      // addtrainingModule(evt){
      //   console.log(evt)
      //   evt.preventDefault()
      //   //alert(JSON.stringify(this.form))
      //   this.trainingModules.push(Object.assign({}, this.newtrainingModule));
      //   //Clear new trainingModule
      //   this.newtrainingModule.title = null;
      //   this.newtrainingModule.description = null;
      //   this.$refs.modal.hide()
      // },
      // deletetrainingModule(trainingModule){
      //   //If this is an item they created, just remove it 
      //   if(trainingModule.id == null) {
      //     this.trainingModules.splice(this.trainingModules.indexOf(trainingModule),1);
      //   } else {
      //     //Otherwise mark it for deletion
      //     trainingModule.isDeleted = true
      //   }
      // },
      // toggleEditMode(){
      //   this.inEditMode = !this.inEditMode
      //   if(this.inEditMode) {
      //     //Store original trainingModules in-case user cancels
      //     this.originaltrainingModules = JSON.parse(JSON.stringify(this.trainingModules))
      //   } else {
      //     //Otherwise if they are toggleing out revert to originals
      //     //TODO: Warn user they will lose their changes
      //     this.trainingModules = this.originaltrainingModules;
      //   }
      // },
      getTrainingModule(module){
        this.$router.push({ path: 'Training/' + module.id});
      },
      save(){
        // var vm = this;
        // if(this.inEditMode) {
        //   //TODO: Make more efficient by removing create call if not needed
        //   //Add new trainingModules missing ids
        //   var newTrainingModules = this.trainingModules.filter(x => x.id == null)
        //   this.$http.post(`${process.env.API_PHONE_ENDPOINT}/trainingModules`, newTrainingModules).then(r => {
        //     //Delete trainingModules flagged for deletion
        //     var deletedtrainingModuleIds = this.trainingModules.filter(x => x.isDeleted).map(x => x.id)
        //     if(deletedtrainingModuleIds.length > 0) {
        //       this.$http.post(`${process.env.API_PHONE_ENDPOINT}/trainingModules/bulk_delete`, deletedtrainingModuleIds).then(r => {
        //         this.getUsertrainingModules()
        //       }).catch(err => {
        //         console.log(err)
        //       });
        //     } else {
        //       this.getUsertrainingModules()
        //     }
        //   }).catch(err => {
        //     console.log(err)
        //   });
        // } else {
        //   //Update the user's read trainingModule list
        //   var read_trainingModule_ids = this.trainingModules.filter(trainingModule => trainingModule.isCompleted).map(trainingModule => trainingModule.id);
        //   this.$http.post(`${process.env.API_PHONE_ENDPOINT}/users/` + vm.$store.state.phone.user.id + `/set_completed_training`, read_trainingModule_ids).then(r => {
        //     this.$router.go(-1);
        //   }).catch(err => {
        //     console.log(err)
        //   });
        // }
      }
    },
    watch: {
      //Watch for changes in the trainingModules 
      // 'trainingModules': {
      //   handler(val){
      //     this.alltrainingModulesRead = true;
      //     //Check if all trainingModules have been read
      //     this.trainingModules.forEach(function(trainingModule) {
      //       if(!trainingModule.isCompleted) {
      //         this.alltrainingModulesRead = false;
      //       }
      //     }, this);
      //   },
      //   deep: true
      // }
    }
  }
</script>