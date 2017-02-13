/**
 * Created by Jmousy on 2017. 2. 10..
 */

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server ='10.110.240.37:80/festival';

chai.use(chaiHttp);


describe('API Endpoint Test', () => {
    describe('GET request on /', () => {
        it('should return 200', (done) => {
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


