<template>
  <div class="editor">
    <header>
      <i class="icon iconfont icon-back" @click="back"></i>
      <div class="text">{{ this.$route.params.editorName }}</div>
      <div class="box"></div>
    </header>
    <div class="html-content" v-html="data"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        data: ''
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('api/editor/' + this.$route.params.editorId + '/profile-page/ios')
          .then(response => {
            response.data = this.attachBodyContent(response.data)
            this.data = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      back () {
        this.$router.back(-1)
      },
      attachBodyContent (body) {
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/Editor.sass";
</style>
