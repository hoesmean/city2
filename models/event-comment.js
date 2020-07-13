const Sequelize = require('sequelize');
const table = require('../db/db');

const Event_Comment = table.define('Event-Comment', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    ecom_name: Sequelize.STRING
});

    module.exports = Event_Comment;