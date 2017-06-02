<template>
  <div class="index">
    <welcome></welcome>
    <mt-loadmore :top-method="loadTop" :topDistance="40" ref="loadmore">
      <header>
        <i class="icon iconfont icon-fenlei"></i>
        <span class="hot-news">今日热文</span>
      </header>
      <swipe></swipe>
    </mt-loadmore>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome'
  import Swipe from '../components/Swipe'
  export default {
    components: {
      'welcome': Welcome,
      'swipe': Swipe
    },
    methods: {
      loadTop () {
        this.$refs.loadmore.onTopLoaded()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/Index.sass";
</style>
