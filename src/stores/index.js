import { createStore } from 'redux'
import reducers from '../reducers'

export function createReduxStore(initialState = {}) {
  const store = createStore(reducers, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}