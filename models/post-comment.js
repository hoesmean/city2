const Sequelize = require('sequelize');
const table = require('../db/db');

const Post_Comment = table.define('Post-Comment', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    pco_name: Sequelize.STRING
});

    module.exports = Post_Comment;