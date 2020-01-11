import React from "react"
import {connect} from "react-redux"
import '../../assets/style/lesson/lesson.scss'
class Lesson extends React.Component{
  constructor(){
    super()
    this.state = {
      educationCourseId:0
    }
  }
  componentDidMount(){
    const courseId =  this.props.location.state || {}
    this.setState({educationCourseId:courseId.educationCourseId || 10527},()=>{
      this.props.getCourse.call(this)
      this.props.getOutCourseContent.call(this)
    })
  }
  render(){
    console.log("haha",this.props)
    if(JSON.stringify(this.props.lessonInfo)!=="{}"){
       this.props.getClientCourse.call(this,this.props.lessonInfo.clientId)
    }
    return(
      <div id="lesson-wrap">
                {/* <img alt="" src={this.props.lessonInfo.image} /> */}
                <div className="lesson-box">
                    {/* 视频 */}
                    <div className="video-wrap">
                        <video style={{height: "210px"}} poster={this.props.lessonInfo.image} 
                        src={this.props.lessonInfo.playURL}
                        controls autoPlay={false} playsInline="playsinline" controlsList="nodownload">
                        </video>
                    </div>
                    <div className="startPic" style={{
                        width: "375px",
                        height: "210px",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                    }}>
                        <img width="50px" src="https://image.hongbeibang.com/FiItVU3dzeRj6-wuSk2oVpTW8xoh?imageView2/1/w/640/h/640" alt=""
                        onClick={()=>{
                            document.querySelector("video").play();
                            document.querySelector(".startPic").style.display = "none";
                        }} />
                    </div>

                    {/* 标题 */}
                    <div className="title-wrap">
                        <div className="title">{this.props.lessonInfo.title}</div>
                        <div className="learn">
                            <img alt="" src={"https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54"} />
                            <span className="learnNum">
                                <span className="personNum">1000+</span>
                                <span>在学</span>
                            </span>
                        </div>
                    </div>
                    <div style={{background: "#F5F7F9",padding:"10px 0"}}>
                        <div className="moreGoods">
                            <div className="line"></div>
                            <div className="items">
                                <div>
                                    <div className="goods">
                                        <div className="empty-box"></div>
                                        <div className="text-box">永久回看</div>
                                        <div className="empty-box"></div>
                                        <div className="text-box">报名即学</div>
                                        <div className="empty-box"></div>
                                        <div className="text-box">自营课程</div>
                                        <div className="empty-box"></div>
                                        <div className="text-box">高效学习体验</div>
                                    </div>
                                    <div className="goods" style={{marginTop:"5px"}}>
                                        <div className="empty-box"></div>
                                        <div className="text-box">分步骤学</div>
                                        <div className="empty-box"></div>
                                        <div className="text-box">唯一品类</div>
                                        <div className="empty-box"></div>
                                        <div className="text-box">图片下载</div>
                                        <div className="empty-box"></div>
                                        <div className="text-box">工具材料参考</div>
                                    </div>
                                </div>
                                <div className="more-pic">
                                    <img alt="" src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" width="6.75px" height="11.57px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 学员作品 */}
                    <div className="student-work">
                        <div className="title-wrap">
                            <div className="title">学员作业</div>
                            <div className="more">查看更多</div>
                        </div>
                        <div className="pic-wrap" style={{background:"#fff"}}>
                            {
                                this.props.outContent.map((v,i)=>{
                                    if(i<=3){
                                        return (
                                            <div className="pic-box" key={v.contentId}>
                                                <div className="pic">
                                                    <img alt="" src={v.image[0]} />
                                                </div>
                                            </div>
                                        )
                                    }else{
                                        return "";
                                    }
                                })
                            }
                        </div>
                    </div>
                
                    {/* 你将学会 */}
                    <div className="detail">
                        {
                            JSON.stringify(this.props.lessonInfo) !== "{}" ?  this.props.lessonInfo.introduces.map((v,i)=>(
                            <div className="know" key={i}>
                                <div style={{background:"#fff",paddingLeft:"20px",paddingRight:"20px",position:"relative",top:"-25px"}}>
                                    <div style={{borderBottom:"1px solid #F5F7F9",width:"100%"}}></div>
                                </div>
                                <div className="title">{v.title}</div>
                                <div dangerouslySetInnerHTML={{__html: v.introduce}} />
                                
                            </div> 
                            ))  : ""
                        }
                    </div>
                    {/* 导师介绍 */}
                    
                    <div className="teacher">
                            <div style={{background:"#fff",paddingLeft:"20px",paddingRight:"20px",position:"relative",top:"-25px"}}>
                                <div style={{borderBottom:"1px solid #F5F7F9",width:"100%"}}></div>
                            </div>
                            <div className="title">导师介绍</div>
                        <div className="teacher-info">
                            <img alt="" src={this.props.lessonInfo.teacherImage} />
                            <div className="teacher-name">{this.props.lessonInfo.teacherName}</div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: this.props.lessonInfo.teacherIntroduce}} />
                    </div>

                    {/* 导师的其他课程 */}
                    <div style={{background: "#F5F7F9",padding:"10px 0"}}>
                        <div className="more-lesson">
                            <div className="title-wrap">
                                <div className="title">导师的其他课程</div>
                                <div className="more">查看更多</div>
                            </div>

                        <div className="listWrap">
                            <div className="showWrap">
                                {
                                    this.props.clientCourse.map(v=>(
                                    <div className="showLesson" key={v.educationCourseId} onClick={()=>{
                                        this.props.history.push({pathname:"/lesson",state:{educationCourseId:v.educationCourseId}});
                                        window.location.reload(true);
                                    }}>
                                        <div className="lesson">
                                            <div className="pic">
                                                <img src={v.image} alt=""/>
                                                <div className="learn">1000+人在学</div>
                                            </div>
                                            <div className="title">{v.title}</div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                          </div>
                        </div>
                    </div>
                   
                    {/* 页脚 */}
                    <div className="footer">
                        <img alt="" className="logo" src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&imageView2/1/w/551/h/242" />
                        <div className="context">烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！</div>
                        <div className="links">
                            <div className="link-box">
                                <div className="link">
                                    <img alt="" src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&imageView2/1/w/100/h/116" />
                                    <p>蛋糕</p>
                                </div>
                            </div>
                            <div className="link-box">
                                <div className="link">
                                    <img alt="" src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&imageView2/1/w/100/h/116" />
                                    <p>甜点</p>
                                </div>
                            </div>
                            <div className="link-box">
                                <div className="link">
                                    <img alt="" src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&imageView2/1/w/100/h/116" />
                                    <p>面包</p>
                                </div>
                            </div>
                            <div className="link-box">
                                <div className="link">
                                    <img alt="" src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&imageView2/1/w/100/h/116" />
                                    <p>中式点心</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 购买 */}
                    <div className="bottom-bar">
                        <div className="morelesson" onClick={()=>{
                            this.props.history.push("/university")
                        }}>
                            <img alt="" src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" />
                            <p>更多课程</p>
                        </div>
                        <div className="ask">
                            <img alt="" src="https://image.hongbeibang.com/FjlY1hEsTozcG0oGvSXzNqRIc8gb?imageView2/1/w/640/h/640" />
                            <p>咨询</p>
                        </div>
                        <div className="buy-box">
                            <div className="buy">
                                <span>&nbsp;￥</span>
                                <span>{this.props.lessonInfo.price}</span>
                                <span> </span>
                                <span>购买课程</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

function mapStateToProps(state){
  return{
    lessonInfo:state.lesson.lessonInfo,
    outContent:state.lesson.outContent,
    clientCourse:state.lesson.clientCourse
  }
}

function mapDispatchToProps(dispatch){
  return {
    async getCourse(){
      const data = await this.$axios.get("/education/getCourse?_t=1574932855222&csrfToken=&educationCourseId="+this.state.educationCourseId);
      dispatch({
        type:"CHANGE_LESSON_INFO",
                payload:{
                    lessonInfo:data.data,
                }
      })
    },
    async getOutCourseContent(){
      const data = await this.$axios.get("/dish/getOutstandingCourseContent?_t=1574942261158&csrfToken=&pageIndex=0&pageSize=10&educationCourseId="+this.state.educationCourseId);
      dispatch({
          type:"CHANGE_OUT_CONTENT",
          payload:{
              outContent:data.data.content.data
          }
      })
    },
    async getClientCourse(clientId){
      if(this.props.clientCourse.length < 1){
          const data = await this.$axios.get("/course/getClientOtherCourse?_t=1574943981699&csrfToken=&pageIndex=0&pageSize=10&clientId="+clientId+"&educationCourseId="+this.state.educationCourseId);
          dispatch({
              type:"CHANGE_CLIENT_COURSE",
              payload:{
                  clientCourse:data.data.data,
              }
          });
      }
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Lesson);