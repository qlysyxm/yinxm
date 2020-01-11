import React from 'react'
import "../../assets/style/question/question.scss"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
class Question extends React.Component{
  constructor(){
      super();
      this.state = {
          commontArr : []
      }
  }
  render(){
      return (
          <div id="question">
              {/* 头部 */}
              <div className="header">
                  <div className="head">
                      <span style={{float:"left"}} onClick={()=>this.props.history.go(-1)}>
                          <img alt="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" />
                      </span>
                      <div className="collect" style={{float:"right"}}>
                          <div>收藏</div>
                      </div>
                  </div>
                  <div className="empty"></div>
              </div>
              {/* 中间内容 */}
              <div className="main">
                  <div className="title">
                      <div>{this.props.questionInfo.title}</div>
                  </div>
                  <div className="recipe-wrap">
                      {
                          this.props.questionInfo.recipe ? <div className="recipe">
                              <img alt="" src={this.props.questionInfo.recipe.image} />
                              <div className="intro">
                                  <div className="name">{this.props.questionInfo.recipe.title}</div>
                                  <div className="author">作者：{this.props.questionInfo.recipe.clientName}</div>
                              </div>
                          </div> : ""
                      }
                      
                  </div>
                  {
                      this.state.commontArr.length > 0 ? <div className="answer">{this.state.commontArr.length} 回答</div> : ""
                  }
                  
                  <div className="crit">
                      {
                          this.state.commontArr.length > 0 ? this.state.commontArr.map(v=>(
                          <div className="crit-warp" key={v.clientId}>
                              <div className="top">
                                  <div className="img-box">
                                      <div>
                                          <img alt="" src={v.clientImage} />
                                      </div>
                                  </div>
                                  <div className="client-name">
                                      <div className="level">
                                          <img alt="" src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" />
                                      </div>
                                      <div className="name">{v.clientName}</div>
                                  </div>
                                  <div className="time">{v.modifyTime}</div>
                              </div>
                              <Link className="answer" to={"/answer"}>
                                  <div>
                                      <div>{v.description}</div>
                                  </div>
                              </Link>
                              <div className="praise">
                                  <div className="pic">
                                      <img alt="" src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" />
                                  </div>
                                  <div className="text">{v.likeNum>0?v.likeNum:"点赞"}</div>
                              </div>
                              <div className="discuss">
                                  <div className="pic">
                                      <img alt="" src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" />
                                  </div>
                                  <div className="text">{v.commentNum>0?v.commentNum:"评论"}</div>
                              </div>
                          </div>
                          )) : ""
                      }
                      
                  </div>
                  <div className="empty"><div></div></div>
              </div>
              {/* 底部 */}
              <div className="footer">
                  <div className="left">
                      <div className="line"></div>
                      <div className="img">
                          <img alt="" src="https://image.hongbeibang.com/Fh_n2YndO4M5AlLq-k3uBHDG5PmP?48X48&imageView2/1/w/48/h/48" />
                      </div>
                      <div className="num">邀请回答</div>
                  </div>
                  <div className="right">
                      <div className="img">
                          <img alt="" src="https://image.hongbeibang.com/Fnu20JVHiBh4OUcn7CDDPdCyJKC_?48X48&imageView2/1/w/48/h/48" />
                      </div>
                      <div className="num">我来回答</div>
                  </div>
              </div>
          </div>
      )
  }
  componentDidMount(){
      this.props.getQuestion.call(this);
      this.props.getAnswer.call(this);
  }
}

function mapStateToProps(state){
  return {
      questionInfo:state.question.questionInfo,
      answerInfo:state.question.answerInfo
  };
}
function mapDispatchToProps(dispatch){
  return {
      // https://api.hongbeibang.com/question/getQuestion?_t=1575119138096&csrfToken=&contentId=14962658
      async getQuestion(){
          const data = await this.$axios.get("/question/getQuestion?_t=1575119138096&csrfToken=&contentId="+this.props.match.params.contentId);
          dispatch({
              type:"CHANGE_QUESTION_INFO",
              payload:{
                  questionInfo:data.data.content
              }
          })
      },
      // https://api.hongbeibang.com/question/getAnswers?_t=1575122672534&&pageIndex=0&pageSize=10&contentId=14962658&clientId=3001365
      async getAnswer(){
          const data = await this.$axios.get("/question/getAnswers?_t=1575122672534&&pageIndex=0&pageSize=10&contentId="+this.props.match.params.contentId+"&clientId="+this.props.match.params.clientId);
          dispatch({
              type:"CHANGE_ANSWER_INFO",
              payload:{
                  answerInfo:data.data.content.answer
              }
          })
          this.setState({
              commontArr:this.$tools.commontArr1(data.data.content.answer)
          })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question);