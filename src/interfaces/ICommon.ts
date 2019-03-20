export interface IReduxAction {
  type: string,
  payload: any
}
export interface IArticle {
  userId: number
  id: number
  title: string
  completed: boolean
}
