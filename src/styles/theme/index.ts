import buttonTheme, { IButtonTheme } from './buttonTheme'
import color, { IColorTheme } from './colorTheme'

export interface ITheme {
  color: IColorTheme
  button: IButtonTheme
}

const theme: ITheme = {
  color,
  button: buttonTheme,
}

export default theme
