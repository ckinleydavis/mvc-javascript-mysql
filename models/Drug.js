const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drug extends Model {}

Drug.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        drugcharacterization: {

        },
        medicinalproduct: {

        },
        drugauthorizationnumb: {

        },
        drugadministrationroute: {

        },
        drugindication: {

        }
    },
    {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'drug' 
    }
);

module.exports = Drug;