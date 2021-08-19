const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PrimarySource extends Model {}

PrimarySource.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        reportercountry: {

        },
        qualification: {

        }
    },
    {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'primarysource' 
    }
);

module.exports = PrimarySource;