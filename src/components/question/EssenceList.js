import React from 'react'
import {Link,withRouter} from "react-router-dom"
 class EssenceList extends React.Component{
   render(){
     return(
      <div>
      {
          this.props.essenceList.map(v=>(
              <div className="answer-wrap" key={v.contentAnswerId}>
                  <div className="clientImg">
                      <div>
                          <img alt="" src={v.clientImage} />
                      </div>
                  </div>
                  <div className="clientName">
                      <div className="icon">
                          <img alt="" src={"https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"} />
                      </div>
                      <div className="name">{v.clientName}</div>
                  </div>
                  <Link to={"/answer/"+v.contentId} className="answer">
                      <div className="ask-text">{v.title}</div>
                      <div className="answer-text">{v.coverSummary}</div>
                  </Link>
                  <div className="upNum">101个赞</div>
              </div>
          ))
      }
  </div>
     )
   }
 }

 export default withRouter(EssenceList);