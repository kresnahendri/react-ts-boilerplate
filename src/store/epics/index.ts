import { combineEpics } from 'redux-observable'
import { fetchArticleEpic } from './articleEpics'

export default combineEpics(
  fetchArticleEpic,
)
