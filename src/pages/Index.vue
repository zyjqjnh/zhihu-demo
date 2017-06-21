<template>
  <div class="index">
    <welcome></welcome>
    <sidebar :isShowSidebar="isShowSidebar" @hideSidebar="toggleSidebar"></sidebar>
    <mt-loadmore :top-method="loadTop" :topDistance="40" ref="loadmore">
      <header>
        <i class="icon iconfont icon-fenlei" @click="toggleSidebar"></i>
        <span class="hot-news">今日热文</span>
      </header>
      <swipe></swipe>
      <news-list ref="newsList"></news-list>
    </mt-loadmore>
  </div>
</template>

<script>
  import Welcome from '../components/Welcome'
  import Sidebar from '../components/Sidebar'
  import Swipe from '../components/Swipe'
  import NewsList from '../components/NewsList'
  export default {
    data () {
      return {
        isShowSidebar: false
      }
    },
    created () {
      this.isShowSidebar = false
    },
    components: {
      'welcome': Welcome,
      'swipe': Swipe,
      'sidebar': Sidebar,
      'newsList': NewsList
    },
    methods: {
      // 切换侧边栏显示状态
      toggleSidebar () {
        this.isShowSidebar = !this.isShowSidebar
      },
      loadTop () {
        this.$refs.newsList.$emit('refresh')
        this.$refs.loadmore.onTopLoaded()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/pages/Index.sass";
</style>
