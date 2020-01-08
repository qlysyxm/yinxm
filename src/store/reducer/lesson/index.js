import initState from '../../state/lesson'
export default function lessonReduce(state=initState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type === "CHANGE_RAND_CONTENT"){
    state.randContent = payload.randContent;
}else if(type === "CHANGE_TAB_NUM"){
  state.tabNum = payload.tabNum;
}else if(type === "CHANGE_HOME_NAV"){
  const linkArr = ["/baike","/university","/lesson","/classify"]
  for (let i=0;i<payload.homeNav.length;i++) {
    payload.homeNav[i].link = linkArr[i]
  }
  state.homeNav = payload.homeNav;
}else if(type === "CHANGE_LESSON_LIST"){
  state.lessonList = payload.lessonList;
}else if(type === "CHANGE_LESSON_NAV"){
  state.lessonNav = payload.lessonNav
}else if(type === "CHANGE_CLASS_LIST"){
  state.classList = payload.classList;
}else if(type === "CHANGE_SWIPER_LIST"){
  state.swiperList = payload.swiperList;
}else if(type === "CHANGE_LESSON_LIST"){
  state.lessonList = payload.lessonList;
}
  return state
}