import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import 'lib-flexible';
import tools from './filters'
//axios路由拦截
axios.interceptors.request.use(function(config){
  config.url = "/h" + config.url
  return config
})
axios.interceptors.response.use(function({data}){
  return data
})
React.Component.prototype.$axios = axios
React.Component.prototype.$tools = tools

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

serviceWorker.unregister();