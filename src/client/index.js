import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../common/components/App.js'
import store from '../common/store/store.js'

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>
, document.getElementById('app'))