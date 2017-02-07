/**
 * Created by Jmousy on 2017. 2. 3..
 */
var express = require('express');
var router = express.Router();
var step2Schema = require('../models/step2Schema');

/* GET home page. */
router.get('/', function (req, res, next) {
        step2Schema.find({}, function (err, step2Results) {
            res.json(step2Results);
        });
    }
);

module.exports = router;


