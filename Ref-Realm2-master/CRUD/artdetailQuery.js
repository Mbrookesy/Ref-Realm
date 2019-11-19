const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add', (req, res) => {
    models.artDetails.create({
        artname: req.body.artname,
        image_url: req.body.image_url,
        angle: req.body.angle,
        art_style: req.body.art_style,
        colour_style: req.body.colour_style,
        pose: req.body.pose,
        scene: req.body.scene,
        camera_focus: req.body.camera_focus,
        medium: req.body.medium,
        artistId: req.body.artistId
    })
});

router.delete('/remove/:index/', (req, res) => {
    models.artDetails.destroy({
        where: {
            id: req.params.index,
        }
    })
    res.send("Deleted details");
});

router.put('/update/', (req, res) => {
    try {
        models.artDetails.update({ 
        artname: req.body.artname,
        image_url: req.body.image_url,
        angle: req.body.angle,
        art_style: req.body.art_style,
        colour_style: req.body.colour_style,
        pose: req.body.pose,
        scene: req.body.scene,
        camera_focus: req.body.camera_focus,
        medium: req.body.medium,
        artistId: req.body.artistId
        }, { where: { id: req.body.id} });
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

router.get('/all/reverse', async (_req, res) => {
    const result = await models.artDetails.findAll({
        order: [
            ['id', 'DESC']
        ]
    });
    res.send(result);
});

router.get('/find/:index', async (req, res) => {
    const result = await models.artDetails.findAll({
        where: {
            id: req.params.index
        }
    });
    res.send(result);
});

router.get('/findname/:name', async (req, res) => {
    const result = await models.artDetails.findAll({
        where: {
            artname: req.params.name
        }
    });
    res.send(result);
});

router.get('/findmax/', async (_req, res) => {
    let result = await models.artDetails.max('id');
    res.send(String(result));
});


router.post('/search', async (req, res) => {
    const result = await models.artDetails.findAll({where: req.body});
    res.send(result);
});

module.exports = router;