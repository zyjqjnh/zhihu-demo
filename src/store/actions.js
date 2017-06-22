import * as types from './mutation-types'
export default {
  // 新增新闻内容
  addNews: ({ commit }, payload) => {
    commit(types.ADD_NEWS, payload)
  },

  changeLoadState: ({ commit }) => {
    commit(types.CHANGE_LOAD_STATE)
  },

  refreshNews: ({ commit }) => {
    commit(types.REFRESH_NEWS)
  },

  changeCurrentNewsId: ({ commit }, id) => {
    commit(types.CHANGE_CURRENT_NEWS_ID, id)
  },

  changeNewsType: ({ commit }, type) => {
    commit(types.CHANGE_NEWS_TYPE, type)
  }
}
