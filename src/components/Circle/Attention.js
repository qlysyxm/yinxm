import React from 'react'
import "../../assets/style/circle/attention.scss"
class Attention extends React.Component{
//   UNSAFE_componentWillMount(){
//     console.log(this.props.this.props,666);
//     if(!localStorage.username){
//         this.props.this.props.history.push({pathname:"/login",state:{path:this.props.this.props.match.path}})
//     }
// }
  render(){
    return(
      <div id="attention">
                <div className="s-45edce8e">
                    <div className="s-c56e13a">
                        暂无关注
                    </div>
                </div>
            </div>
    )
  }
}

export default Attention;