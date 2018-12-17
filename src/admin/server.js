const express =  require('express');
const app = express();
app.use(express.static('./src'));

app.get('/api/login',(req, res)=> {
    // 接受前台传来的数据
    // 查询数据库
    // let 
    // 进行判断

    res.send('ok');
})



app.listen(1807,()=>{
    console.log('server is running on localhost:1807')
});