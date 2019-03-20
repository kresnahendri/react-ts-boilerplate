import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import articleService from '../../services/articleService'
import { fetchArticlesF, fetchArticlesR } from '../actions/articleActions'
import { FETCH_ARTICLES } from '../actionTypes'

export const fetchArticleEpic: Epic = (action$) =>
  action$.ofType(FETCH_ARTICLES).pipe(
    switchMap(() => articleService.get()),
    map((response) => fetchArticlesF(response)),
    catchError((error: any) => of(fetchArticlesR(error))),
  )
