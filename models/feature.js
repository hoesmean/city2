const Sequelize = require('sequelize');
const table = require('../db/db');

const Feature = table.define('Feature', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    f_name: Sequelize.STRING
});

    module.exports = Feature;