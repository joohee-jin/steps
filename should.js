/**
 * Created by Jmousy on 2017. 2. 10..
 */

var should = require('should');
var assert = require('assert');

it('Minus',function(done){
    var value= 1-2;
    value.should.equal(-1);
    done();
});

it('Add', function (done) {
    var value = 1+2;
    assert.equal(value,3);
    done();
});

describe('Calculation',function () {
    it('Add',function(done){
        var value = 1+2;
        assert.equal(value, 3);
        done();
    });

    it('Minus', function (done) {
        var value = 1-2;
        value.should.equal(-1);
        done();
    });

});