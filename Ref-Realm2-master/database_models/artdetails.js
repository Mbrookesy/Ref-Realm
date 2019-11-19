module.exports = (sequelize, DataTypes) => {
    return sequelize.define('art_details', {
        artname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        angle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        art_style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        colour_style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pose: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scene: {
            type: DataTypes.STRING,
            allowNull: false
        },
        camera_focus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        medium: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}
