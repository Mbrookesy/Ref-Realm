const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:imgurl/:angle/:as/:cs/:pose/:scene/:cf/:medium/:aid', (req, res) => {
    models.artDetails.create({
        image_url: req.params.imgurl,
        angle: req.params.angle,
        art_style: req.params.as,
        colour_style: req.params.cs,
        pose: req.params.pose,
        scene: req.params.scene,
        camera_focus: req.params.cf,
        medium: req.params.medium,
        artistId: req.params.aid
    })
    res.send("Created details");
});

router.post('/remove/:index/', (req, res) => {
    models.artDetails.destroy({
        where: {
            id: req.params.index,
        }
    })
    res.send("Deleted details");
});

router.put('/update/:imgurl/:angle/:as/:cs/:pose/:scene/:cf/:medium/:aid', (req, res) => {
    try {
        models.artDetails.update({ 
            image_url: req.params.imgurl,
        angle: req.params.angle,
        art_style: req.params.as,
        colour_style: req.params.cs,
        pose: req.params.pose,
        scene: req.params.scene,
        camera_focus: req.params.cf,
        medium: req.params.medium,
        artistId: req.params.aid
        }, { where: { id: req.params.index } });
        res.send('probably worked')
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
 });

router.get('/all', async (_req, res) => {
    const result = await models.artDetails.findAll();
    res.send(result);
});


router.get('/search/:imgurl?/:angle?/:as?/:cs?/:pose?/:scene?/:cf?/:medium?/:aid?', async (req, res) => {

    var whereStatement = {};
    if (req.params.imgurl != null) whereStatement.image_url = req.params.imgurl;
    if (req.params.angle != null) whereStatement.angle = req.params.angle;
    if (req.params.as != null) whereStatement.art_style = req.params.as;
    if (req.params.cs != null) whereStatement.colour_style = req.params.cs;
    if (req.params.pose != null) whereStatement.pose = req.params.pose;
    if (req.params.scene != null) whereStatement.scene = req.params.scene;
    if (req.params.cf != null) whereStatement.camera_focus = req.params.cf;
    if (req.params.medium != null) whereStatement.medium = req.params.medium;
    if (req.params.aid != null) whereStatement.artistId = req.params.aid;

    const result = await models.artDetails.findAll({where: whereStatement});
    res.send(result);
});

module.exports = router;