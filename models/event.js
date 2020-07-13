const Sequelize = require('sequelize');
const table = require('../db/db');

const Event = table.define('Event', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    e_name: Sequelize.STRING
});

    module.exports = Event;