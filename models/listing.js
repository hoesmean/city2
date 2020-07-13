const Sequelize = require('sequelize');
const table = require('../db/db');

const Listing = table.define('Listing', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    l_name: Sequelize.STRING
});

    module.exports = Listing;