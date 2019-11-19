const chai = require('chai');
const chaiHttp = require('chai-http');
const models = require('../database_models');

chai.use(chaiHttp);

describe('character', () => {
    it('get', (done) => {
        chai.request(models.character)
        .get('/search/NO_CHARACTER')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.text).to.eq({"id": 1,
                "name": "NO_CHARACTER",
                "hair_colour": "null",
                "hair_style": "null",
                "eye_colour": "null",
                "body_type": "null",
                "series": "null",
                "clothing_style": "null",
                "sex": "null",
                "age_group": "null"
            });
            done();
        })
    });
});