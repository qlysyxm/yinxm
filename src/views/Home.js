import React from 'react'
import '../App.css'
import Tabbar from '../components/Tabbar'
import {connect} from 'react-redux'
import "../assets/style/home/home.scss"
class Home extends React.Component{
  render(){
    return(
      <div>
        <Tabbar changeTabNum={this.props.changeTabNum.bind(this)} tabNum = {this.props.tabNum}></Tabbar>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    tabNum:state.lesson.tabNum
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeTabNum(num){
      dispatch({
        type:"CHANGE_TAB_NUM",
                payload:{
                    tabNum:num
                }
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)