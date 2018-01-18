<template>
    <div>
      <div class="card">
        <div class="card-header text-center">Latest Crisis Cleanup News 
          <!-- TODO: Hide for admins only -->
          <button class="float-right" @click="toggleEditMode"><i class="icon-settings"></i></button>
        </div>
            <div class="card-body" >
              <p class="card-text">
                <div v-if="articles.length > 0">
                  <div v-for="article in articles.filter(x => !x.isDeleted)" v-bind:key="article.id">
                      <input type="checkbox" v-model="article.isRead"  v-if="!inEditMode"> 
                      <b>{{article.title}}</b>
                      <!--Show edit mode buttons-->
                      <span class="inline-block btn-group" v-if="inEditMode"> 
                          <button class="btn btn-primary" @click="article.isDeleted = true"><i class="icon-trash"></i></button>
                      </span>
                      <div>{{article.description}}</div>        
                      <br>
                  </div>
                  </div>
                  <div v-else>
                    No news
                  </div>
                  <button class="btn btn-success" v-b-modal.articleModal v-if="inEditMode"><i class="icon-plus"></i></button>
                  <br><br>
                  <div class="alert alert-success" role="alert" v-if="allArticlesRead && !inEditMode">
                    <strong>Congratulations! </strong>You're up to date with the latest news.
                  </div>
                  <button type="button" class="btn btn-primary" @click="save">Save</button>
              </p>
          </div>
        </div>

      <!-- Add article modal -->
      <b-modal id="articleModal" title="New Article" centered @ok="articleModalOk" ref="modal" hide-footer>
        <b-form @submit.stop.prevent="addArticle">
        <b-form-input type="text"
                      placeholder="Title"
                      required
                      v-model="newArticle.title"></b-form-input>
        <br>
        <b-form-textarea placeholder="Description"
                      required
                      v-model="newArticle.description"
                      :rows="3"></b-form-textarea>
          <br>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>

      </b-modal>

      </div>
</template>
<script>
  export default {
      data() {
        return {
          newArticle : {title:null, description:null, isRead: false, isDeleted: false},
          inEditMode: false,
          articles: [],
          originalArticles: [],
          allArticlesRead: false
      }
    },
    created: function() {
      this.getUserArticles();
    },
    methods: {
      getUserArticles(){
        //Get all the global articles
        this.articles = [];
        var vm = this;
        this.$http.get(`${process.env.API_PHONE_ENDPOINT}/articles`).then(r => {
            this.articles = r.data.results;
            //Mark all of the articles which the user has read
            this.articles.forEach(function(article) {
              var articleFound = vm.$store.state.phone.user.read_articles.find(function(readArticle) {
                return readArticle === article.id;
              });
              vm.$set(article, 'isRead', articleFound === undefined ? false : true);
              vm.$set(article, 'isDeleted', false);
            });
            console.log(this.articles);
        });
      },
      articleModalOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        //this.$refs.form1.submit()
        this.addArticle(evt)
      },
      addArticle(evt){
        console.log(evt)
        evt.preventDefault()
        //alert(JSON.stringify(this.form))
        this.articles.push(Object.assign({}, this.newArticle));
        //Clear new article
        this.newArticle.title = null;
        this.newArticle.description = null;
        this.$refs.modal.hide()
      },
      toggleEditMode(){
        this.inEditMode = !this.inEditMode
        if(this.inEditMode) {
          //Store original articles in-case user cancels
          this.originalArticles = JSON.parse(JSON.stringify(this.articles))
        } else {
          //Otherwise if they are toggleing out revert to originals
          //TODO: Warn user they will lose their changes
          this.articles = this.originalArticles;
        }
      },
      save(){
        var vm = this;
        if(this.inEditMode) {
          //TODO: Save changes and retrieve new articles
          this.inEditMode = false;
        } else {
          //Update the user's read article list
          var read_article_ids = this.articles.filter(article => article.isRead).map(article => article.id);
          this.$http.post(`${process.env.API_PHONE_ENDPOINT}/users/` + vm.$store.state.phone.user.id + `/set_read_articles`, read_article_ids).then(r => {
            this.$router.go(-1);
          }).catch(err => {
            console.log(err)
          });
        }
      }
    },
    watch: {
      //Watch for changes in the articles 
      'articles': {
        handler(val){
          this.allArticlesRead = true;
          //Check if all articles have been read
          this.articles.forEach(function(article) {
            if(!article.isRead) {
              this.allArticlesRead = false;
            }
          }, this);
        },
        deep: true
      }
    }
  }
</script>