const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('artist', () => {
    it('should get all illustration records', (done) => {
        chai.request('http://localhost:8080/')
        .get('illustration/all/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            done();
            });
           
        })

    it('should get an update illustration by index', (done) => {
        chai.request('http://localhost:8080/illustration/update/')
        .put('1/1/3')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })

    it('should get search a illustration by json', (done) => {
        chai.request('http://localhost:8080')
        .post('/illustration/search/')
        .send({artDetailId: '1'})
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })
    });