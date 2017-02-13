/**
 * Created by Jmousy on 2017. 2. 6..
 */

var express = require('express');
var router = express.Router();
var festivalSchema = require('../models/festivalSchema');

/* GET home page. */
router.get('/', function (req, res, next) {
        festivalSchema.find({}, function (err, festivalData) {
            console.log("festival view engine 연결 라우터 접근 ");
            res.render('festivalView');
        });
    }
);
router.get('/info', function (req, res, next) {
        festivalSchema.find({}, function (err, festivalData) {
            console.log("festival data 가져오는 라우터 접근");
            res.json(festivalData);
            console.log("festival data 가져오는 라우터 접근");
        });
    }
);

router.get('/chart', function (req, res, next) {
    res.render('chart');
    }
);

router.get('/getData', function (req, res, next) {

    festivalSchema.aggregate([
                {
                    $group: {
                        _id : '$행사내용',
                        cnt : { $sum : 1}
                    }
                },
                {
                    $sort : {
                        cnt : -1
                    }
                }
            ], function (err, results) {
                if (err) {
                    console.error(err);
                } else {
                    res.json(results);
                }
            }
        );

    }
);

module.exports = router;

