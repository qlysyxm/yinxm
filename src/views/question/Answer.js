import React from 'react'
import "../../assets/style/question/answer.scss"
import {connect} from "react-redux";
class Answer extends React.Component{
  constructor(){
      super();
      this.state = {
          commontArr:[]
      }
  }
  render(){
    console.log('666666',this.props)
      return(
        <div id="answer-warp">
            <div className="wrap">
                <div className="header">
                    <div className="content">
                        <span style={{float: "left"}} onClick={()=>{
                            this.props.history.go(-1)
                        }}>
                            <img alt="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" />
                        </span>
                        <ul>回答</ul>
                    </div>
                    <div className="empty-box"></div>
                </div>
                <div className="main">
                    <div className="title">{this.props.answerContent.title}</div>
                    <div className="answer">
                        <div className="client">
                            <div className="focuse">+关注</div>
                            <div className="clientImg">
                                <div>
                                    <img alt="" src={this.props.answerContent.clientImage} />
                                </div>
                            </div>
                            <div className="clientName">
                                <div>{this.props.answerContent.clientName}</div>
                            </div>
                        </div>
                        <div className="text">
                            <div>{this.props.answerContent.coverSummary}</div>
                        </div>
                    </div>
                    {/* 评论 */}
                    <div className="crit-title">
                        <div className="critNum">
                            <span>评论 {this.state.commontArr.length}</span>
                            <div></div>
                        </div>
                    </div>
                    {
                        this.state.commontArr.length > 0 ? this.state.commontArr.map(v=>(
                        <ul className="crit" key={v.clientId}>
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
                    
                    <div style={{overflow: "hidden",zoom: 1}}>
                        <div style={{maxWidth: "600px",margin:"0 auto",textAlign: "right"}}></div>
                    </div>
                </div>
                {/* 底部 */}
                <div className="footer">
                    <div className="left">
                        <div className="line"></div>
                        <div className="img">
                            <img alt="" src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/50/h/50" />
                        </div>
                        <div className="num">51</div>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img alt="" src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/50/h/50" />
                        </div>
                        <div className="num">1</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  componentDidMount(){
      this.props.getAnwser.call(this,this.props.match.params.contentId/1);
      this.props.getCommontList.call(this,this.props.match.params.contentId);
  }
}

function mapStateToProps(state){
  return {
      answerContent:state.question.answerContent,
      answerCommont:state.question.answerCommont
  };
}
function mapDispatchToProps(dispatch){
  return {
      // 获取回答 /question/getAnswer?_t=1575035030755&csrfToken=&contentId=12932569
      async getAnwser(contentId){
          const data = await this.$axios.get("/question/getAnswer?_t=1575035030755&csrfToken=&contentId="+contentId);
          dispatch({
              type:"CHANGE_ANWSER_CONTENT",
              payload:{
                  answerContent:data.data.content
              }
          })
      },
      // 获取评论 /comment/getFloor?_t=1575035031337&csrfToken=&pageIndex=0&pageSize=10&contentId=12932569
      async getCommontList(contentId){
          const data = await this.$axios.get("/comment/getFloor?_t=1575035031337&csrfToken=&pageIndex=0&pageSize=10&contentId="+contentId);
          dispatch({
              type:"CHANGE_COMMONT_LIST",
              payload:{
                  answerCommont:data.data
              }
          });
          this.setState({
              commontArr:this.$tools.commontArr(this.props.answerCommont)
          });
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Answer);