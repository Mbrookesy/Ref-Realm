const express = require('express');
const router = express.Router();
const models = require('../database_models');
const sequelize = require('sequelize');

router.post('/add/:adid/:cid', (req, res) => {
    models.illustration.create({
        artDetailId: req.params.adid,
        characterId: req.params.cid
    }
    );
});

router.delete('/remove/:index/', (req, res) => {
    models.illustration.destroy({
        where: {
            artDetailId: req.params.index,
        }
    })
    res.send("Deleted the artist " + req.params.name);
});

router.put('/update/:index/:aid/:cid', (req, res) => {
    try {
        models.illustration.update({
            artDetailId: req.params.aid,
            characterId: req.params.cid
        }, { where: { id: req.params.index } });
        res.send('Updated index ' + req.params.index);
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
});

router.get('/all', async (_req, res) => {
    const result = await models.illustration.findAll();
    res.send(result);
});


router.post('/search', async (req, res) => {
    const result = await models.illustration.findAll({ where: req.body });
    res.send(result);
});

router.post('/search/all', async (req, res) => {

    const { character, art_detail: { artist, ...artDetailWhere }, ...mainWhere } = req.body || { character: {}, art_detail: { artist: {} } };

    const result = await models.illustration.findAll({
        include: [
            {
                model: models.character,
                where: character
            },
            {
                model: models.artDetails,
                where: artDetailWhere,
                include: [
                    {
                        model: models.artist,
                        where: artist
                    }
                ]
            },
        ],
        where: mainWhere
    });
    res.send(result);
});

module.exports = router;