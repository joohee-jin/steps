/**
 * Created by Jmousy on 2017. 2. 3..
 */
var express = require('express');
var router = express.Router();
var testSchema = require('../models/testSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
        testSchema.find({}, function(err, tests) {
            res.json(tests);
        });

    }
);

    //json으로 보내

module.exports = router;

