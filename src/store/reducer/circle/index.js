import stateInit from '../../state/circle/index'

export default function(state=stateInit,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type==="SWIPER_PIC"){
    state.swiperArr = payload.swiperArr
  }else if(type==="MENU_LIST"){
    state.menuList = payload.menuList
  }else if(type==="USER_INFO"){
    state.userInfo = payload.userInfo;
  }else if(type==="GET_MASTER_NEW"){
    state.masterArr = payload.masterArr
  }
  else if(type==="GET_ACTIVITY"){
    state.activity = payload.activity
}else if(type==="GET_CLIENT_COMPONENT"){
    state.activityClient = payload.activityClient
} else if(type==="GET_DISH"){
  state.dish = payload.dish
}
  return state
}