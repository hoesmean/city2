const express = require('express');
const sequelize = require('./db/db');
const relationship = require('./relationship/relationship')

const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',  (req, res) => {
    res.send('api working');
}); 


sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
}); 

sequelize.sync()
    .then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    }); 

app.use('/api/users', require('./router/user'));
//app.use('/api/product', require('./router/product'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server başladı ${PORT}`);
});
