const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const bluebird = require('bluebird');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoUrl = process.env.MONGO_URL || 'mongodb://s1rt1dev:s1rt1dev@ds119930.mlab.com:19930/consortedev';

//const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/test';

mongoose.Promise = bluebird;
mongoose.connect(mongoUrl);

app.use('/todo', require('./routes/todo'));

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('API listing on ' + port);
});