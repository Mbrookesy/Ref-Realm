const express = require('express');
const app = express();
const cors = require('cors');
var itemRouter = require('./item');
const Sequelize = require('sequelize');

app.use(cors());
app.use(express.json());

var sequelize = new Sequelize('nbgardens', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


const Item = sequelize.define('randomTest', {
    item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    IsanEgg: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

app.get('/add', async (req,res) => {
    await Item.create({item: "hehexd",
    price: 231,
    IsanEgg: "No"
})
res.send("done");
})

app.get('/get', async (req, res) => {
    const x = await Item.findAll({
        attributes: ['item'],
        where: {
            IsanEgg: "No"
        }
    });
    res.send(x);
})

app.get('/update', async (req, res) =>{
    Item.update({ item: "Juicy goosey"},
    { where: {
        id: 3
    }})
});



app.use('/item', itemRouter);

sequelize
.authenticate()
.then(() => {
    console.log('connection has been established')})
    .catch(err => {
        console.error("Unable to connect");
    });


app.use((err, req, res, next) => {
    res.status(500).send({
        error: "Something went wrong",
        message: err
    })
});

app.listen(8080);