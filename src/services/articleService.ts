import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { IArticleResponse } from '../interfaces/IApi'
import { IArticle } from '../interfaces/ICommon'
import { buildApiRequest } from '../libs/apiLib'

const get = (): Observable<IArticle[]> => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  return buildApiRequest({ url, method: 'get' }).pipe(
    map((response: IArticleResponse) => response.data),
    catchError((error) => of(error)),
  )
}

export default {
  get,
}
