import React from "react";
import "../../assets/style/my/my.scss"
class My extends React.Component{
    UNSAFE_componentWillMount(){
        if(!localStorage.username){
            this.props.history.push({pathname:"/login",state:{path:this.props.match.path}})
        }
    }
    render(){
        return (
            <div className="s-4b17eb37">
                <div className="one">
                    <div className="s30153804">
                        <span onClick={()=>{
                            this.props.history.push("/intercalate")
                        }} className="s-3613cfc6" style={{float:"right"}}>
                            <img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" alt="" className="s-6a5cf0dc" />
                        </span>
                    </div>
                    <div className="vs7e1f0f36"></div>
                </div>
                <div className="two">
                    <div style={{height:"44px"}}></div>
                    <div className="s-86ee15c">
                        <div className="s623419f9">
                            <div className="s-1c89ddc8">
                                <img src="https://image.hongbeibang.com/FjA_rtjWt3AbNEr1ThW5w_eONKrg?132X132&imageView2/1/w/132/h/132" alt="" className="s33fa2c34" />
                            </div>
                        </div>
                        <div className="s-2325e9ee">
                            <div className="s898183f">
                                <div className="s7cc32b69"></div>
                                <div className="s-2839e077">
                                    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-34f4f4a1" />
                                </div>
                            </div>
                            <div className="s671d088c">
                                <span className="s-538193fa">咋地啦</span>
                                <span className="s327c293d"></span>
                                <span className="s6af525a3">
                                    <img src="https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50" alt="" className="s-34f4f4a1" />
                                </span>
                            </div>
                            <div className="s-436e853">ID：n3i620191201124540921</div>
                            <div className="s-48e6e3cc">
                                <div className="s-603e44e">经验值：0/100</div>
                                <div className="s-3b3bd440">
                                    <div className="s-cd4d39e" style={{width:"0%"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="s754429f8">
                            <div className="s2ca2514e">
                                <div className="s-3c01e14a">0</div>
                                <div className="s-766eee6">关注</div>
                            </div>
                            <div className="s2ca2514e">
                                <div className="s-3c01e14a">0</div>
                                <div className="s-766eee6">粉丝</div>
                            </div>
                            <div className="s2ca2514e" style={{borderRight:"none"}}>
                                <div className="s-3c01e14a">0</div>
                                <div className="s-766eee6">帮贡</div>
                            </div>
                        </div>
                    </div>
                    <div className="s-1522ea4a">
                        <div className="s-44bd411">
                            <div className="s-720e086">
                                <img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80" alt="" className="s-7615f084" />
                            </div>
                            <div className="s100e1111">作品</div>
                        </div>
                        <div className="s-44bd411">
                            <div className="s-720e086">
                                <img src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80" alt="" className="s-7615f084" />
                            </div>
                            <div className="s100e1111">食谱</div>
                        </div>
                        <div className="s-44bd411">
                            <div className="s-720e086">
                                <img src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80" alt="" className="s-7615f084" />
                            </div>
                            <div className="s100e1111">收藏</div>
                        </div>
                        <div className="s-44bd411">
                            <div className="s-720e086">
                                <img src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80" alt="" className="s-7615f084" />
                            </div>
                            <div className="s100e1111">问题</div>
                        </div>
                    </div>
                    <div className="three" style={{marginTop:"10px",marginBottom:"10px"}}>
                        <div className="s1c341519">
                            <div className="s-4c67c0d7">
                                <div className="s-2d0bd9c2">
                                    <img src ="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                                </div>
                                <div className="s283a207c">
                                    <div className="sfea1111">勋章库</div>
                                </div>
                                <div className="s-3a92e209">
                                    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                                </div>
                            </div>
                            <div className="s-4c67c0d7">
                                <div className="s-2d0bd9c2">
                                    <img src ="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                                </div>
                                <div className="s283a207c">
                                    <div className="sfea1111">精彩活动</div>
                                </div>
                                <div className="s-3a92e209">
                                    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                                </div>
                            </div>
                            <div className="s-4c67c0d7">
                                <div className="s-2d0bd9c2">
                                    <img src ="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                                </div>
                                <div className="s283a207c">
                                    <div className="sfea1111">每日签到</div>
                                </div>
                                <div className="s-3a92e209">
                                    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                                </div>
                            </div>
                            <div className="s-4c67c0d7">
                                <div className="s-2d0bd9c2">
                                    <img src ="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                                </div>
                                <div className="s283a207c">
                                    <div className="sfea1111">我的课程</div>
                                </div>
                                <div className="s-3a92e209">
                                    <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s1c341519">
                        <div className="s-4c67c0d7">
                            <div className="s-2d0bd9c2">
                                <img src ="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                            </div>
                            <div className="s283a207c">
                                <div className="sfea1111">浏览记录</div>
                            </div>
                            <div className="s-3a92e209">
                                <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                            </div>
                        </div>
                        <div className="s-4c67c0d7">
                            <div className="s-2d0bd9c2">
                                <img src ="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                            </div>
                            <div className="s283a207c">
                                <div className="sfea1111">达人申请</div>
                            </div>
                            <div className="s-3a92e209">
                                <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                            </div>
                        </div>
                        <div className="s-4c67c0d7">
                            <div className="s-2d0bd9c2">
                                <img src ="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48" alt="" className="s-7615f084" />
                            </div>
                            <div className="s283a207c">
                                <div className="sfea1111">帮贡兑换</div>
                            </div>
                            <div className="s-3a92e209">
                                <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt="" className="s-7615f084"/>
                            </div>
                        </div>
                        <div style={{height:"50px"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default My;