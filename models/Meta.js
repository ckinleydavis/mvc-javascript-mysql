const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meta extends Model {}

Meta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        disclaimer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        terms: {
            type: DataTypes.STRING,
            allowNull: true
        },
        license: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_updated: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        // results:
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
       modelName: 'meta' 
    }
);

module.exports = Meta;