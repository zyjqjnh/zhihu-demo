<template>
  <div class="news-menu">
    <ul class="menu-wrap">
      <li class="menu-item" @click="goBack">
        <i class="icon iconfont icon-back"></i>
      </li>
      <li class="menu-item" @click="goNext">
        <i class="icon iconfont icon-moreunfold"></i>
      </li>
      <li class="menu-item" @click="thumbUp" :class="{'dianzan-active': isDianzan}">
        <i class="icon iconfont icon-dianzan"></i>
        <span class="dianzan-number">{{ this.$store.state.popularity }}</span>
      </li>
      <li class="menu-item">
        <i class="icon iconfont icon-fenxiang"></i>
      </li>
      <li class="menu-item">
        <i class="icon iconfont icon-pinglun"></i>
        <span class="comments-number">{{ this.$store.state.comments }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        isDianzan: false
      }
    },
    watch: {
      '$route': 'reloadId'
    },
    created () {
      this.fetchStoryExtra()
    },
    methods: {
      fetchStoryExtra () {
        axios.get('api/story-extra/' + this.$store.state.id)
          .then(response => {
            this.$store.state.long_comments = response.data.long_comments
            this.$store.state.popularity = response.data.popularity
            this.$store.state.short_comments = response.data.short_comments
            this.$store.state.comments = response.data.comments
          })
          .catch(error => {
            console.log(error)
          })
      },
      goBack () {
        let type = this.$store.state.newsType
        if (type === 0) {
          this.$router.push({name: 'index'})
        }
      },
      goNext () {
        this.$router.push({name: 'newsDetail', params: {id: this.$store.state.nextId}})
      },
      thumbUp () {
        if (!this.isDianzan) {
          this.$store.state.popularity ++
        } else {
          this.$store.state.popularity --
        }
        this.isDianzan = !this.isDianzan
      },
      reloadId () {
        this.$emit('reloadId')
        this.fetchStoryExtra()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/components/NewsMenu.sass";
</style>
