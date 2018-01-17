<template>
    <div>
     <h2> Latest Important News </h2>
     <div v-if="articles.length > 0">
       <div v-for="article in articles" v-bind:key="article.id">
            <input type="checkbox" v-model="article.isRead"> <b>{{article.title}}</b>
            <div>{{article.description}}</div>        
        </div>
    </div>
    <br>
    <div v-if="allArticlesRead">    
      Congratulations! You're up to date with the latest news.
    </div>
    <br>
    <button type="button" class="btn-block btn-primary" @click="goBack">Submit</button>
    </div>
</template>
<script>
  export default {
      data() {
        return {
          articles: [],
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
              var articleFound = vm.$store.state.phone.caller.read_articles.find(function(readArticle) {
                return readArticle.id === article.id;
              });
              vm.$set(article, 'isRead', articleFound === undefined ? false : true);
            });
            console.log(this.articles);
        });
      },
      goBack(){
        //Update the user's read article list
        var vm = this;
        var read_article_ids = this.articles.filter(article => article.isRead).map(article => article.id);
        this.$http.post(`${process.env.API_PHONE_ENDPOINT}/users/` + vm.$store.state.phone.caller.id + `/set_read_articles`, read_article_ids).then(r => {
          this.$router.go(-1);
        }).catch(err => {
          console.log(err)
        });
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