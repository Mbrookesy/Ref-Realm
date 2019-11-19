module.exports = (sequelize, DataTypes) => {
    return sequelize.define('artist', {
        pseudonym: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
    });
}