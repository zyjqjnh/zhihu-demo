<template>
  <div class="wrap" :class="[isShowSidebar ? 'show' : '']">
    <div class="sidebar">
      <div class="top">
        <img src="../assets/images/avatar.png" alt="" class="avatar">
        <span class="name">Like</span>
      </div>
      <div class="menubar">
        <div>
          <i class="icon iconfont icon-shoucang"></i><br>
          <span>收藏</span>
        </div>
        <div>
          <i class="icon iconfont icon-xiaoxi"></i><br>
          <span>消息</span>
        </div>
        <div>
          <i class="icon iconfont icon-shezhi"></i><br>
          <span>设置</span>
        </div>
      </div>
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="item in data" @click="themeDetail(item.id)">
            <i class="icon iconfont icon-shouyeshouye" v-if="item.id === -1"></i>
            {{ item.name }}
            <i class="icon iconfont icon-more"></i>
          </li>
        </ul>
      </div>
      <div class="foot-menu">
        <i class="icon iconfont icon-lixianwenjian">&nbsp;&nbsp;离线</i>
        <i class="icon iconfont icon-yejianmoshi">&nbsp;&nbsp;夜间</i>
      </div>
    </div>
    <div class="mask" @click="hideSidebar"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        data: []
      }
    },
    props: {
      isShowSidebar: {
        type: Boolean
      }
    },
    methods: {
      hideSidebar () {
        this.$emit('hideSidebar')
      },
      fetchData () {
        axios.get('api/themes')
          .then(response => {
            this.data = response.data.others

            this.data.unshift({
              color: 0,
              thumbnail: '',
              description: '首页',
              id: -1,
              name: '首页'
            })

            this.$nextTick(() => {
              this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
              })
            })
          })
          .catch(error => {
            console.log(error)
          })
      },
      themeDetail (id) {
        if (id === -1) {
          this.hideSidebar()
        } else {
          this.$store.dispatch('changeCurrentThemeId', id)
          this.$router.push({ name: 'themeDetail', params: {id: id} })
        }
      }
    },
    created () {
      this.fetchData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/components/Sidebar.sass";
  @import "/static/css/news_qa.auto.css";
</style>
