const Sequelize = require('sequelize');
const table = require('../db/db');

const Post = table.define('Post', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    p_name: Sequelize.STRING
});

    module.exports = Post;