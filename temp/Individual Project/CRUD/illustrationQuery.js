const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:aid/:cid', (req, res) => {
    models.illustration.create({
        artDetailId: req.params.aid,
        characterId: req.params.cid
    })
    res.send("Created illustration");
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


router.get('/search/:aid/:cid', async (req, res) => {

    var whereStatement = {};
    if (req.params.aid != null) whereStatement.artDetailId = req.params.aid;
    if (req.params.cid != null) whereStatement.characterId = req.params.cid;

    const result = await models.illustration.findAll({where: whereStatement});
    res.send(result);
});

module.exports = router;