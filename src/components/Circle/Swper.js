import React from 'react'
import {connect} from 'react-redux'
import "../../assets/style/circle/swiper.scss"
class New extends React.Component{
  componentDidMount(){
    this.props.getSwiperPic.call(this);
    this.props.getTag.bind(this)();
  }
  render(){
    return(
      <div className="swiper">
        <div className="top_header">
          <div className="big">
            {
              this.props.swiperArr.map((v,i)=>(
                <div  key={i} className="img">
                                     <img onClick={()=>{
                                        this.props.this.props.this.props.history.push("/activity/"+v.activityContentId)
                                    }} alt="" src={v.image} />
                </div>
              ))
            }

          </div>

        </div>
        <div className="bottom_header">
                    <div className="bottom_inner">
                        <div className="inner">
                            {
                                this.props.menuList.map((v,i) => (
                                    <div style={{background:this.props.color[i]}} key={v.communityId} className="little">
                                        {v.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div> 
      </div>
    )

  }
}
function num (state){
  return{
   swiperArr:state.circleReducer.swiperArr,
   menuList:state.circleReducer.menuList,
   color:state.circleReducer.color
  }
}

function map(dispatch){
  return{
     async getSwiperPic() {
       const {data} = await this.$axios.get("/feed/getCategory")
       dispatch({
        type: "SWIPER_PIC",
        payload: {
            swiperArr: data.category[0].item
        }
       })
     },
     async  getTag() {
      const { data } = await this.$axios.get("/community/getByLimit", {
        params: {
            isShow: 4,
            pageIndex: 0,
            pageSize: 100
        }
    })
      dispatch({
        type: "MENU_LIST",
        payload: {
            menuList: data.data
        }
       })
     }
  }
}
export default connect(num,map)(New);