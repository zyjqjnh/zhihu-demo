import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import NewsDetail from '../pages/NewsDetail'

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
    }
  ]
})
