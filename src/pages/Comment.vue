<template>
  <div class="comment">
    <div class="head">{{ this.$store.state.comments }}条评论</div>
    <long-comment></long-comment>
    <short-comment></short-comment>
    <div class="foot">
      <i class="icon iconfont icon-back" @click="backToDetail"></i>
      <i class="icon iconfont icon-bianxie" @click="writeComment">写评论</i>
    </div>
  </div>
</template>

<script>
  import LongComment from '../components/LongComment'
  import ShortComment from '../components/ShortComment'
  export default {
    components: {
      LongComment,
      ShortComment
    },
    methods: {
      backToDetail () {
        this.$router.back(-1)
      },
      writeComment () {
        this.$router.push({ name: 'writeComment', params: {id: this.$store.state.id} })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/Comment.sass";
</style>
