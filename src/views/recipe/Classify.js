import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import "../../assets/style/recipe/classify.scss"
import ClassifyList from "../../components/recipe/ClassifyList"
class Classify extends React.Component{
  constructor(){
    super()
    this.state = {
      index:0
    }
  }
  componentDidMount(){
    this.props.getClassify.call(this)
    this.props.getRecommend.call(this)
  }
  render(){
    // console.log('kkk',this.props.classifyList[this.state.index-1])
    return(
      <div id="classify">
        {/**头部 */}
        <div>
          <div className="search-box">
                       <span className="img-box" onClick={()=>{
                            this.props.history.push("/")
                        }} style={{float: "left"}}>
                            <img alt="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" />
                        </span>
                        <div className="search-btn">
                            <div className="search" onClick={()=>{
                                this.props.history.push("/search")
                            }}>
                                <span>搜索食谱/食材，烘焙/家常菜一应俱全</span>
                                <input></input>
                            </div>
                        </div>
                        
          </div>
          <div className="empty-box"></div>
        </div>
        {/**内容 */}
        <div className="contain">
          {/**左边导航 */}
          <div className="left">
            <div className="content">
              <div className="swiper-wrapper">
                <div className="content-box">
                    <div className={this.state.index===0?"active":""} onClick={()=>{
                      this.setState({
                        index:0
                    })
                    }}><p>推荐</p></div>    
                    {
                     
                        this.props.classifyList.map((v,i)=>(
                     
                          <div className={this.state.index===i+1?"active":""} onClick={()=>{
                            this.setState({index:i+1})
                          }} key={v.classifyId}>
                            <p>{v.name}</p>
                          </div>
                       
                        
                        ))
                      
                      
                    }    
                </div>
              </div>
            </div>
          </div>
           {/**右边展示 */}
           <div className="right">
           {
                            this.state.index===0 ? <div className="right-box">
                            <div className="title-box">
                                <div>{this.props.recommendList.name}</div>
                            </div>
                            <div className="recipes">
                                {
                                    this.props.recommendList.classifys ? this.props.recommendList.classifys.map(v=>(
                                    <Link className="recipe-link" key={v.classifyId} to={"/recipeList/"+v.name}>
                                        <div className="pic-box">
                                            <img src={v.image} alt="" />
                                        </div>
                                        <div className="pic-name">{v.name}</div>
                                    </Link>
                                    )) : ""
                                }
                                
                            </div>
                        </div> : <ClassifyList classifyList={this.props.classifyList[this.state.index-1]}></ClassifyList>
                        }
                    <div className="bottom-box"></div>
             </div>
                 <div style={{height: "56px"}}></div>
                    <div className="download">
                        <div className="more"></div>
                        <div className="close" onClick={()=>{
                            document.querySelector(".download").style.display = "none";
                        }}></div>
                        <img className="logo" alt="" src="https://image.hongbeibang.com/Fm6HDD9iCo97vKHCduKXwkFEjEiJ?750X110&imageView2/1/w/750/h/110" />
                    </div>
        </div>


      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    recommendList:state.recipeReducer.recommendList,
    classifyList:state.recipeReducer.classifyList
  }
}
function mapDispatchToProps(dispatch){ 
  return{
    async getClassify(){
      const data = await this.$axios.get("/classify/get?_t=1574991968775&csrfToken=");
      dispatch({
          type:"CHANGE_CLASSIFY",
          payload:{
              classifyList:data.data.classify
          }
      })
    },
    async getRecommend(){
      const data = await this.$axios.get("/classify/getRecommend?_t=1574991968482&csrfToken=");
      dispatch({
          type:"CHANGE_RECOMMEND",
          payload:{
              recommendList:data.data[0]
          }
      })
  },
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(Classify);