// server.js

var express = require('express'),
    path = require('path'),
    bodyparser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./config/DB');
    pdpRoutes = require('./expressRoutes/pdpRoutes');

    mongoose.promise = global.Promise;
    mongoose.connect(config.DB).then(
        () => {console.log('Database connected')},
        err => {console.log('Can not connect to de database' + err)}
    );

    const app = express();
    app.use(bodyparser.json());
    app.use(cors());
    var port = process.env.PORT || 4000;

    app.use('/pdps', pdpRoutes);

    var server = app.listen(function(){
        console.log('Listening on port' + port);
    });