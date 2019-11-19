const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('character', () => {
    it('should get all character records', (done) => {
        chai.request('http://localhost:8080/')
        .get('character/all/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            done();
            });
           
        })

    it('should get a specific character by index', (done) => {
        chai.request('http://localhost:8080/character/find')
        .get('/1/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            done();
            });
           
        })

    it('should get an update character by index', (done) => {
        chai.request('http://localhost:8080/character/update/')
        .put('1/NO_CHARACTER/null/null/null/null/null/null/null/null/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })

    it('should get search a character by json', (done) => {
        chai.request('http://localhost:8080')
        .post('/character/search/')
        .send({hair_colour: 'Brown'})
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })

    it('should get add a character', (done) => {
        chai.request('http://localhost:8080')
        .post('/character/add/test/yellow/bun/blue/average/digimon/casual/male/teen/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })

    it('should remove a character', (done) => {
        chai.request('http://localhost:8080')
        .delete('/character/removebyname/test')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })
    });

    
    
    
