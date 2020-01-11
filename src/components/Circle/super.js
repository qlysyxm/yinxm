import React from 'react'
import {connect} from "react-redux"
import "../../assets/style/circle/super.scss"
class Super extends React.Component{
  constructor() {
    super();
    this.state = {
        style: { display: "none" }
    }
  }
  componentDidMount(){
    this.props.getMasterNew.call(this)
    window.addEventListener('scroll', this.onTop.bind(this));
        window.addEventListener('click', this.backTop.bind(this));
  }
  onTop() {
    const top = this
    window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop > 500) {
            top.setState({
                style: {
                    display: "block"
                }
            })
        } else {
            top.setState({
                style: {
                    display: "none"
                }
            })
        }
    }
}
backTop() {
    document.documentElement.scrollTop = 0
}
  render(){
    return(
      <div id="super">
          <div className="s-320adc4c">
              {
                  this.props.masterArr.map((v, i) => (
                      <div key={i} className="super_info">
                          <div className="s-6c23e4ee">
                              <div className="s214e0dbe">
                                  <div className="s305819ac">
                                      <div className="s-1c89ddc8">
                                          <img alt="" src={v.clientImage} />
                                      </div>
                                  </div>
                                  <div className="s259d1f46">
                                      <div className="s576a1f95">
                                          <img alt="" className="s-34f4f4a1" src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" />
                                      </div>
                                      <div className="s3db153a2">
                                          {v.clientName}
                                      </div>
                                  </div>
                                  <div className="s5e6053ac">
                                      <span>1分钟前</span>
                                      <span className="s7ba00fa8">
                                          {v.coverTitle}
                                      </span>
                                  </div>
                              </div>
                              <div className="s60b56aea">
                                  <span className="s4e2e19bb">
                                      {v.communityName}
                                  </span>
                                  <span>{v.introduce}</span>
                              </div>
                              <div className="super_img">
                                  <div onClick={() => {
                                      this.props.this.props.history.push("/dish/" + v.contentId)
                                  }} className="s-368ce4c7">
                                      <div className="s-1f31d5de">
                                          {
                                              v.image.length > 2 ? v.image.map((m, n) => (
                                                  <img alt="" style={{ width: "110px", height: "110px" }} key={n} src={m} />
                                              )) : (v.image.length === 2 ? v.image.map((m, n) => (
                                                  <img alt="" style={{ width: "168px", height: "169px" }} key={n} src={m} />
                                              )) : <img alt="" style={{ width: "227px", height: "auto" }} src={v.image[0]} />)
                                          }
                                      </div>
                                      {
                                          v.recipe.clientId > 0 ? <div onClick={() => {
                                              this.props.this.props.history.push("/recipe/" + v.contentId)
                                          }} className="menu">
                                              <div className="s-2b78cff9">
                                                  <img alt=""
                                                      className="s-50de6f1" src={v.recipe.image} />
                                                  <div className="s-7d70dc01">
                                                      <div className="s283a4a93">
                                                          {v.recipe.title}
                                                      </div>
                                                      <div className="s-2bbb6e1">
                                                          作者：{v.recipe.clientName}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div> : null
                                      }
                                  </div>
                              </div>
                              <div className="s124b1911">
                                  21次浏览
                      </div>
                              <div className="s-2ca7dcb7">
                                  <div className="s-77fbb56d">
                                      <div className="s-2443e06d">
                                          <img alt="" src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" className="s-34f4f4a1" />
                                      </div>
                                      <div className="s70932adf">
                                          {v.likeNum}
                                      </div>
                                  </div>
                                  <div className="s-77fbb56d">
                                      <div className="s-2443e06d">
                                          <img alt="" src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" className="s-34f4f4a1" />
                                      </div>
                                      <div className="s70932adf">
                                          {v.rewardNum}
                                      </div>
                                  </div>
                                  <div className="s-77fbb56d">
                                      <div className="s-2443e06d">
                                          <img alt="" src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" className="s-34f4f4a1" />
                                      </div>
                                      {
                                          v.commentNum ? <div className="s70932adf">
                                              {v.commentNum}
                                          </div> : <div className="s70932adf">
                                                  评论
                                      </div>
                                      }
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
              }
              <div className="s124b1911">

              </div>

          </div>
          <div className="s-5a9af5c5">
              <div className="s7cc41d84">
                  <img alt="" className="s-6141e7fc" src="https://image.hongbeibang.com/FhzJi79pYPlhhR-6ArGxcmvv2igr?100X20&imageView2/1/w/100/h/20" />
              </div>
              <div onClick={this.backTop} style={this.state.style} onScroll={this.onTop} className="s1f2212b0">
                  <div className="s-5fa9d340">
                      <img src="https://image.hongbeibang.com/FrIiahAq_aEalPRiQP09YjhM9was?80X80&imageView2/1/w/80/h/80" alt="" className="s50781348" />
                  </div>
              </div>
          </div>
      </div>
  )
  }

}

function mapStateToProps(state) {
  return {
      masterArr: state.circleReducer.masterArr
  }
}
function mapDispatchToProps(dispatch) {
  return {
      getMasterNew(pageIndex = 1) {
          dispatch(async () => {
              const { data } = await this.$axios.get("/feed/getMasterNew", {
                  params: {
                      pageIndex: 1,
                      pageSize: 10
                  }
              })
              dispatch({
                  type: "GET_MASTER_NEW",
                  payload: {
                      masterArr: data.content.data
                  }
              })
          })
      },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Super);