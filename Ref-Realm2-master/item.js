const express = require('express');

const router = express.Router();

const data = [];

router.get('/find/:index', (req, res) => {
    res.send(data[req.params.index]);
});

router.get('/set/:thing', (req, res) => {
    data.push(req.params.thing);
    res.sendStatus(201);
});

router.get('/change/:index/:value', (req, res) => {
    let previousValue = data[req.params.index];
    data[req.params.index] = req.params.value;
    res.send(previousValue + " changed to " + req.params.value);
});

router.get('/delete/:index', (req, res) => {
    data.splice(req.params.index, 1);
    res.send("Index " + req.params.index + " has been removed");
})

module.exports = router;