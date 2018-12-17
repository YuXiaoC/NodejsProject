const express = require('express');
const mongodb = require('mongodb');

let Router = express.Router();
let MongoClient = mongodb.MongoClient;
// MongoClient.connection('mongodb://lcoalhost:27017',(err,client)=>{
//     //  let db = client.
// });


Router.get('/',(req,res)=>{
    res.send('分类列表');
});


Router.get('/:categoryName',(req,res)=>{
    res.send({
        '商品分类':req.url,
        '商品名称：':req.params.categoryName
    });
    
});
module.exports = Router;