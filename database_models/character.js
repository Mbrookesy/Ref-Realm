module.exports = (sequelize, DataTypes) => {
    return sequelize.define('character', {
        name: {
            type: DataTypes.STRING,
        },
        hair_colour: {
            type: DataTypes.STRING,
        },
        hair_style: {
            type: DataTypes.STRING,
        },
        eye_colour: {
            type: DataTypes.STRING,
        },
        body_type: {
            type: DataTypes.STRING,
        },
        series: {
            type: DataTypes.STRING,
        },
        clothing_style: {
            type: DataTypes.STRING,
        },
        sex: {
            type: DataTypes.STRING,
        },
        age_group: {
            type: DataTypes.STRING,
        }
    });
}
