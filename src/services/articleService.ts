import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { buildApiRequest } from '../libs/apiLib'

export interface IArticle {
  userId: number
  id: number
  title: string
  completed: boolean
}

const get = (): Observable<IArticle[]> => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  return buildApiRequest({ url, method: 'get' }).pipe(
    map((response) => response.data),
    catchError((error) => of(error)),
  )
}

export default {
  get,
}
