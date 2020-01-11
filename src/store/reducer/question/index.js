import initState from '../../state/question'
export default function questionReducer(state=initState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type === "CHANGE_NEW_LIST"){
    state.newQuestionList = payload.newQuestionList;
  }
  return state
}