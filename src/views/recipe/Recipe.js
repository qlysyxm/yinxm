import React from "react"
import {connect} from "react-redux"
import "../../assets/style/recipe/recipe.scss"
class Recipe extends React.Component{
  constructor(){
    super()
    this.state={
      commontArr:[],
      quantity:0
    }
  }
  componentDidMount(){
    this.props.getCoverAndClient.call(this,this.props.match.params.contentId)
    this.props.getClientLit.call(this,this.props.match.params.contentId);
    this.props.getFloor.call(this);
    this.props.getAnimationList.call(this)
  }
  render(){
   
    const coverAndClient = this.props.coverAndClient;
    return(
      <div id="wrap">
       {/**头部 */}
                 <div className="s30153804">
                    <span className="s-3613cfc6" style={{float:"left"}}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/24/h/24" onClick={()=>(
                            this.props.history.go(-1)
                        )} className="s-6a5cf0dc" alt="" />
                    </span>
                    <div className="s60a15aa" style={{float:"right"}}>
                        <div className="s-680604cd yellowE9Square" style={{fontSize:"14px",width:"70px",height:"30px",color:"#E98B71",backgroundColor:"#fff",borderRadius:"30px",cursor:"pointer"}}>
                            收藏
                        </div>
                    </div>
                    <div className="s7e1f0f36"></div>
                </div>
        <div className="s-45edce8e">
          <div className="kong" style={{height:"44px"}}></div>
            <div className="s1d5d1514"> 
            {/* 商品信息和作者 */}
            <div className="s5a462018">
                            <img src={coverAndClient.coverImage} className="s-34f4f4a1" alt=""/>
                            <div className="s-6bbae4c3">
                                <div className="s2a122cbf">{coverAndClient.coverTitle}</div>
                                <div className="s-1340df09">
                                    <div className="yellowE9Border" name="+关注" style={{border:"0px",backgroundColor:"#E98B71",color:"#FFFFFF",float:"right",width:"70px",height:"30px",margin:"5px 0",fontSize:"14px",borderRadius:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>+关注</div>
                                    <div className="s-188bde89">
                                        <div className="s-1c89ddc8">
                                            <img src={coverAndClient.clientImage} className="s33fa2c34" style={{width: "33px",height: "33px"}} alt="" />
                                        </div>
                                    </div>
                                    <div className="s10151d80">
                                        <div className="s76884d5d">{coverAndClient.clientName}</div>
                                    </div>
                                    <div className="s18152520">
                                        <div className="s-6f0fec17">
                                            <p className="s737928cd" style={{color:"#313131",lineHeight:"27px",fontWeight:"200",fontSize:"17px"}}>{coverAndClient.coverSummary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
             {/**食料用法 */}
             <div className="sa6c118b">
             <div className="s-4f17d017">食材用料</div>
             <div className="s-7194e79c">
              <div className="s1dcc469e">
                                  <div onClick={()=>{
                                            this.props.getCoverAndClient.call(this,this.props.match.params.contentId,coverAndClient.quantity-1)
                                    }} className="s3b7a4466">
                                        <div className="s52a117ba s413111d"></div>
                                    </div>
                                    <div className="s37fd3f20">
                                        <input type="text" onKeyUp={(e)=>{
                                          this.props.getCoverAndClient.call(this.props.match.params.contentId,e.target.value)
                                        }} className="s-38f16fff" defaultValue={coverAndClient.quantity}/>
                                    </div>
                                    <div onClick={()=>{
                                            this.props.getCoverAndClient.call(this,this.props.match.params.contentId,coverAndClient.quantity+1)
                                    }} className="s3b7a4466">
                                        <div className="s52a117ba s400111d"></div>
                                        <div className="s52a117ba s413111d"></div>
                                    </div>
                          </div>
                          <span className="s-3f18e190">
                                    <span>(份量/</span>
                                    <span>{coverAndClient.unit}</span>
                                    <span>)</span>
                          </span>
                   </div>
                            <div className="s-7ec5e8f0">
                                {
                                    coverAndClient.material ? coverAndClient.material.map(v=>(
                                        <div key={v.contentRecipeMaterialId} className="s17ff34a3">
                                            <div className="s376a2933">{v.name}</div>
                                            <div className="s376a2933">{v.weight}</div>
                                        </div>
                                    )) : ""
                                }
                            </div>
             </div>
             {/**步骤 */}
             <div style={{position:"relative",marginTop:"25px"}} className="oy">
                            <div className="s7bcc137e">
                                {
                                    coverAndClient.step ? coverAndClient.step.map((v,i)=>(
                                        <div key={i} className="s1d673b34">
                                            <div className="s-7f22b8fc">步骤{i+1}</div>
                                            <img src={v.image} alt="" className="s5eab1b0b" />
                                            <div className="s2ec92791">
                                                <div className="s-6f0fec17">
                                                    <p className="s737928cd" style={{color:"#313131",letterSpacing:"-0.5px",fontWeight:"200",fontSize:"18px",lineHeight:"27px"}}>{v.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )) : ""
                                }        
                            </div>
                        </div>
             {/* 作业 */}
                       <div className="s-38e7f556" style={{paddingTop:"10px",paddingLeft:"15px",paddingRight:"10px",boxSizing:"border-box",backgroundColor:"#FFFFFF"}}>
                            <div className="s-6279dd34">查看全部</div>
                            <div className="s6065545">作业</div>
                        </div>
                        <div className="s-3774ca52">
                            
                            <div className="s-5caadf70" style={{width:"1710px"}}>
                                {
                                    coverAndClient.dish ? coverAndClient.dish.data ? coverAndClient.dish.data.map((v,i)=>(
                                        <div key={i} className="s561156b2">
                                            <a className="s4d160f27 s29de268f" href="/dish/14901192">
                                                <img src={v.coverImage} className="s-4545e6b4" alt="" />
                                            </a>
                                            <div className="s-17a8dea9">
                                                <div className="s-1c89ddc8">
                                                    <img src={v.clientImage} className="s33fa2c34" alt="" />
                                                </div>
                                            </div>
                                            <div className="s-3057a343">{v.clientName}</div>
                                            <div className="s27216fa8">{v.coverSummary}</div>
                                            <div className="s-6271e795">
                                                <div className="s-73edd1a8">
                                                    <img src="https://image.hongbeibang.com/FmwV3erfnWllNy3UkmPLji-iWRn8?imageMogr2/strip/thumbnail/640x640" className="s-66f7e70e" alt=""/>
                                                </div>
                                                <div className="s-2b3bdb33">{v.likeNum}</div>
                                            </div>
                                        </div>
                                    )) : "" : ""
                                }
                            </div>
                        </div>
          
             {/* 上传我的作品 */}
                       <div className="s-53e1f634">
                                <div className="s-6610b09f yellowE9Square s-7816f12d">
                                    <div className="s65a71ad3 sa601161">
                                        <img src="https://image.hongbeibang.com/FstDrTWNqnY76dJTq964YhL5zr2A?200X200&imageView2/1/w/48/h/48" className="s-34f4f4a1" alt=""/>
                                    </div>
                                    <div className="s-612ae0c6">上传我的作品</div>
                                </div>
                            </div>
          </div>
          {/* 食谱推荐 */}
                   <div className="s-38e7f556" style={{paddingTop:"10px",paddingLeft:"15px",paddingRight:"10px",boxSizing:"border-box",backgroundColor:"#FFFFFF"}}>
                        <div className="s-6279dd34">查看全部</div>
                        <div className="s6065545">食谱推荐</div>
                    </div>
                    <div className="s-7fc3c9be">
                        <div className="s4fdc1a25" style={{width:"1710px"}}>
                            {
                                coverAndClient.recipe ? coverAndClient.recipe.map((v,i)=>(
                                    <div key={i} className="s3e793d71">
                                        <div className="s4e173a56">
                                            <img src={v.coverImage} className="s2e72011" alt="" />
                                        </div>
                                        <div className="s-7f7a659">{v.coverTitle}</div>
                                    </div>
                                )) : ""
                            }
                        </div>
                    </div>
                  {/* 作者食谱 */}
                  <div className="clientWrap" style={{paddingTop:"10px",paddingLeft:"15px",paddingRight:"10px",marginTop:"10px",boxSizing:"borderBox",backgroundColor:"#FFFFFF",}}>
                        <div className="s-6279dd34">查看全部</div>
                        <div className="s6065545">作者食谱</div>
                    </div>
                    <div className="s-7fc3c9be">
                        <div className="s4fdc1a25" style={{width:"1710px"}}>
                            {
                                this.props.clientLit.map((v,i)=>(
                                    <div key={i} className="s3e793d71">
                                        <div className="s4e173a56">
                                            <img src={v.coverImage} className="s2e72011" alt="" style={{background: "none",width: "160px",height: "93px"}} />
                                        </div>
                                        <div className="s-7f7a659">{v.coverTitle}</div>
                                    </div>
                                ))
                            }
                    </div>
                    </div>

                {/* 推荐课程 */}
                <div className="s1371169f">
                        <div className="sc90d0e">
                            <div className="s-ec4eba8">
                                <div className="s-2913d021">推荐课程</div>
                            </div>
                            <div className="s3dcb0e27">
                                <div className="s-7683e7fa">查看全部</div>
                            </div>
                        </div>
                        <div className="animationWrap" style={{position:"relative",left:"-15px"}}>
                            <div className="animation" style={{position:"relative",left:"15px"}}>
                                <div className="s382d54ba">
                                    {
                                        this.props.recommendCurriculum.map((v,i)=>(
                                            <div key={i} className="s-48eca401">
                                                <img src={v.coverImage} alt="" className="s-2bf8e690" />
                                                <div className="s-6322c42d">
                                                    <span>1000+</span>
                                                    <span>在学</span>
                                                </div>
                                                <div className="s7bbf52e4">{v.coverTitle}</div>
                                            </div>
                                        ))
                                        
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 帮有评论 */}
                    <div className="sauWrap">
                        <div className="s6065545" style={{paddingLeft: "0.4rem"}}>帮友评论</div>
                        <div className="sf0e12ae">
                            <div className="s-6c47e396">
                                <div className="s4f54181e">
                                    <img src="https://image.hongbeibang.com/FqGb2jBAO5iaoaxD6zSC2QFyhJ-8?54X54&imageView2/1/w/54/h/54" alt="" className="s-a38eddb" />
                                    <div className="s-7d62e8e1">{this.props.coverAndClient.likeNum}</div>
                                </div>
                            </div>
                            <div className="s-6c47e396">
                                <div className="s4f54181e">
                                    <img src="https://image.hongbeibang.com/FnacfRCC7inRIVSCQEET0ZM6RanM?54X54&imageView2/1/w/54/h/54" alt="" className="s-a38eddb" />
                                    <div className="s-7d62e8e1">{this.props.coverAndClient.rewardNum}</div>
                                </div>
                            </div>
                            <div className="s-6c47e396">
                                <div className="s4f54181e">
                                    <img src="https://image.hongbeibang.com/FqTdO6uI2bG732ZjIO4ascLh2DcE?54X54&imageView2/1/w/54/h/54" alt="" className="s-a38eddb" />
                                    <div className="s-7d62e8e1">{this.props.recipeCommontList.count}</div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    {/* 评论 */}
                    {
                        this.state.commontArr.length > 0 ? this.state.commontArr.map((v,i)=>(
                            <ul className="crit" key={v.clientId+i}>
                                <li className="crit-list">
                                    <div className="crit-img">
                                        <div>
                                            <img alt="" src={v.clientImage} />
                                        </div>
                                    </div>
                                    <div className="crit-up">
                                        <div className="crit-up-name">{v.clientName}</div>
                                        <div className="time">{v.createTime}</div>
                                    </div>
                                    <div className="crit-text">
                                        <div className="crit-content">
                                            <span>{v.text}</span>
                                        </div>
                                        {
                                            v.comments.length > 0 ? v.comments.map(u=>(
                                                <div className="inner-text" key={u.clientId}>
                                                    <div className="pic"></div>
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <span style={{color: "#313131"}}>{u.clientName}: </span>
                                                                <span style={{color: "#999"}}>{u.text}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )) : ""
                                        }
                                    </div>
                                </li>
                            </ul>
                            )) : <div className="none-crit">快来发表你的评论吧</div>
                        }
        </div>
      </div>
    )
  }
}
function mapStatToProps(state){
  return {
      coverAndClient:state.recipeReducer.coverAndClient,
      clientLit:state.recipeReducer.clientLit,
      recipeCommontList:state.recipeReducer.recipeCommontList,
        recommendCurriculum:state.recipeReducer.recommendCurriculum
     
  }
}
function mapDispatchToProps(dispatch){
  return{
    //获取商品的信息和作者的基本信息
   async getCoverAndClient(contentId,quantity=""){
    const {data} = await this.$axios.get("/recipe/get?_t=1575020756727",{
      params:{
          contentId,
          quantity
         }
      })
      this.setState({
        quantity:data.recipe.quantity
      })
      dispatch({
                    type:"GET_COVER_AND_CLIENT",
                    payload:{
                        coverAndClient:data.recipe,
                    }
      })
    },
    // 作者食谱
        // https://api.hongbeibang.com/recipe/getClientByNoContenId?_t=1575115328056&csrfToken=&clientId=1304829&noContentId=11711167&pageSize=10&pageIndex=0  
        
        async getClientLit(clientId){
            const {data} = await this.$axios.get("/recipe/getClientByNoContenId?_t=1575115328056&clientId="+clientId+"&pageSize=10&pageIndex=0")
                  dispatch({
                      type:"GET_CLIENT_LIST",
                      payload:{
                          clientLit:data
                      }
                  })
        },
        
       
        // 评论 https://api.hongbeibang.com/comment/getFloor?_t=1575175664682&csrfToken=&pageIndex=0&pageSize=10&contentId=14238803
        getFloor(){
            dispatch(async ()=>{
                const {data} = await this.$axios.get("/comment/getFloor?_t=1575175664682&csrfToken=&pageIndex=0&pageSize=10&contentId="+this.props.match.params.contentId);
                dispatch({
                    type:"CHANGE__RECIPE_COMMONT_LIST",
                    payload:{
                        recipeCommontList:data
                    }
                })
                this.setState({
                    commontArr:this.$tools.commontArr(data)
                });
            })
        },
        // 推荐视频
        // https://api.hongbeibang.com/recommend/getRandContent?_t=1575115327898&csrfToken=&type=3&pageSize=10
        getAnimationList(){
            dispatch(async (dispatch)=>{
                const {data} = await this.$axios("/recommend/getRandContent?_t=1575115327898&csrfToken=&type=3&pageSize=10")
                dispatch({
                    type:"ANIMATION_LIST",
                    payload:{
                        recommendCurriculum:data.data
                    }
                })
            })
        }
  }
} 
export default connect(mapStatToProps,mapDispatchToProps)(Recipe);
