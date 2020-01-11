import stateInit from '../../state/recipe'

const recipeReducer = function(state=stateInit,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  //百科
  if(type==="GET_BAIKE_LIST"){
    state.baike = payload.baike
  }
  // 全部分类
  if(type==="CHANGE_CLASSIFY"){
    state.classifyList=payload.classifyList
  }
  // 推荐分类
  if(type==="CHANGE_RECOMMEND"){
    state.recommendList=payload.recommendList
  }
  // 综合排序
  if(type==="GET_ANIMATION"){
    state.animation=payload.animation
  }
  // 带有视频的列表
  if(type==="GET_VIDEO_LIST"){
    state.hotList=payload.hotList
 }
 // 商品详情页
 if(type==="GET_COVER_AND_CLIENT"){
  state.coverAndClient=payload.coverAndClient
}
// 作者食谱
if(type==="GET_CLIENT_LIST"){
  state.clientLit = payload.clientLit
}
if(type==="CHANGE__RECIPE_COMMONT_LIST"){
  state.recipeCommontList = payload.recipeCommontList
}
// 推荐课程
if(type==="ANIMATION_LIST"){
  state.recommendCurriculum = payload.recommendCurriculum
}
  return state
}
export default recipeReducer