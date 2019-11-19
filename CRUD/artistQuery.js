const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:pse/:fn/:ln/:country/:web', (req, res) => {
    models.artist.create({
        pseudonym: req.params.pse,
        firstName: req.params.fn,
        lastName: req.params.ln,
        country: req.params.country,
        website: req.params.web,
    })
    res.send("Created artist " + req.params.pse);
});

router.post('/remove/:index/:pse', (req, res) => {
    models.artist.destroy({
        where: {
            id: req.params.index,
            pseudonym: req.params.pse
        }
    })
    res.send("Deleted the artist " + req.params.name);
});

router.put('/update/:index/:pse/:fn/:ln/:country/:web', (req, res) => {
    try {
        models.artist.update({ 
            pseudonym: req.params.pse,
            firstName: req.params.fn,
            lastName: req.params.ln,
            country: req.params.country,
            website: req.params.web,
        }, { where: { id: req.params.index } });
        res.send('Updated index ' + req.params.index);
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
 });

router.get('/all', async (_req, res) => {
    const result = await models.artist.findAll();
    res.send(result);
});


router.get('/search/:pse?/:fn?/:ln?/:country?', async (req, res) => {

    var whereStatement = {};
    if (req.params.pse != null) whereStatement.pseudonym = req.params.pse;
    if (req.params.fn != null) whereStatement.firstName = req.params.fn;
    if (req.params.ln != null) whereStatement.lastName = req.params.ln;
    if (req.params.country != null) whereStatement.country = req.params.country;

    const result = await models.artist.findAll({where: whereStatement});
    res.send(result);
});

module.exports = router;