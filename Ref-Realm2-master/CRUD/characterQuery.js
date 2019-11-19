const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:name/:hc/:hs/:ec/:bt/:series/:cs/:sex/:ag', (req, res) => {
    models.character.create({
        name: req.params.name,
        hair_colour: req.params.hc,
        hair_style: req.params.hs,
        eye_colour: req.params.ec,
        body_type: req.params.bt,
        series: req.params.series,
        clothing_style: req.params.cs,
        sex: req.params.sex,
        age_group: req.params.ag
    })
    res.send("Character Created")
});

router.delete('/remove/:index/', (req, res) => {
    models.character.destroy({
        where: {
            id: req.params.index,
        }
    })
    res.send("Deleted the models.character " + req.params.name);
});

router.put('/update/:index/:name/:hc/:hs/:ec/:bt/:series/:cs/:sex/:ag', (req, res) => {
    try {
        models.character.update({ 
            name: req.params.newname,
            hair_colour: req.params.hc,
            hair_style: req.params.hs,
            eye_colour: req.params.ec,
            body_type: req.params.bt,
            series: req.params.series,
            clothing_style: req.params.cs,
            sex: req.params.sex,
            age_group: req.params.ag
        }, { where: { id: req.params.index } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
 });

router.get('/all', async (_req, res) => {
    const result = await models.character.findAll();
    res.send(result);
});

router.get('/find/:index', async (req, res) => {
    const result = await models.character.findAll({
        where: {
            id: req.params.index
        }
    });
    res.send(result);
});


router.post('/search', async (req, res) => {
    const result = await models.character.findAll({where: req.body});
    res.send(result);
});

module.exports = router,
    models;
