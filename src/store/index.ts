import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import epics from './epics'
import reducers from './reducers'

const epicMiddleware = createEpicMiddleware()
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  )
  epicMiddleware.run(epics)
  return store
}

export default configureStore()

declare global {
  // tslint:disable-next-line: interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
