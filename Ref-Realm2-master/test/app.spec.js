const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

describe('server', () => {
    it('get', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.text).to.eq('Hello World');
            done();
        })
    });
});