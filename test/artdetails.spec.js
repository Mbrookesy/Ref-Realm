const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('art details', () => {
    it('should get all artdetail records', (done) => {
        chai.request('http://localhost:8080/')
        .get('artdetails/all/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            done();
            });
           
        })

        it('should get all artdetail records reversed', (done) => {
            chai.request('http://localhost:8080/')
            .get('artdetails/all/reverse')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(typeof res).to.eq('object');
                done();
                });
               
            })

    it('should get a specific artdetail by index', (done) => {
        chai.request('http://localhost:8080/artdetails/find')
        .get('/1/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(typeof res).to.eq('object');
            chai.expect()
            done();
            });
           
        })

        it('should find the max index', (done) => {
            chai.request('http://localhost:8080/')
            .get('artdetails/findmax')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                chai.expect(typeof res).to.eq('object');
                done();
                });
               
            })

    it('should get search a artdetail by json', (done) => {
        chai.request('http://localhost:8080')
        .post('/artdetails/search/')
        .send({angle: 'level'})
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            done();
            });
           
        })

        it('should add artdetails', (done) => {
            chai.request('http://localhost:8080')
            .post('/artdetails/add')
            .send({
            artname: 'test',
            image_url: 'test',
            angle: 'test',
            art_style: 'test',
            colour_style: 'test',
            pose: 'test',
            scene: 'test',
            camera_focus: 'test',
            medium: 'test',
            artistId: '1'
            })
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
                });
               
            })
    
        it('should remove an artdetail', (done) => {
            chai.request('http://localhost:8080')
            .delete('/artdetails/removebyname/test')
            .end((err, res) => {
                chai.expect(res.status).to.eq(200);
                done();
                });
               
            })

    });