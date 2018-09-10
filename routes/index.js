var express = require('express');
var router = express.Router();

//配置加载第三方接口的模块
var request = require('request');
router.get('/ma', function (req, res, next) {
    //模拟手机端请求
    var options = {
        url: req.query.urls,
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
        }
    };
    request(options, function (error, response, body) {
        if(error) throw error;
        res.send(JSON.parse(body));
    });
});
router.get('/getList', function (req, res, next) {
    console.log(req.query.keyword);
    request('http://mobilecdn.kugou.com/api/v3/search/song?json=true&'+req.query.keyword+'="+keyword+"&page=1&pagesize=20&showtype=1', function (error, response, body) {
        if(error) throw error;
        res.send(JSON.parse(body));
    });
});

module.exports = router;
