<template>
  <div class="theme-detail">
    <header>
      <img v-lazy="attachImageUrl(data.image)" alt="">
      <i class="icon iconfont icon-back" @click="backIndex"></i>
      <span class="title">{{ data.name }}</span>
      <i class="icon iconfont" :class="[isFocus ? 'icon-jian' : 'icon-jia']" @click="toggleThemeFocus"></i>
    </header>
    <div class="editors">
      <span class="text">主编</span>
      <img v-for="item in data.editors" v-lazy="attachImageUrl(item.avatar)" alt="">
      <i class="icon iconfont icon-more"></i>
    </div>
    <ul class="list" ref="list">
      <li class="list-item" v-for="story in data.stories" :key="story.id" @click="viewDetail(story.id)">
        <span class="item-title">{{ story.title }}</span>
        <div class="image-wrapper" v-if="story.images !== undefined">
          <img class="item-image" v-lazy.list="attachImageUrl(story.images[0])" :alt="story.title">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        id: '',
        data: {},
        isFocus: true
      }
    },
    created () {
      this.id = this.$route.params.id
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('api/theme/' + this.id)
          .then(response => {
            this.data = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      backIndex () {
        this.$router.push({ name: 'index' })
      },
      toggleThemeFocus () {
        this.isFocus = !this.isFocus
      },
      viewDetail (id) {
        this.$store.dispatch('changeCurrentNewsId', id)
        this.$store.dispatch('changeNewsType', 1)
        this.$router.push({ name: 'newsDetail', params: {id: id} })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/ThemeDetail.sass";
</style>
