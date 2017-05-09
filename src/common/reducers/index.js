import { combineReducers } from 'redux'
import { commentReducer } from './comment.js'

export default combineReducers({
  comments: commentReducer
})