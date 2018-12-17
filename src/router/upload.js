const express = require('express');
const path = require('path');
let Router = express.Router();

const multer = require('multer');



//定义 磁盘存储
var storage = multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        console.log(file);
        let extname = path.extname(file.originalname);
        //在此处可以根据后缀名来控制上传文件类型
        cb(null,file.fieldname + '-' + Date.now() + extname);
    }
});

//定义上传临时路劲
//uploads文件没有的话，则会自动创建
let upload = multer({ dest:'temp/', storage:storage });

//多文件上传
Router.post('/',upload.array('upLoadCentent',5),(req,res)=>{
    //通过req.files获取多文件内容
    console.log('file:',req.files);
    console.log('body:',req.body);
    res.send({
          code:1,
          mse:'文件上传从成功',
          data:req.files
    });
    
});

//api路劲：upload/goods
//upload的方法：
// 1、single()上传单个文件
// 2、array(name,qty)，上传多个文件
//upload.single('goodspic'),goodspic为上传图片的表单名字
Router.post('/goods',upload.single('upLoadCentent'),(req,res)=>{
        //通过req.file获取到上传的文件内容
        console.log(req.file,req.body);
        res.send({
            code:1,
            msg:'文件上传成功',
            data:req.file
        });
});
module.exports = Router;
