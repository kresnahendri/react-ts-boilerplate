import { IReduxAction } from '../../interfaces/ICommon'
import { HIDE_TOAST, SHOW_TOAST } from '../actionTypes'
import { IToastState } from './'

const initialState: IToastState = {
  show: false,
  text: '',
  variant: 'error',
}

export default (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        show: true,
        text: action.payload.text,
        variant: action.payload.variant,
      }

    case HIDE_TOAST:
      return {
        ...state,
        show: false,
      }

    default:
      return state
  }
}
