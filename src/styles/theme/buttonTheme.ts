import color from './colorTheme'

interface IButtonColorType {
  main: string
  hover: string
  active: string
  disabled: string
  text: string
}
interface IButtonColor {
  primary: IButtonColorType
  outline: IButtonColorType
  nude: IButtonColorType
}
export interface IButtonTheme {
  color: IButtonColor
}

const buttonTheme: IButtonTheme = {
  color: {
    primary: {
      main: color.kiwi01,
      hover: color.kiwi02,
      active: color.kiwi03,
      disabled: color.cloud01,
      text: color.white,
    },
    outline: {
      main: color.kiwi01,
      hover: color.kiwi02,
      active: color.kiwi03,
      disabled: color.cloud01,
      text: color.white,
    },
    nude: {
      main: color.kiwi01,
      hover: color.kiwi02,
      active: color.kiwi03,
      disabled: color.cloud01,
      text: color.white,
    },
  },
}

export default buttonTheme
