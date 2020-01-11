import React from "react"
import "../../assets/style/intercalate/intercalate.scss"
export default class intercalate extends React.Component{
    render(){
        return (
            <div className="s-2a2de021">
                <div className="one">
                    <div className="s30153804">
                        <span className="s-3613cfc6">
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" onClick={()=>{
                                this.props.history.go(-1)
                            }} alt="" className="s-6a5cf0dc" />
                        </span>
                        <div className="s-457b7fc4">设置</div>
                    </div>
                </div>
                <div className="s-45d5da6b">
                    <div style={{height:"44px",backgroundColor:"rgba(231, 226, 229, 0.561)"}}></div>
                    <div className="s-4e9ce458">
                        <div className="s-2cb1a2bb">
                            <span>个人设置</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                        <div className="s-2cb1a2bb">
                            <span>账号设置</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-45d5da6b">
                    <div className="s-4e9ce458">
                        <div className="s-2cb1a2bb">
                            <span>个人设置</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                        <div className="s-2cb1a2bb">
                            <span>意见反馈</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                        <div className="s-2cb1a2bb">
                            <span>用户守则</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                        <div className="s-2cb1a2bb">
                            <span>关于我们</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                        <div className="s-2cb1a2bb">
                            <span>商务合作</span>
                            <div className="s68961cd4">
                                <img src='https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46' alt="" className="s-34f4f4a1" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="s63182a21" onClick={()=>{
                    localStorage.removeItem("username");
                    this.props.history.push("/")
                }}>
                    <div className="s-680604cd yellowE9Square" style={{margin:"20px auto",fontSize:"16px",width:"100%",height:"40px",lineHeight:"38px"}}>退出登录</div>
                </div>
            </div>
        )
    }
}