import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { Epic } from 'redux-observable'
import { mapTo } from 'rxjs/operators'
import { FETCH_ARTICLES, FETCH_ARTICLES_F, FETCH_ARTICLES_R } from '../../store/actionTypes'

export const showLoadingBarEpic: Epic = (action$) =>
  action$.ofType(FETCH_ARTICLES).pipe(
    mapTo(showLoading()),
  )

export const hideLoadingBarEpic: Epic = (action$) =>
  action$.ofType(
    FETCH_ARTICLES_F,
    FETCH_ARTICLES_R,
  ).pipe(
    mapTo(hideLoading()),
  )
