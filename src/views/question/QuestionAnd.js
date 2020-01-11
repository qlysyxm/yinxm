import React from 'react'
import "../../assets/style/question/questionand.scss"
import {connect} from "react-redux"
import QuestionList from "../../components/question/QuestionList"
class QuestionAnd extends React.Component{
  constructor(){
    super()
      this.state = {
        index:1
      }
    
  }
  componentDidMount(){
      this.props.getNewQuestionList.call(this)
  }
  render(){
    return(
      <div id="questionsAndAnswer-wrap">

                     {/* 头部 */}
                <div className="header" ref="header">
                    <div className="title-box">
                        <span className="ask" style={{float: "left"}}>提问</span>
                        <span style={{float: "right"}}>
                            <img alt="" src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" />
                        </span>
                        <div className="input-box">
                            <div className="input" onClick={()=>{
                                this.props.history.push("/search")
                            }}>
                                <span>搜索问题</span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="empty-box"></div>
                </div>
                
      {/* 导航 */}
        <div className="nav">
                    <div className="nav-box" ref="nav">
                        <div className={this.state.index===0?"nav-item active":"nav-item"} onClick={()=>{
                            this.setState({index:0});
                            // this.props.getEssenceList.call(this);
                        }}>
                            <span>精华问答</span>
                            <div className="line-box"></div>
                        </div>
                        <div className={this.state.index===1?"nav-item active":"nav-item"}  onClick={()=>{
                            this.setState({index:1});
                            this.props.getNewQuestionList.call(this);
                        }}>
                            <span>最新问答</span>
                            <div className="line-box"></div>
                        </div>
                        <div className={this.state.index===2?"nav-item active":"nav-item"}  onClick={()=>{
                            this.setState({index:2});
                            // this.props.getHotQuestionList.call(this);
                        }}>
                            <span>最热问答</span>
                            <div className="line-box"></div>
                        </div>
                    </div>
                </div>
         {/** 内容列表*/}
        <div className="content">
                {
                   this.state.index===1?<QuestionList questionList={this.props.newQuestionList}></QuestionList>:""
                }

        </div>
      </div>
    )
  }
}

function num (state){
    return{
       newQuestionList :state.question.newQuestionList
    }
}


function map(dispatch){
    return{
        async getNewQuestionList(){
            const data = await this.$axios.get("/question/getNew?_t=1575020357827&csrfToken=&pageIndex=0&pageSize=10");
            dispatch({
                type:"CHANGE_NEW_LIST",
                payload:{
                    newQuestionList:data.data.content.data
                }
            })
        }
    }
}
export default connect(num,map)(QuestionAnd);