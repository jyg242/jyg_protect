var express=require('express');
var app=express();
//1.创建服务器
app.listen(3000,()=>{
    console.log('服务器创建成功')
})
//2.静态资源托管
app.use(express.static('./static'))