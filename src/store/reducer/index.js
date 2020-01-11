import {combineReducers} from 'redux'
import lesson from './lesson'
import searchReducer from "./search"
import recipeReducer from './recipe'
import circleReducer from './circle'
import question from './question'
const rootReducer = combineReducers({
  lesson,
  searchReducer,
  recipeReducer,
  circleReducer,
  question
})
export default rootReducer