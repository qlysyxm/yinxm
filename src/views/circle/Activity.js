import React from 'react'
import {
  connect
} from "react-redux"
import "../../assets/style/circle/activity.scss"
class Activity extends React.Component{
  componentDidMount() {
    this.props.getActivity.bind(this)();
    this.props.getClientComponent.bind(this)()
  }
  render(){
    return(
      <div id="activity">
          <div className="title">
              <div className="s30153804">
                  <span onClick={() => {
                      this.props.history.push("/")
                  }} className="s-3613cfc6">
                      <img alt="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" className="s-6a5cf0dc" />
                  </span>
                  <ul className="s-457b7fc4">日常活动</ul>
              </div>
              <div className="s7e1f0f36">

              </div>
          </div>
          <div className="s607d28ec">
              <img alt="" className="s-34f4f4a1" src="https://image.hongbeibang.com/FrEr8OKk2-1cpaVbDOJnzBRgd69p?1280X649&imageView2/1/w/750/h/380" />
              <div className="s-42765811">
                  {
                      <div dangerouslySetInnerHTML={{ __html: this.props.activity.activityIntroduce}}></div>
                  }
              </div>
          </div>
          <div className="s4e5525b4">
              参与活动即可获得幸运数字
          </div>
          <div className="s-24aade5d">
              {
                  this.props.activityClient.map((v, i) => (
                      <div key={i} className="s-1ae8c2ff">
                          <div className="s-37f5b446">
                              <a href=" " className="s4d160f27 s-69a5dfd7">
                                  <img className="s-34f4f4a1" alt="" src={v.coverImage} />
                              </a>
                              <div className="s-4295eabb">
                                  <div className="s-2a8eeac4">
                                      <div className="s-1c89ddc8">
                                          <img className="s33fa2c34" alt="" src={v.clientImage} />
                                      </div>
                                  </div>
                                  <div className="s59d348a6">
                                      {v.clientName}
                                  </div>
                                  <div className="s60b548b1">

                                  </div>
                              </div>
                              <a href="/dish/14900329" className="s4d160f27 s4e3b5ad5">

                              </a>
                          </div>
                      </div>
                  ))
              }

          </div>
          <div className="s-13b89451">
              <div className="s-4608e342">
                  <div className="s2da91ad7">
                      <img alt="" src="https://image.hongbeibang.com/FmfaImJDbA60cyxn5DzeaBjeeP_D?94X94&imageView2/1/w/50/h/50" className="s-34f4f4a1" />
                  </div>
                  <div className="sde2224">
                      我的幸运号码
                  </div>
              </div>
              <div className="s-4608e342">
                  <div className="s2da91ad7">
                      <img alt="" src="https://image.hongbeibang.com/Fkk-p0XGo61PfXrgcYA5Scu07BQg?200X200&imageView2/1/w/50/h/50" className="s-34f4f4a1" />
                  </div>
                  <div className="sde2224">
                      参与活动
                  </div>
              </div>
          </div>
          <div className="s-5a9af5c5">
              <div className="s7cc41d84">
                  <img alt="" src="https://image.hongbeibang.com/FhzJi79pYPlhhR-6ArGxcmvv2igr?100X20&imageView2/1/w/100/h/20" className="s-6141e7fc" />
              </div>
              <div className="s1f2212b0">

              </div>
          </div>
          <div className="s51620713">

          </div>
      </div>
  )
  }
}
function mapStateToProps(state) {
  return {
      activity: state.circleReducer.activity,
      activityClient: state.circleReducer.activityClient
  }
}
function mapDispatchToProps(dispatch) {
  return {
      getActivity() {
          dispatch(async (dispatch) => {
              const contentId = this.props.match.params.id
              const { data } = await this.$axios.get("/activity/getComponent", {
                  params: {
                      contentId
                  }
              })
              dispatch({
                  type: "GET_ACTIVITY",
                  payload: {
                      activity: data.activity
                  }
              })
          })
      },
      getClientComponent() {
          dispatch(async () => {
              const contentId = this.props.match.params.id
              if (contentId !== "0") {
                  const { data } = await this.$axios.get("/activity/getComponent", {
                      params: {
                          pageIndex: 0,
                          pageSize: 10,
                          contentId
                      }
                  })
                  const activityClient = data.activity.component.data
                  dispatch({
                      type: "GET_CLIENT_COMPONENT",
                      payload: {
                          activityClient
                      }
                  })
              }else{
                  return false
              }
          })
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)