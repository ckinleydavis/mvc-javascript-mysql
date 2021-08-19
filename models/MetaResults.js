const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MetaResults extends Model {}

MetaResults.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        skip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        limit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'metaresults' 
    }
);

module.exports = MetaResults;