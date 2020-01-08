import React from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "../assets/style/search/search.scss"
class Search extends React.Component{
  componentDidMount(){
    this.props.getHotType.call(this)
}
  render(){
    return(
      <div id="wrap">
        <div className="header">
                    <span className="exit">
                        <img onClick={()=>{
                            this.props.history.push("/")
                        }} src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?27X27&imageView2/1/w/27/h/27" alt="" />
                    </span>
                    <div className="search">
                        <div className="searchBtn">
                            <span className="image">
                                <img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt="" />
                            </span>
                            <span className="intro">搜索食谱/食材，烘焙/家常菜一应俱全</span>
                        </div>
                    </div>
                    <span className={"sousuo"}>搜索</span>
                </div>
                <div className="hot-search">
                    <div className="kong"></div> 
                    <div className="hot" data-reactid=".1aeqxibx6lg.1.0.2.0">
                        热门搜索
                    </div>
                </div>
            <div className="s-4a3ee475">
                  {
                        this.props.searchReducer.map(v=>(
                            <div className="s-342c6019" key={v.popularSearchId}>
                                <Link to={"/recipeList/"+v.keyword}>
                                    {v.keyword}
                                </Link>
                            </div> 
                        ))
                    }

            </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return {
      getHotType(){
          dispatch(async (dispatch)=>{
              const {data} = await this.$axios.get("/keyword/detail")
              dispatch({
                  type:"GET_HOT_TYPE",
                  payload:{
                      popularSearch:data.popularSearch
                  }
              })
          })
       }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);