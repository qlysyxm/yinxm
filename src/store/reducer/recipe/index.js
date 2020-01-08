import stateInit from '../../state/recipe'

const recipeReducer = function(state=stateInit,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type==="GET_BAIKE_LIST"){
    state.baike = payload.baike
  }
  return state
}
export default recipeReducer