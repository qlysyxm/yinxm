import React from 'react';
import "./assets/style/reset.css"
import {Route,Switch} from 'react-router-dom'
import Home from './views/Home'
import Search from "./views/Search";
import Baike from './views/baike'
import University from './views/lesson/University'
import Lesson from './views/lesson/Lesson'
function App() {
  return (
    /* 
            login   登录
            classify  分类
            university  视频课堂
            search  搜索
            recipt  食谱详情
            lesson  视频课程详情
            recipeList  搜索食谱列表
            question  问答详情
            answer  精华问答详情
            dish  作品详情
            bakingCircle  标签查询列表 
            activity 日常活动页面
            intercalate  设置页面
            baike   百科页面
            /  首页
        */
    <div>
      <Switch>
        <Route path={"/lesson"} component={Lesson}></Route>
       <Route path={"/university"} component={University}></Route>
       <Route path={"/baike"} component={Baike}></Route>
       <Route path={"/search"} component={Search}></Route>
       <Route path={"/"} component={Home}></Route>
      </Switch>  
    </div>
  );
}

export default App;
