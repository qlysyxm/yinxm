import React from "react"
import {connect} from "react-redux"
import "../../assets/style/recipe/recipeList.scss" 
class RecipeList extends React.Component{
  constructor(){
    super()
    this.state={
      index:0
    }
  }
  componentDidMount(){
    this.props.getAnimation.call(this)
  }
  fn(sort){
     this.props.getVideoList.call(this,sort)
  }
  render(){
    console.log('ll',this)
    let str = '';
    return(
      <div id="wrap">
        {/**头部 */}
        <div className="header">
          <span className="exit">
            {/* 点击返回图标返回上一页 */}
            <img alt="" onClick={()=>{
                            this.props.history.go(-1)
                        }} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?27X27&imageView2/1/w/27/h/27" />
                      
          </span>
          <div className="search">
                        <div className="searchBtn">
                            <span>
                                <img alt="" src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42"  />
                            </span>
                            <span className="intro">
                                <input className="s6c123eab" type="text" placeholder="搜索食谱" defaultValue={this.props.match.params.keyword}/>
                            </span>
                        </div>


          </div>   
                   <span className="search1">
                        <span className="s7d4f25eb">
                            帮友
                        </span>
                        <span className="s-3613cfc6" style={{float:"left"}}>
                            <img alt="" className="s-6a5cf0dc" src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/19/h/19" /> 
                        </span>
                    </span>        
             </div>
        {/**综合排序 */}
        <div className="s-41d1d672">
        <div className="kong"></div>
          <div onClick={()=>{
            this.fn()
            this.setState({index:0})
          }} className={this.state.index===0?"s-45b3ab02 active":"s-45b3ab02"}>
            <span>综合排序</span>
            <div className="s9b31ec9"></div>
          </div>
          <div onClick={()=>{
            this.fn("dishNum")
            this.setState({index:1})
          }} className={this.state.index===1?"s-45b3ab02 active":"s-45b3ab02"}>
            <span>做过最多</span>
            <div className="s9b31ec9"></div>
          </div>
          <div onClick={()=>{
            this.fn("master")
            this.setState({index:2})
          }} className={this.state.index===2?"s-45b3ab02 active":"s-45b3ab02"}>
            <span>达人食谱</span>
            <div className="s9b31ec9"></div>
          </div>
        </div>
        {/**视频学习 */}
         {
           this.props.animation.map((v,i)=>{
             if(i<3){
               return(
                 <div key={i} className="s6acd1b0a" onClick={()=>{
                   this.props.history.push({pathname:"/lesson",
                   state:{educationCourseId:v.educationCourseId}
                  })
                 }}>
                   <div className="s4d160f27 s-1d18d691">
                                       <div className="s17962228">
                                            <img alt="" className="s28c200f" src={v.image} />
                                            <div className="s-3676c720">视频</div>
                                        </div>
                                        <div className="sd0f5c6a">{v.title}</div>
                                        <div className="s-6f40b723">1000+人学过</div>
                                        <div className="s-2b6eb7d8">
                                            <span>视频学习更简单</span>
                                        </div>
                   </div>
                                    <div className="s601044d3">
                                        <div className="s-4014f5ce">不再显示</div>
                                    </div>
                 </div>
               )
             }else{
               return ""
             }
           })
         }
         {/** 热搜商品列表 */}
         <div className="s6d8b134b">
           {
              this.props.hotList.map((v,i)=>(
                <div key={i} className="s4d160f27 s-1d18d691" onClick={()=>{
                  this.props.history.push("/recipt/"+v.contentId+"/"+v.quantity+"/"+v.clientId)
                }}>
                                <div className="s2f82224c">
                                    <img alt="" className="s28c200f" src={v.coverImage} />
                                </div>
                                <div style={{height:47.37}} className="s30776b32">{v.coverTitle}</div>
                                <div className="s-b5fb7ce">{v.clientName}</div>
                                <div className="s-7788b730">
                                  {str=""}
                                  {
                                    v.material.forEach(value => {
                                      str += value.name
                                  })
                                  }
                                  {str}
                                </div>
                                <div className="s627b48c1">
                                    <span>{v.dishNum}收藏 </span>
                                    <span></span>
                                    <span>{v.collentNum}人做过</span>
                                </div>
                </div>    
              ))
           }
         </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
     // 视频商品列表
     animation:state.recipeReducer.animation,
     //商品列表信息
     hotList:state.recipeReducer.hotList
  }
}

function mapDispathToProps(dispatch){
  return{
    //获取视频列表
   async getAnimation(){
    const {data} = await this.$axios.get("/search/getMoreCourse?_t=1574940874289&csrfToken=&pageIndex=0&pageSize=10&keyword="+this.props.match.params.keyword)
    // console.log(data.search.list.course.data);
     dispatch({
      type:"GET_ANIMATION",
      payload:{
        animation:data.search.list.course.data
        }
     })
   },
   //获取商品列表
   async getVideoList(sort=""){
      const {data} = await this.$axios.get("/search/getMoreRecipe",{
        params:{
            keyword:this.props.match.params.keyword,
            pageSize:15,
            sort:sort
           }
        })
       dispatch({
        type:"GET_VIDEO_LIST",
        payload:{
            hotList:data.search.list.recipe.data
        }
       })
   }
  }
}
//全局调用 映射到组件 高阶组件
export default connect(mapStateToProps,mapDispathToProps)(RecipeList); 