<template>
  <div class="news-list">
    <ul class="list" ref="newsList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" infinite-scroll-distance="10">
      <li class="list-item" v-for="story in this.$store.state.stories" :key="story.id">
        <span class="item-title">{{story.title}}</span>
        <div class="image-wrapper">
          <img class="item-image" v-lazy.newsList="attachImageUrl(story.images[0])" :alt="story.title">
          <i class="icon iconfont icon-duotu multipic" v-if="story.multipic">多图</i>
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
        loading: false,
        date: Date,
        dateStr: '' // 加载数据日期字符串格式
      }
    },
    created () {
      if (this.$store.state.isFirstLoad) {
        this.fetchData()
      }

      this.initDate()

      this.$on('refresh', () => {
        this.refreshData()
      })
    },
    methods: {
      fetchData () {
        axios.get('api/news/latest')
          .then(response => {
            let stories = response.data.stories
            let ids = stories.map(story => story.id)
            this.$store.dispatch('addNews', {
              stories,
              ids
            })
          })
      },
      attachImageUrl (srcUrl) {
        if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
      },
      initDate () {
        this.date = new Date()
        this.changeDate2String()
      },
      changeDate2String () {
        let year = this.date.getFullYear()
        let month = this.date.getMonth() + 1
        let day = this.date.getDate()
        month = month < 10 ? '0' + month : month // 格式化月份，小于10前置0
        day = day < 10 ? '0' + day : day // 格式化日期，小于10前置0;

        this.dateStr = year + month + day
      },
      decreaseDate () {
        this.date.setDate(this.date.getDate() - 1)
        this.changeDate2String()
      },
      refreshData () {
        this.$store.dispatch('refreshNews')
        this.$nextTick(function () {
          this.fetchData()
        })
      },
      fetchMoreData () {
        axios.get('api/news/before/' + this.dateStr)
          .then(response => {
            let stories = response.data.stories
            let ids = stories.map(story => story.id)

            this.$store.dispatch('addNews', {
              stories: stories,
              ids: ids
            })
            this.$indicator.close()
          })
          .catch(error => {
            console.log(error)
          })

        this.decreaseDate()
      },
      loadMore () {
        this.loading = true
        this.$indicator.open({
          spinnerType: 'fading-circle'
        })

        this.$nextTick(function () {
          this.fetchMoreData()
        })

        this.loading = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/components/NewsList.sass";
</style>
