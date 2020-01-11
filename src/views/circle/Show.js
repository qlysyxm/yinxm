import React from 'react'
import "../../assets/style/circle/circle.scss"
import News from '../../components/Circle/News'
import Attention from '../../components/Circle/Attention'
import Super from '../../components/Circle/super'
class Show extends React.Component{
 constructor(){
   super()
   this.state={
     index:1,
     isHidden:false
   }
 }
 render(){
   return(
    !this.state.isHidden?<div id="circle">
       <div className="box">
         <img alt="" onClick={()=>{
           this.setState({isHidden:true})
         }} src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48"/>
         <div className="hahaha">
            <div className="s-36fcafd9">
                <span
                style={{color: this.state.index === 0 ? "black" : null, fontWeight: this.state.index === 0 ? "650" : "normal" }}
                onClick={()=>{
                  this.setState({index:0})
                }}
                >
                关注
                </span>
                <h1 className={this.state.index === 0 ? "line" : "normal"}>
                </h1>
            </div>
            <div className="s-36fcafd9">
                <span
                style={{color: this.state.index === 1 ? "black" : null, fontWeight: this.state.index === 1 ? "650" : "normal" }}
                onClick={()=>{
                  this.setState({index:1})
                }}
                >
                最新
                </span>
                <h1 className={this.state.index === 1 ? "line" : "normal"}>
                </h1>
            </div>
            <div className="s-36fcafd9">
                <span
                style={{color: this.state.index === 2 ? "black" : null, fontWeight: this.state.index === 2 ? "650" : "normal" }}
                onClick={()=>{
                  this.setState({index:2})
                }}
                >
                达人
                </span>
                <h1 className={this.state.index === 2 ? "line" : "normal"}>
                </h1>
            </div>
         </div>
         <img alt="" src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" />
       </div>
       <div className="tab">
         {
           this.state.index===1 ? <News this={this}></News>:(this.state.index === 0 ? <Attention this={this}></Attention> : <Super this={this}></Super>)
         }
       </div>
     </div>:<div className="s-2fb3c188">
            <img onClick={()=>{
                 this.setState({
                    isHidden:false
                })
            }} alt="" src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640" className="s124b1917"/>
            <img alt="" src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640" className="s-1753dc68"/>
            <img alt="" src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640" className="s-38d3dc9e"/>
            <div className="s66c0170c">上传食谱</div>
            <div className="s79ca1740">上传作品</div>
            <div className="s2944d4d">
                <div className="s-4c7dd5ed">
                    <span>草稿箱</span>
                </div>
            </div>
        </div>
   )
 }}

 export default Show;