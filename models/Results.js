const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model {}

Meta.init(
    {
        receiptdateformat: {

        },
        receiver: {

        },
        seriousnessdeath: {

        },
        companynumb: {

        },
        receivedateformat: {

        },
        // primarysource:
        reportercountry: {

        },
        qualification: {

        },
        transmissiondateformat: {

        },
        fulfillexpeditecriteria: {

        },
        safetyreportid: {

        },
        // sender
        senderorganization: {

        },
        receivedate: {

        },
        // patient
        patientonsetage: {

        },
        patientonsetageunit: {

        },
        patientsex: {

        },
        // patientdeath
        patientdeathdateformat: {

        },
        patientdeathdate: {

        },
        // reaction
        reactionmeddrapt: {

        },
        // drug
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
       modelName: 'results' 
    }
);

module.exports = Results;