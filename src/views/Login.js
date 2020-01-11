import React from "react";
import "../assets/style/login.scss";

class Login extends React.Component{
    render(){
        return (
            <div id="login">
                <div className="header">
                    <div className="title">
                        <span style={{float:"left"}} onClick={()=>{
                            this.props.history.push("/")
                        }}>
                            <img alt="" src="https://image.hongbeibang.com/FlqyNFosCk9hhyBMoPkej9xbh_Yf?imageView2/1/w/50/h/50" />
                        </span>
                        <ul>登录</ul>
                    </div>
                    <div className="empty"></div>
                </div>
                <div className="pic-box">
                    <img alt="" src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510" />
                </div>
                <div className="loginBtn">
                    <div onClick={()=>{
                        localStorage.username = "zhangsan";
                        const state = this.props.location.state || {path:"/my"};
                        const path = state.path;
                        if(state.query){
                            this.props.history.push({pathname:path,state:{educationCourseId:state.query.educationCourseId}});
                        }else{
                            this.props.history.push(path);
                        }
                        
                    }}>使用微信登录</div>
                </div>
                <div className="way">其他登录方式</div>
                <div className="limit">
                    <span>登录即代表阅读并同意</span>
                    <span className="red">服务条款</span>
                </div>
            </div>
        )
    }
}

export default Login;