import { combineReducers } from 'redux'
import { IArticle } from '../../interfaces/ICommon'
import articleReducers from './articleReducers'
import toastReducers from './toastReducers'

const reducers = combineReducers({
  article: articleReducers,
  toast: toastReducers,
})

export default reducers

export interface IArticleState {
  isLoading: boolean
  articles: IArticle[]
}
export interface IToastState {
  show: boolean
  text: string
  variant: 'success' | 'warning' | 'info' | 'error'
}
