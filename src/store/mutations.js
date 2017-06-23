import * as types from './mutation-types'
export default {
  [types.ADD_NEWS] (state, payload) {
    state.stories = state.stories.concat(payload.stories)
    state.ids = state.ids.concat(payload.ids)
  },

  [types.CHANGE_LOAD_STATE] (state) {
    state.isFirstLoad = !state.isFirstLoad
  },

  [types.REFRESH_NEWS] (state) {
    state.stories = []
  },

  [types.CHANGE_CURRENT_NEWS_ID] (state, id) {
    state.id = id
    let index = state.ids.indexOf(id)
    state.nextId = state.ids[++index]
  },

  [types.CHANGE_NEWS_TYPE] (state, type) {
    state.newsType = type
  },

  [types.CHANGE_CURRENT_THEME_ID] (state, id) {
    state.currentThemeId = id
  }
}
