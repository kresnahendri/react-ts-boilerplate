import 'bootstrap-4-grid/css/grid.css'
import 'normalize.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'unstated'
import Routers from './routers'
import GlobalStyle from './styles/css/global'
import theme from './styles/theme'

const App = () => (
  <Provider>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
