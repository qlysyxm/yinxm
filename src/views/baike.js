import React from 'react'
import {connect} from 'react-redux'
import "../assets/style/baike.scss"
class Baike extends React.Component{
  componentDidMount(){
    this.props.getBaiKeList.call(this)
  }
  render(){
    console.log('hahahaha',this.props)
    return(
      <div className="s-24e4eed8">
                      <div className="s30153804">
                          <span onClick={()=>{
                              this.props.history.push("/")
                          }} className="s-3613cfc6">
                              <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" className="s-6a5cf0dc" />
                          </span>
                      </div>
          <div className="s-66cfde8a">
          <div style={{height:"44px"}}></div>
                          {
                            this.props.baikeList.map((v,i)=>(
                              <div key={i} className="s-5958ce6f">
                                  <div className="s-66e3c4e5">
                                      <img src={v.image} alt="" className="s5541079b" />
                                      <div className="s-f7ee01f">{v.title}</div>
                                  </div>
                              </div>
                          ))
                          }
          </div>

      </div>
    )
  }
}


function mapStateToProps(state){
  return {
      baikeList:state.recipeReducer.baike,
      
  }
}
function mapDispatchToProps(dispatch){
  return {
      // https://api.hongbeibang.com/education/getNewbieGuide?type=5&_t=1575195219535&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDU2NDMyOCwiaWF0IjoxNTc1MTc1NTI4fQ.uEMJ417IlEVD-n4ee7_3qxHB1GxRuEnyjwM-LzVAPwA
      getBaiKeList(){
          dispatch(async (dispatch)=>{
              const {data} = await this.$axios.get("/education/getNewbieGuide?type=5&_t=1575195219535&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc2NDU2NDMyOCwiaWF0IjoxNTc1MTc1NTI4fQ.uEMJ417IlEVD-n4ee7_3qxHB1GxRuEnyjwM-LzVAPwA")
              dispatch({
                  type:"GET_BAIKE_LIST",
                  payload:{
                      baike:data.courseGuide
                  }
              })
          })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Baike);