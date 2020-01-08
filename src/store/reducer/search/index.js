const searchReducer = function(state=[],{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type==="GET_HOT_TYPE"){
    state=payload.popularSearch
   }
   return state
}

export default searchReducer