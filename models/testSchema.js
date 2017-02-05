/**
 * Created by Jmousy on 2017. 2. 3..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
    _id:  String,
    msg: String
});

var test = mongoose.model('test', testSchema);

module.exports=test;