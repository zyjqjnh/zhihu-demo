import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import NewsDetail from '../pages/NewsDetail'
import Common from '../pages/Comment'
import WriteComment from '../pages/WriteComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: Common
    },
    {
      path: '/writeComment/:id',
      name: 'writeComment',
      component: WriteComment
    }
  ]
})
