import { IReduxAction } from '../../interfaces/ICommon'
import { CLEAR_ARTICLES, FETCH_ARTICLES, FETCH_ARTICLES_F, FETCH_ARTICLES_R } from '../actionTypes'
import { IArticleState } from './'

const initialState: IArticleState = {
  isLoading: false,
  articles: [],
}

export default (state = initialState, action: IReduxAction): IArticleState => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        isLoading: true,
      }

    case FETCH_ARTICLES_F:
      return {
        ...state,
        articles: action.payload,
        isLoading: false,
      }

    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: [],
      }

    case FETCH_ARTICLES_R:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
