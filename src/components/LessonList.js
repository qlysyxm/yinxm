import React from "react";
export default class LessonList extends React.Component{
    render(){
        console.log("xixixixixixixi",this.props)
        return (
            <div>
                {
                    this.props.lessonList.map((v,i)=>{
                        if(i !== 0){
                            return (
                            <div key={v.categoryId} className="showList">
                                <div className="listTitle">
                                    <div className="title">{v.title}</div>
                                    <div className="more">查看全部</div>
                                </div>
                                <div className="swiper" >
                                {
                                    v.item.map(u=>(
                                        <div key={u.categoryItemId} onClick={()=>{
                                            this.props.props.history.push({pathname:"/lesson",state:{educationCourseId:u.educationCourseId}})
                                        }} className="swiper-wrapper">
                                            <img src={u.image} alt=""/>
                                            <div className="learnNum">
                                                <span>1000</span>
                                                <span>在学</span>
                                            </div>
                                            <div className="lessonTitle">{u.title}</div>
                                        </div>    
                                    ))
                                }
                                </div> 
                            </div>
                            )
                        }else{
                            return "";
                        }
                    })
                    
                }
            </div>
        )
    }
}