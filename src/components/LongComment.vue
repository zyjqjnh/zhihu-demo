<template>
  <div class="long-comment">
    <div class="box"></div>
    <div class="long-comment-number" v-show="comments.length !== 0">{{ this.$store.state.long_comments }}条长评</div>
    <ul class="comment-list" ref="longCommentList">
      <i class="icon iconfont icon-shafa" v-if="this.$store.state.comments === 0"></i>
      <li class="comment-item" v-for="comment in comments">
        <img v-lazy.longCommentList="attachImageUrl(comment.avatar)" :alt="comment.author" class="avatar">
        <div class="comment-content">
          <span class="author">{{ comment.author }}</span>
          <i class="icon iconfont icon-dianzan">{{ comment.likes }}</i>
          <p class="text">{{ comment.content }}</p>
          <template v-if="comment.reply_to !== undefined">
            <p class="reply">
              <span class="reply-author">//{{ comment.reply_to.author }}:</span>
              {{ comment.reply_to.content }}
            </p>
          </template>
          <span class="date">{{ changeTime(comment.time) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data () {
      return {
        comments: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('api/story/' + this.$store.state.id + '/long-comments')
          .then(response => {
            this.comments = response.data.comments
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
      changeTime (time) {
        return moment(time).format('MM-DD HH:mm')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../assets/sass/components/LongComment.sass";
</style>
