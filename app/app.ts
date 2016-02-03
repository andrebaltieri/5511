/// <reference path="_all.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
import config = require('./config/config');
// import routes = require('./routes/routes');

var app = express();

mongoose.connect(config.connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use('/api', routes);

export = app;