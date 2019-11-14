const express = require('express');
const app = express();
const cors = require('cors');
const charRouter = require('./CRUD/characterQuery');
// const artistRouter = require('./CRUD/artistQuery');
// const illuRouter = require('./CRUD/illustrationQuery');
// const artdetRouter = require('./CRUD/artdetailQuery');
// const userRouter = require('./CRUD/userQuery');

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

app.listen(8000);

module.exports = app;