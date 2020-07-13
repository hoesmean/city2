const Sequelize = require('sequelize');
const table = require('../db/db');

const Post_Comment_Reply = table.define('Post-Comment-Reply', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    pcoreply_name: Sequelize.STRING
});

    module.exports = Post_Comment_Reply;