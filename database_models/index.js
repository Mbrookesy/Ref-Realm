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

illustration.belongsTo(character);
character.hasMany(illustration);

illustration.belongsTo(artDetails);
artDetails.hasMany(illustration);

artDetails.belongsTo(artist);
artist.hasMany(artDetails);

sequelize.sync({ force: false });

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
    sequelize
};