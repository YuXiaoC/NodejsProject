//把模块封装成模块
const express = require('express');
//引入其他单独路由模块
const  usersRouter = require('./users');
const  goodsRouter = require('./goods');
const  categoryRouter = require('./category');
const  uploadRouter = require('./upload');
let Router = express.Router();
// app.get('./home',(req,res)=>{});
Router.get('/home',(req,res)=>{
    res.send('Home');
 });
//关于用户的路由
Router.use('/users',usersRouter);
//关于商品列表路由
Router.use('/goods',goodsRouter);

//关于商品分类的路由
Router.use('/category',categoryRouter);

//关于上传文件的路由    
Router.use('/upload',uploadRouter);
module.exports = Router;