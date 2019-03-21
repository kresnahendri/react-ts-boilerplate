import { combineEpics } from 'redux-observable'
import { fetchArticlesEpic } from './articleEpics'
import { hideToastEpic, showToastEpic, triggerToastEpic } from './toastEpics'

export default combineEpics(
  fetchArticlesEpic,
  hideToastEpic,
  showToastEpic,
  triggerToastEpic,
)
