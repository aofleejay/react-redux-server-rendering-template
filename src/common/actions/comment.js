import axios from 'axios'
import { GET_COMMENTS_SUCCESS } from '../constants/actiontypes.js'

const getComments = () => (
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => ({ type: GET_COMMENTS_SUCCESS, comments: response.data }))
)

export {
  getComments
}