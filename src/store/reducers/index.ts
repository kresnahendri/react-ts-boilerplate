import { combineReducers } from 'redux'
import { IArticle } from '../../interfaces/ICommon'
import articleReducers from './articleReducers'

export interface IArticleState {
  isLoading: boolean
  articles: IArticle[]
}

const reducers = combineReducers({
  article: articleReducers,
})

export default reducers
