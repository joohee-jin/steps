var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '레코드를 확인하고 싶다면 "/step2"로 접속하세요'});
});

module.exports = router;
