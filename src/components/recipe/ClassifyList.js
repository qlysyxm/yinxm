import React from "react";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
class ClassifyList extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.classifyList.list.length > 0 ? this.props.classifyList.list.map(v=>( 
                    <div key={v.classifyId} className="right-box">
                        <div className="title-box">
                            <div>{v.name}</div>
                        </div>
                        <div className="recipes">
                            {
                                v.list.map(u=>(
                                <Link key={u.classifyId} className="recipe-link" to={"/recipeList/"+u.name}>
                                    <div className="pic-box">
                                        <img src={u.image} alt="" />
                                    </div>
                                    <div className="pic-name">{u.name}</div>
                                </Link>
                                ))
                            }
                            
                        </div>
                    </div>
                    )) : ""
                }
            </div>
        )
    }
}

export default withRouter(ClassifyList);