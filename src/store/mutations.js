import * as types from './mutation-types'
export default {
  [types.ADD_NEWS] (state, payload) {
    state.stories = state.stories.concat(payload.stories)
    state.ids = state.ids.concat(payload.stories)
  },

  [types.REFRESH_NEWS] (state) {
    state.stories = []
  }
}
