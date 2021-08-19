const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PatientDeath extends Model {}

PatientDeath.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        patientdeathdateformat: {

        },
        patientdeathdate: {

        }
    },
    {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'patientdeath' 
    }
);

module.exports = PatientDeath;