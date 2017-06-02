<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topStory in topStories" :key="topStory.id">
        <img :src="attachImageUrl(topStory.image)" :alt="topStory.title">
        <span class="top-story-title">{{ topStory.title }}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        topStories: []
      }
    },
    methods: {
      // 修改图片链接
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      }
    },
    created () {
      // 获取最新新闻
      axios.get('api/news/latest')
        .then(res => {
          this.topStories = res.data.top_stories
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/components/Swipe.sass";
</style>
