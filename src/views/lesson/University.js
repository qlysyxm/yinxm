import React from 'react'
import {connect} from 'react-redux'
import Swiper from 'swiper'


import LessonList from "../../components/LessonList";
import "../../assets/style/lesson/university.scss"
import "../../../node_modules/swiper/js/swiper.min.js"
import "../../../node_modules/swiper/js/swiper.js"
import "../../../node_modules/swiper/css/swiper.css"
class University extends React.Component{
  constructor(){
    super()
    this.state = {
      index:0
    }
  }
componentDidMount(){
  new Swiper('.swiper-container', {
    loop: true,  //循环
    autoplay: {   //滑动后继续播放（不写官方默认暂停）
        disableOnInteraction: false,
    },
    pagination: {  //分页器
        el: '.swiper-pagination'
    },
    observer: true

  })
  this.props.getNav.call(this)
  this.props.getSwiper.call(this);
  this.props.getLessonList.call(this)
}

 render(){
   return(
     <div id="university">
   {/* 头部 */}
      <div className="header">
        {/* 导航 */}
        <div className="navTitle">
            <div className={this.state.index===0?"nav active":"nav"} onClick={()=>{
              this.setState({
                index:0
               })
            }}>
            <div className="navName">推荐</div>
                            <div className="line">
                                <div className="inner-line"></div>
                            </div>
            </div>
           {
             this.props.lesson.lessonNav.map((v,i)=>(
              <div className={this.state.index === i+1?"nav active":"nav"} key={v.categoryId} onClick={()=>{
                this.setState({
                    index:i+1
                })
                this.props.getClassList.call(this,v.categoryId)
            }}>
                <div className="navName">{v.title}</div>
                <div className="line">
                    <div className="inner-line"></div>
                </div>
            </div>
             ))
           }
        </div>
        <div className="emptyBox"></div>
        <div className="search">
                        <img src="https://image.hongbeibang.com/FnrqUc_5_kAF72ooW4xubuH07P-S?imageView2/1/w/640/h/640" alt="" onClick={()=>{
                            this.props.history.push("/search")
                        }} />
                    </div>
         </div>
         {
           this.state.index === 0 ?  <div>

           <div className="swiper-container">
                   <div className="swiper-wrapper">
                       {
                           this.props.lesson.swiperList.map(v=>(
                           <div key={v.categoryItemId} className="swiper-slide" style={{height:"200px"}}>
                               <img src={v.image}  alt="pic"/>    
                           </div>
                           ))
                       }
                   </div>
                   <div className="swiper-pagination"></div>
               </div>
           <LessonList props={this.props} lessonList={this.props.lesson.lessonList}></LessonList>
       </div> : <div className="listWrap">
           <div className="showWrap">
           {
               this.props.lesson.classList.map(v=>(
                   <div className="showLesson" key={v.contentId}>
                       <div className="lesson">
                           <div className="pic" onClick={()=>{
                               this.props.history.push({pathname:"/lesson",state:{educationCourseId:v.educationCourseId}})
                           }}>
                               <img src={v.verticalImages[0]} alt=""/>
                               <div className="learn">1000+人在学</div>
                           </div>
                           <div className="title">{v.title}</div>
                       </div>
                   </div>
               ))
           }
           </div>
       </div>
         }
     </div>
   )
 }
}

function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return{
    async getNav(){
      const data = await this.$axios.get("/index/getByType?_t=1574584817136&csrfToken=&type=11")
            dispatch({
                type:"CHANGE_LESSON_NAV",
                payload:{
                    lessonNav:data.data
                }
       })
    },
    async getSwiper(){
      const data = await this.$axios.get("/education/getIndexByWeb?_t=1574577563748&csrfToken=");
      dispatch({
          type:"CHANGE_SWIPER_LIST",
          payload:{
              swiperList:data.data.category[0].item
          }
      })
     },
     async getLessonList(){
      const data = await this.$axios.get("/education/getIndexByWeb?_t=1574577563748&csrfToken=");
      dispatch({
          type:"CHANGE_LESSON_LIST",
          payload:{
              lessonList:data.data.category
          }
      })
      },
    async getClassList(categoryId){
      const data = await this.$axios.get("/index/getIndexItem?_t=1574585126513&csrfToken=&categoryId="+categoryId);
      dispatch({
          type:"CHANGE_CLASS_LIST",
          payload:{
              classList:data.data
          }
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(University);