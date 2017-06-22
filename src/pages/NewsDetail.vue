<template>
  <div class="news-detail">
    <div class="top-wrapper" v-if="this.$store.state.newsType === 0">
      <img v-lazy="attachImageUrl(data.image)" alt="data.title">
      <span class="top-title">{{ data.title }}</span>
      <span class="image-source">图片: {{ data.image_source }}</span>
    </div>
    <div class="body-wrap" v-html="data.body"></div>
    <news-menu @reloadId="fetchData"></news-menu>
  </div>
</template>

<script>
  import axios from 'axios'
  import NewsMenu from '../components/NewsMenu.vue'
  export default {
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.fetchData()
    },
    components: {
      NewsMenu
    },
    methods: {
      fetchData () {
        let id = this.$route.params.id
        axios.get('api/news/' + id)
          .then(response => {
            response.data.body = this.attachBodyContent(response.data.body)
            this.data = response.data
            document.documentElement.scrollTop = document.body.scrollTop = 0
          })
          .catch(error => {
            console.log(error)
          })

        this.$store.dispatch('changeCurrentNewsId', id)
      },
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      attachBodyContent (body) {
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/NewsDetail.sass";
  @import "/static/css/news_qa.auto.css";
</style>
