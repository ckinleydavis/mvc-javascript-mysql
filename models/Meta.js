const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meta extends Model {}

Meta.init(
    {
        disclaimer: {

        },
        terms: {

        },
        license: {

        },
        last_updated: {

        },
        // results:
        skip: {

        },
        limit: {

        },
        total: {
            
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