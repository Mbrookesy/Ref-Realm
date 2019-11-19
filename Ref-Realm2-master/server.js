const express = require('express');
const app = express();
const cors = require('cors');
const charRouter = require('./CRUD/characterQuery');
const artistRouter = require('./CRUD/artistQuery');
const illuRouter = require('./CRUD/illustrationQuery');
const artdetRouter = require('./CRUD/artdetailQuery');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('LOG: ', req.url, req.method);
    next();
});

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/character', charRouter);
app.use('/artist', artistRouter);
app.use('/illustration', illuRouter);
app.use('/artdetails', artdetRouter);

app.listen(8080);

module.exports = app;