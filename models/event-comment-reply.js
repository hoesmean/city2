const Sequelize = require('sequelize');
const table = require('../db/db');

const Event_Comment_Reply = table.define('Event-Comment-Reply', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    ecom_name: Sequelize.STRING
});

    module.exports = Event_Comment_Reply;