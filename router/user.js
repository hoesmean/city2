const express  = require('express');
const router   = express.Router();
const db = require('../db/db');
const User = require('../models/user');


router.get('/', (req, res) => {
    User.findAll()
    .then(user => {
        res.json(user);
        console.log(user);
        res.sendStatus(200);
        
    })
    .catch(err => {
        console.log(err);
    })
});





module.exports= router;