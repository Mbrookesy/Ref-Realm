const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/add/:usr/:pass/:email/:ut/', (req, res) => {
    models.user.create({
        username: req.params.usr,
        email: req.params.email,
        password: req.params.pass,
        user_type: req.params.ut
    })
    res.send("Created user " + req.params.usr);
});

router.post('/remove/:index/:user', (req, res) => {
    models.user.destroy({
        where: {
            id: req.params.index,
            username: req.params.user
        }
    })
    res.send("Deleted the artist " + req.params.name);
});

router.put('/update/:usr/:pass/:email/:ut/', (req, res) => {
    try {
        models.user.update({ 
            username: req.params.usr,
            email: req.params.email,
            password: req.params.pass,
            user_type: req.params.ut
        }, { where: { id: req.params.index } });
        res.send('Updated index ' + req.params.index);
    }
    catch{
        res.status(500).send('Failed to \'update\''); T
    }
 });

router.get('/all', async (_req, res) => {
    const result = await models.user.findAll();
    res.send(result);
});


router.get('/search/:usr?/:email?/:ut?/', async (req, res) => {

    var whereStatement = {};
    if (req.params.usr != null) whereStatement.username = req.params.usr;
    if (req.params.email != null) whereStatement.email = req.params.email;
    if (req.params.ut != null) whereStatement.user_type = req.params.ut;

    const result = await models.user.findAll({where: whereStatement});
    res.send(result);
});

module.exports = router;