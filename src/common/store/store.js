import { createStore } from 'redux'
import rootReducer from '../reducers/index.js'

const promise = (store) => {
  const next = store.dispatch
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(next)
    }
    return next(action)
  }
}

const store = createStore(rootReducer)
store.dispatch = promise(store)

export default store