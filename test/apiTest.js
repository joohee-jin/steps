/**
 * Created by Jmousy on 2017. 2. 10..
 */

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server');

chai.use(chaiHttp);

describe('API Endpoint Test', () => {
    describe('GET request on /', () => {
        it('should return hello world', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('request on unknown uri', () => {
        it('should return 404', (done) => {
            chai.request(server)
                .get('/nowhere')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

});


