import { IArticle } from '../../interfaces/ICommon'
import { CLEAR_ARTICLES, FETCH_ARTICLES, FETCH_ARTICLES_F, FETCH_ARTICLES_R } from '../actionTypes'

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
})

export const fetchArticlesF = (response: IArticle[]) => ({
  type: FETCH_ARTICLES_F,
  payload: response,
})

export const fetchArticlesR = (error: any) => ({
  type: FETCH_ARTICLES_R,
  payload: error,
})

export const clearArticles = () => ({
  type: CLEAR_ARTICLES,
})
