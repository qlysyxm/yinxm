import React from "react"
import {Link,withRouter} from "react-router-dom"

class QuestionList extends React.Component{
  render(){
    return(
      <div>
          {
             this.props.questionList.map(v=>(
              <div className="items-box" key={v.contentQuestionId}>
                  <Link className="title" to={"/question/"+v.contentId+"/"+v.clientId}>{v.title}</Link>
                  <div className="recipe">
                      <img alt="" src={v.recipe.image} />
                      <div className="intro">
                          <div className="recipe-name">{v.recipe.title}</div>
                          <div className="author">作者：{v.recipe.clientName}</div>
                      </div>
                  </div>
                  <div className="write-box">
                      <div className="img-box">
                          <img alt="" src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40" />
                      </div>
                      <div className="text-box">写答案</div>
                  </div>
                  {
                      v.answerNum > 0 ? <div className="answerNum">{v.answerNum}个回答</div> : <div className="answerNum none">暂无回答</div>
                  }
                  
              </div>
              ))
          }
      </div>
    )
  }
}

export default withRouter(QuestionList)