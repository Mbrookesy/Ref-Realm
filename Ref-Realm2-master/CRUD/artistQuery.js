const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:name/:fn/:ln/:country/', (req, res) => {
    models.artist.create({
        pseudonym: req.params.name,
        firstName: req.params.fn,
        lastName: req.params.ln,
        country: req.params.country,
    })
    res.send("artist Created")
});

router.delete('/remove/:index/', (req, res) => {
    models.artist.destroy({
        where: {
            id: req.params.index,
        }
    })
    res.send("Deleted the artist " + req.params.name);
});

router.put('/update/:index/:pse/:fn/:ln/:country/', (req, res) => {
    try {
        models.artist.update({ 
            pseudonym: req.params.pse,
            firstName: req.params.fn,
            lastName: req.params.ln,
            country: req.params.country,
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

router.get('/find/:index', async (req, res) => {
    const result = await models.artist.findAll({
        where: {
            id: req.params.index
        }
    });
    res.send(result);
});


router.post('/search', async (req, res) => {
    const result = await models.artist.findAll({where: req.body});
    res.send(result);
});

module.exports = router;