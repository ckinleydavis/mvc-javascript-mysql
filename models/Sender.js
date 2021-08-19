const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sender extends Model {}

Sender.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        senderorganization: {

        }
    },
    {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'sender' 
    }
);

module.exports = Sender;