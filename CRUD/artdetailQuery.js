const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:name/:hc/:hs/:ec/:bt/:series/:cs/:sex/:ag', (req, res) => {
    models.artDetails.create({
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

router.post('/remove/:name', (req, res) => {
    models.artDetails.destroy({
        where: {
            name: req.params.name
        }
    })
    res.send("Deleted the models.character " + req.params.name);
});

router.post('/update/:index/:name/:hc/:hs/:ec/:bt/:series/:cs/:sex/:ag'), (res, req) => {
    models.artDetails.update({
        name: req.params.name,
        hair_colour: req.params.hc,
        hair_style: req.params.hs,
        eye_colour: req.params.ec,
        body_type: req.params.bt,
        series: req.params.series,
        clothing_style: req.params.cs,
        sex: req.params.sex,
        age_group: req.params.ag },
        {where: req.params.index}
    )
    res.send("Index " + req.params.index + " updated");  
}

router.get('/all', async (_req, res) => {
    const result = await artDetails.character.findAll();
    res.send(result);
});


router.get('/search/:name/:hc/:hs/:ec/:bt/:series/:cs/:sex/:ag', (req, res) => {
    models.character.findAll({
        where: {
        name: req.params.name,
        hair_colour: req.params.hc,
        hair_style: req.params.hs,
        eye_colour: req.params.ec,
        body_type: req.params.bt,
        series: req.params.series,
        clothing_style: req.params.cs,
        sex: req.params.sex,
        age_group: req.params.ag
        }
    })
    res.send("Searched models.characters");
});

module.exports = router;