import React from "react"

import {Route,NavLink} from 'react-router-dom'
import HomePage from "../views/HomePage"
import {withRouter} from 'react-router-dom'
import My from '../views/my/My.js'
class Tabbar extends React.Component{
  constructor(){
    super();
    this.state = {
      index:0
    }
  }

  render(){
    return(
      <div id="tabbar">
        <Route path={"/my"} component = {My}></Route>
        <Route path={"/"} component={HomePage} exact={true}></Route>
        <nav>
        <NavLink className={"App-link"} onClick={()=>this.props.changeTabNum(0)} activeClassName={"App-active"} to={"/"} exact>
                        {
                            this.props.tabNum === 0 ? <img src="https://image.hongbeibang.com/54FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50" alt="" /> : <img src="https://image.hongbeibang.com/FhngZoiK_s7Zw4K3DxLogRfqoO06?50X50&imageView2/1/w/50/h/50" alt="" />
                        }
                        <span>学烘焙</span>
                    </NavLink>
                    <NavLink className={"App-link"} onClick={()=>this.props.changeTabNum(1)} activeClassName={"App-active"} to={"/show"}>
                        {
                            this.props.tabNum === 1 ? <img src="https://image.hongbeibang.com/Flc4c0tB_BGGFnA-ORFowqfNOpaD?50X50&imageView2/1/w/50/h/50" alt="" /> : <img src="https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50" alt="" />
                        }
                        <span>烘焙圈</span>
                    </NavLink>
                    <NavLink className={"App-link"} onClick={()=>this.props.changeTabNum(2)} activeClassName={"App-active"} to={"/questionAndAnswer"}>
                        {
                            this.props.tabNum === 2 ? <img src="https://image.hongbeibang.com/Fj5pW1jZYwlS9rB3h_nsvXNptuPX?50X50&imageView2/1/w/50/h/50" alt="" /> : <img src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50" alt="" />
                        }
                        <span>问答</span>
                    </NavLink>
                    <NavLink className={"App-link"} onClick={()=>this.props.changeTabNum(3)} activeClassName={"App-active"} to={"/login"}>
                        {
                            this.props.tabNum === 3 ? <img src="https://image.hongbeibang.com/FpNSY800vY0I5ytvWaqDbdJqT0HR?50X50&imageView2/1/w/50/h/50" alt="" /> : <img src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50" alt="" />
                        }
                        <span>小窝</span>
                    </NavLink>
        </nav>
      </div>
    )
  }
}
export default withRouter(Tabbar);