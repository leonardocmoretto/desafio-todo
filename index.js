const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const bluebird = require('bluebird');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoUrl = process.env.MONGO_URL || 'mongodb://teste123:teste123@ds143683.mlab.com:43683/desafio-todo';

mongoose.Promise = bluebird;
mongoose.connect(mongoUrl);

app.use('/todos', require('./routes/todos'));

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('API listing on ' + port);
});