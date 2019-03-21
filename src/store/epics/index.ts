import { combineEpics } from 'redux-observable'
import { fetchArticlesEpic } from './articleEpics'
import { hideLoadingBarEpic, showLoadingBarEpic } from './loadingBarEpics'
import { hideToastEpic, showToastEpic, triggerToastEpic } from './toastEpics'

export default combineEpics(
  fetchArticlesEpic,
  hideToastEpic,
  showToastEpic,
  triggerToastEpic,
  showLoadingBarEpic,
  hideLoadingBarEpic,
)
