let express = require('express');
let app = express();
app.listen(3000);

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


let ad = require('./home/ad');

app.get('/api/ad',(req,res)=>{
    res.send(ad);
})

let list = require('./home/list');
// 获取列表 需传递城市，页码
app.get('/api/list/:city/:page',(req,res)=>{
    res.send(list);
})

let info = require('./detail/info');

app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
})

let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment);
})

let orderList = require('./orderlist/orderList')
app.get('/api/orderlist/:username',(req,res)=>{
    res.send(orderList);
})

//提交评论
app.post('/api/comment',(req,res)=>{
    res.send({mes:'ok'})
})