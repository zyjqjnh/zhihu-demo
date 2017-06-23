export default {
  stories: [], // 新闻数组
  ids: [], // 新闻内容数组
  id: '', // 当前新闻详情的id
  nextId: '', // 下一篇新闻的id
  isFirstLoad: true,
  comments: 0, // 评论总数
  long_comments: 0, // 长评论总数
  short_comments: 0, // 短评论总数
  popularity: 0, // 点赞总数
  currentThemeId: -1, // 当前主题id
  newsType: -1 // 新闻内容类型 0 普通新闻， 1 主题新闻, 2 收藏新闻
}
