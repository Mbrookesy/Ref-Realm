const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('artist', () => {
    it('should get all artist records', (done) => {
        chai.request('http://localhost:8080/')
        .get('artist/all/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            done();
            });
           
        })

    it('should get a specific artist by index', (done) => {
        chai.request('http://localhost:8080/artist/find')
        .get('/1/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            done();
            });
           
        })

    it('should get an update artist by index', (done) => {
        chai.request('http://localhost:8080/artist/update/')
        .put('9/Zapklink/null/null/UK')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })

    it('should get search a artist by json', (done) => {
        chai.request('http://localhost:8080')
        .post('/artist/search/')
        .send({country: 'Japan'})
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })
    });