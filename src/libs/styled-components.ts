import * as styledComponents from 'styled-components'

import { ITheme } from '../styles/theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
