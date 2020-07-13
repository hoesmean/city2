const express  = require('express');
const router   = express.Router();
const db = require('../db/db');
const Product = require('../models/product');


router.get('/', (req,res)=> {
    Product.findAll({
        where :{
            UserId: 2
        }
    })
    .then(product => {
        res.json(product);
        console.log(product);
    })
    .catch(err => {
        console.log(err);
    })
})





module.exports= router;