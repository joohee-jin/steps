/**
 * Created by Jmousy on 2017. 2. 3..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var step2Schema = new Schema({
    _id: String,
    msg: String
});

var test = mongoose.model('test', step2Schema);

module.exports = test;