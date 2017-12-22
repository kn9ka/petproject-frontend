import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createReduxStore } from './stores'
import { AppContainer } from 'react-hot-loader'
import Main from './client'

const store = createReduxStore({})
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Main)

if (module.hot) {
  module.hot.accept('./client', () => render(Main))
}