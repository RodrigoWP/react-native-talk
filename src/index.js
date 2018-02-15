import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './app'
import reducers from './redux-flow/reducers'

const Root = () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)

export default Root
