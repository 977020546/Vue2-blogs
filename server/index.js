//搭建express服务
const express = require("express");
const app = express();
//post 请求表单数据
app.use(express.urlencoded({ extended: true }));

// 静态文件托管 访问：http:localHost:8899
app.use(express.static("upload"));

const router = require("./router");
//路由
app.use("/", router);

app.listen(8899, () => {
  console.log(8899);
});
