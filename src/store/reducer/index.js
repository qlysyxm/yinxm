import {combineReducers} from 'redux'
import lesson from './lesson'
import searchReducer from "./search"
import recipeReducer from './recipe'
const rootReducer = combineReducers({
  lesson,
  searchReducer,
  recipeReducer
})
export default rootReducer