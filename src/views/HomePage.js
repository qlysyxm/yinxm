import React from "react";
import "../assets/style/home/homepage.scss";
import { connect } from "react-redux";
import LessonList from "../components/LessonList";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            isHidden: false
        }
    }
    render() {
        return (
            !this.state.isHidden ? <div id="homepage">
                {/* 头部 */}
                <div className="header">
                    <span className="icon msg">
                        <img onClick={() => {
                            this.setState({
                                isHidden: true
                            })
                        }} src="https://image.hongbeibang.com/Fj1u8rBVnt5DLwXqhx8QKlRPLoGI?48X48&imageView2/1/w/48/h/48" alt="" />
                    </span>
                    <div className="search">
                        <div className="searchBtn" onClick={() => {
                            this.props.history.push("/search");
                        }}>
                            <span>
                                <img src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&imageView2/1/w/42/h/42" alt="" />
                            </span>
                            <span className="intro">搜索食谱/食材，烘焙/家常菜一应俱全</span>
                        </div>
                    </div>
                    <span className="icon add">
                        <img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
                    </span>
                </div>
                {/* daoh导航 */}
                <div className="guide">
                    {
                        this.props.lesson.homeNav.map(v => (
                            <Link to={v.link} key={v.categoryItemId} className="classify">
                                <img src={v.image} alt="" />
                                <span>{v.title}</span>
                            </Link>
                        ))
                    }
                </div>
                {/* 列表展示 */}
                <div className="showList">
                    <div className="listTitle">
                        <div className="title">推荐课程</div>
                    </div>
                    <div className="swiper">
                        {
                            this.props.lesson.randContent.map(v => (
                                <div key={v.contentId} className="swiper-wrapper" onClick={() => {
                                    this.props.history.push({ pathname: "/lesson", state: { educationCourseId: v.courseId } })
                                }}>
                                    <img src={v.coverImage} alt="" />
                                    <div className="learnNum">
                                        <span>1000+</span>
                                        <span>在学</span>
                                    </div>
                                    <div className="lessonTitle">{v.coverTitle}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <LessonList props={this.props} lessonList={this.props.lesson.lessonList}></LessonList>

            </div> : <div className="s-2fb3c188">
                    <img onClick={() => {
                        this.setState({
                            isHidden: false
                        })
                    }} alt="" src="https://image.hongbeibang.com/FvpCr89mpooArX7SM26_s5CqdeNL?imageMogr2/strip/thumbnail/640x640" className="s124b1917" />
                    <img alt="" src="https://image.hongbeibang.com/Fnz_NOU0VlNn-t_hLcXFbatBze_C?imageMogr2/strip/thumbnail/640x640" className="s-1753dc68" />
                    <img alt="" src="https://image.hongbeibang.com/FtUJvHaECXwl58x67bktx4KSjnym?imageMogr2/strip/thumbnail/640x640" className="s-38d3dc9e" />
                    <div className="s66c0170c">上传食谱</div>
                    <div className="s79ca1740">上传作品</div>
                    <div className="s2944d4d">
                        <div className="s-4c7dd5ed">
                            <span>草稿箱</span>
                        </div>
                    </div>
                </div>
        )
    }
    componentDidMount() {
        this.props.getRandContent.call(this);
        this.props.getNav.call(this);
        this.props.getLessonList.call(this);
    }
}


function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        async getNav() {
            const data = await this.$axios.get("/index/get?_t=1574576658462&csrfToken=");
            dispatch({
                type: "CHANGE_HOME_NAV",
                payload: {
                    homeNav: data.data.category[0].item
                }
            })
        },
        async getRandContent() {
            const data = await this.$axios.get("/recommend/getRandContent?_t=1574576658707&csrfToken=&type=3&pageSize=10");
            dispatch({
                type: "CHANGE_RAND_CONTENT",
                payload: {
                    randContent: data.data.data
                }
            })
        },
        async getLessonList() {
            const data = await this.$axios.get("/education/getIndexByWeb?_t=1574577563748&csrfToken=");
            dispatch({
                type: "CHANGE_LESSON_LIST",
                payload: {
                    lessonList: data.data.category
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);