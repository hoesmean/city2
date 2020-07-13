const Sequelize = require('sequelize');
const table = require('../db/db');

const Sub_Category = table.define('Sub-Category', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    sca_name: Sequelize.STRING
});

    module.exports = Sub_Category;