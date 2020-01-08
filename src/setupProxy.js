
const proxy = require("http-proxy-middleware")
module.exports = function(app){
  app.use("/h",proxy({
    target:"https://api.hongbeibang.com",
    changeOrigin:true,
    pathRewrite:{
      "^/h":""
    }
  }))
  

}