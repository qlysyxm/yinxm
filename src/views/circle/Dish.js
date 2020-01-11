import React from 'react'
import {
  connect
} from "react-redux"
import '../../assets/style/circle/work.scss'
class Dish extends React.Component{
  constructor() {
    super();
    this.state = {
        index: 0,
        commontArr:[]
    }
}
componentDidMount() {
  this.props.getDish.call(this)
  this.props.getFloor.call(this)
}
  render(){
    console.log('租聘',this.props)
    return(
      <div id="works">
        <div className="title">
                    <div className="s30153804">
                        <span onClick={() => {
                            this.props.history.goBack()
                        }} className="s-3613cfc6">
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" className="s-6a5cf0dc" />
                        </span>
                        <ul className="s-457b7fc4">
                            作品
                        </ul>
                    </div>
                    <div className="s7e1f0f36">

                    </div>
                </div>
                <div className="s-45edce8e">
                    <div className
                        ="s-6c23e4ee">
                        <div className="s214e0dbe">
                            <div className="s-680604cd yellowE9Border">
                                + 关注
                            </div>
                            <div className="s305819ac">
                                <div className="s-1c89ddc8">
                                    <img src={this.props.dish.clientImage} alt="" className="s33fa2c34" />
                                </div>
                            </div>
                            <div className="s-772fec03">
                                <div className="s3db153a2">
                                    {this.props.dish.clientName}
                                </div>
                            </div>
                            <div className="s4a015b5d">
                                <span>1分钟前</span>
                                <span className="s7ba00fa8">{this.props.dish.coverTitle}</span>
                            </div>
                        </div>
                        <div className="s60b56aea">
                            {this.props.dish.coverSummary}
                        </div>
                        <div className="s-368ce4c7">
                            <div className
                                ="s-1f31d5de">
                                {
                                    this.props.dish.image ?
                                        this.props.dish.image.map((v, i) => (
                                            <img key={i} style={{ width: "110px", height: "110px" }} src={v} alt="" className="s6a691709" />
                                        )) : null
                                }
                            </div>
                        </div>
                        <div className="s124b1911">
                            55次浏览
                        </div>
                        <div className="s-721cdb4f">
                            <div className="s255c3063">
                                <span>找食谱</span>
                                <span className="s5ec70e50">
                                    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/50/h/50" alt="" className="s-34f4f4a1" />

                                </span>
                            </div>
                            <div className="s65173868">

                            </div>
                        </div>
                    </div>
                    <div className="s3c93223e">
                        <div style={{ float: "right" }} className={this.state.index === 0 ? "s-2550ae83 active" : "s-2550ae83"}>
                            <span onClick={() => {
                                this.setState({
                                    index: 0
                                })
                            }}>评论</span>
                            <div className={this.state.index === 0 ? "s9b31ec9" : null}></div>
                        </div>
                        <div style={{ marginRight: "40px" }} className={this.state.index === 1 ? "s-2550ae83 active" : "s-2550ae83"}>
                            <span onClick={() => {
                                this.setState({
                                    index: 1
                                })
                            }}>点赞 {this.props.dish.likeNum}</span>
                            <div className={this.state.index === 1 ? "s9b31ec9" : null}></div>
                        </div>
                        <div style={{ marginRight: "0px" }} className={this.state.index === 2 ? "s-2550ae83 active" : "s-2550ae83"}>
                            <span onClick={() => {
                                this.setState({
                                    index: 2
                                })
                            }}>打赏 {this.props.dish.rewardNum}</span>
                            <div className={this.state.index === 2 ? "s9b31ec9" : null}></div>
                        </div>
                    </div>
                    {
                        this.state.index === 0 ? this.state.commontArr.length > 0 ? this.state.commontArr.map(v=>(
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
                            )) : <div className="s7253262d">快来发表你的评论吧</div> : null
                    }
                    {
                        this.state.index === 2 ? <div className="s410421c8">
                            {
                                this.props.dish.rewardDishClient.length > 0 ? this.props.dish.rewardDishClient.map((v, i) => (
                                    <div key={i} className="s592d142f">
                                        <div className="s77121726">
                                            <div className="s-1c89ddc8">
                                                <img alt="" src={v.image} className="s33fa2c34" />
                                            </div>
                                        </div>
                                        <div className="s-7e6ed0d4">
                                            <div className="s5b8f48aa">
                                                {v.name}
                                            </div>
                                        </div>
                                    </div>
                                )) :  <div className="s7253262d">打赏一下吧</div>
                            }
                        </div> :null
                    }
                    {
                        this.state.index === 1 ? <div className="s410421c8">
                            {
                                this.props.dish.likeDishClient.length > 0 ? this.props.dish.likeDishClient.map((v, i) => (
                                    <div key={i} className="s592d142f">
                                        <div className="s77121726">
                                            <div className="s-1c89ddc8">
                                                <img alt="" src={v.image} className="s33fa2c34" />
                                            </div>
                                        </div>
                                        <div className="s-7e6ed0d4">
                                            <div className="s5b8f48aa">
                                                {v.name}
                                            </div>
                                        </div>
                                    </div>
                                )) : null
                            }
                        </div> : null
                    }
                </div>
                <div className="s-5938bd91">
                    <div className="s-3d94b53c">
                        <div className="s4a692571">
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/48/h/48" alt="" className="s-34f4f4a1" />
                        </div>
                        <div className="s70932adf">
                            点赞 {this.props.dish.likeNum}
                        </div>
                    </div>
                    <div className="s-3d94b53c">
                        <div className="s4a692571">
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/48/h/48" alt="" className="s-34f4f4a1" />
                        </div>
                        <div className="s70932adf">
                            打赏 {this.props.dish.rewardNum}
                        </div>
                    </div>
                    <div className="s-3d94b53c">
                        <div className="s4a692571">
                            <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/48/h/48" alt="" className="s-34f4f4a1" />
                        </div>
                        <div className="s70932adf">
                            评论
                        </div>
                    </div>
                </div>
      
      </div>
   )
  }
}
function mapStateToProps(state) {
  return {
      dish: state.circleReducer.dish
  }
}
function mapDispatchToProps(dispatch) {
  return {
      getDish() {
          dispatch(async () => {
              const contentId = this.props.match.params.id;
              const { data } = await this.$axios.get("/dish/get", {
                  params: {
                      contentId
                  }
              })
              dispatch({
                  type: "GET_DISH",
                  payload: {
                      dish: data.dish
                  }
              })
          })
      },
      getFloor() {
          dispatch(async () => {
              const contentId = this.props.match.params.id;
              const { data } = await this.$axios.get("/comment/getFloor?_t=1575173207752&csrfToken=&pageIndex=0&pageSize=10", {
                  params: {
                      contentId
                  }
              });
              this.setState({
                  commontArr:this.$tools.commontArr(data)
              });
          })
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dish);