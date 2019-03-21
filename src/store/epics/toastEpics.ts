import { Epic } from 'redux-observable'
import { debounceTime, map, mapTo } from 'rxjs/operators'
import { hideToast, showToast } from '../actions/toastActions'
import { CLEAR_ARTICLES, FETCH_ARTICLES_F, SHOW_TOAST } from '../actionTypes'

const triggerActions = [FETCH_ARTICLES_F, CLEAR_ARTICLES]
export const triggerToastEpic: Epic = (action$) =>
  action$.ofType(...triggerActions).pipe(
    map(({ type }) => {
      if (type === FETCH_ARTICLES_F) { return { text: 'Article fetched Article fetched Article fetched Article fetched', variant: 'success' } }
      if (type === CLEAR_ARTICLES) { return { text: 'Article cleared', variant: 'info' } }
      return { text: 'There is something error', variant: 'error' }
    }),
    debounceTime(100),
    map(({ text, variant }) => showToast(text, variant)),
  )

export const showToastEpic: Epic = (action$) =>
  action$.ofType(SHOW_TOAST).pipe(
    debounceTime(2000),
    mapTo(hideToast()),
  )

export const hideToastEpic: Epic = (action$) =>
  action$.ofType(...triggerActions).pipe(
    mapTo(hideToast()),
  )
