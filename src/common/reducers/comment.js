import { GET_COMMENTS_SUCCESS } from '../constants/actiontypes.js'

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return action.comments
    default:
      return state
  }
}

export {
  commentReducer
}