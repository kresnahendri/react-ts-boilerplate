import { Epic } from 'redux-observable'
import { concat, of, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'
import articleService from '../../services/articleService'
import { fetchArticlesF, fetchArticlesR } from '../actions/articleActions'
import { FETCH_ARTICLES } from '../actionTypes'

export const fetchArticlesEpic: Epic = (action$) =>
  action$.ofType(FETCH_ARTICLES).pipe(
    switchMap(() => concat(articleService.get(), articleService.get(), articleService.get()).pipe(
      switchMap((response) => (response === undefined)
        ? throwError({ message: 'There something error' })
        : of(fetchArticlesF(response))),
      catchError((error: any) => of(fetchArticlesR(error))),
    )),
  )
