<template>
  <div class="editors-list">
    <header>
      <i class="icon iconfont icon-back" @click="back"></i>
      <span class="text">主编</span>
    </header>
    <ul class="list" ref="editorList">
      <li class="item" v-for="item in data" :key="item.id" @click="viewEditorProfile(item.id, item.name)">
        <div class="wrap">
          <img v-lazy.editorList="attachImageUrl(item.avatar)" alt="">
          <span class="name">{{ item.name }}</span>
          <span class="bio">{{ item.bio }}</span>
          <i class="icon iconfont icon-more"></i>
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
        data: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('api/theme/' + this.$route.params.id)
          .then(response => {
            this.data = response.data.editors
          })
          .catch(error => {
            console.log(error)
          })
      },
      back () {
        this.$router.back(-1)
      },
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      viewEditorProfile (id, name) {
        this.$router.push({ name: 'editor', params: { 'editorId': id, 'editorName': name } })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/EditorsList.sass";
</style>
