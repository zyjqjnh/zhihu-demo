<template>
  <div class="write-comment">
    <div class="header">
      <i class="icon iconfont icon-back" @click="backToComment"></i>
      <span class="header-text">写点评</span>
      <span class="header-release" @click="release">发布</span>
    </div>
    <div class="warning-text">
      不友善言论会被删除，深度讨论会被优先展示
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      backToComment () {
        this.$router.back(-1)
      },
      release () {
        alert('发布')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/WriteComment.sass";
</style>
