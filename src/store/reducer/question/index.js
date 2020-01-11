import initState from '../../state/question'
export default function questionReducer(state=initState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type === "CHANGE_NEW_LIST"){
    state.newQuestionList = payload.newQuestionList;
  }else if(type === "CHANGE_HOT_LIST"){
    state.hotQuestionList = payload.hotQuestionList;
  }else if(type === "CHANGE_ESSENCE_LIST"){
    state.essenceList = payload.essenceList;
  }else if(type === "CHANGE_QUESTION_INFO"){
    state.questionInfo = payload.questionInfo;
}else if(type === "CHANGE_ANSWER_INFO"){
    state.answerInfo = payload.answerInfo;
}else if(type === "CHANGE_ANWSER_CONTENT"){
  state.answerContent = payload.answerContent;
}else if(type === "CHANGE_COMMONT_LIST"){
  state.answerCommont = payload.answerCommont;
}
  return state
}