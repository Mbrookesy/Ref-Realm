const Sequelize = require('sequelize');

const sequelize = new Sequelize('refrealm', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
});

const artDetails = sequelize.import(__dirname + '/artdetails');
const artist = sequelize.import(__dirname + '/artist');
const character = sequelize.import(__dirname + '/character');
const illustration = sequelize.import(__dirname + '/illustration');
const user = sequelize.import(__dirname + '/user');

artDetails.hasMany(illustration);
character.hasMany(illustration);
artist.hasMany(artDetails);

sequelize.sync({ force: true }).then(() => {
    character.create({
        name: "NO CHARACTER",
        hair_colour: "null",
        hair_style: "null",
        eye_colour: "null",
        body_type: "null",
        series: "null",
        clothing_style: "null",
        sex: "null",
        age_group: "null"
    })
});

sequelize
.authenticate()
.then(() => {
    console.log('connection has been established')})
    .catch(err => {
        console.error("Unable to connect");
    });

module.exports = {
    artDetails,
    artist,
    character,
    illustration,
    user,
    sequelize
};