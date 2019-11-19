const express = require('express');
const router = express.Router();
const models = require('../database_models');

router.post('/search/all', async (_req, res) => {
    const result = await models.illustration.findAll({
        include: [{
            model: models.artDetails,
            model: models.character,
            required: false
        }]
    });
    res.send(result);
});