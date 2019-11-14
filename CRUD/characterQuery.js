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
    res.send("Created models.character " + req.params.name);
});

router.post('/remove/:index/:name', (req, res) => {
    models.character.destroy({
        where: {
            id: req.params.index,
            name: req.params.name
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


router.get('/search/:name?/:hc?/:hs?/:ec?/:bt?/:series?/:cs?/:sex?/:ag?', async (req, res) => {

    var whereStatement = {};
    if (req.params.name != null) whereStatement.name = req.params.name;
    if (req.params.hc != null) whereStatement.hair_colour = req.params.hc;
    if (req.params.hs != null) whereStatement.hair_style = req.params.hs;
    if (req.params.ec != null) whereStatement.eye_colour = req.params.ec;
    if (req.params.bt != null) whereStatement.body_type = req.params.bt;
    if (req.params.series != null) whereStatement.series = req.params.series;
    if (req.params.cs != null) whereStatement.clothing_style = req.params.cs;
    if (req.params.sex != null) whereStatement.sex = req.params.sex;
    if (req.params.ag != null) whereStatement.age_group = req.params.ag;

    const result = await models.character.findAll({where: whereStatement});
    res.send(result);
});

module.exports = router;
