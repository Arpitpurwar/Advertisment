const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const secure = require('express-secure-only');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./routes/index');
require('./config');

var app = express();
app.use(compression());
app.enable('trust proxy');
// app.use(bodyParser.json({limit: '10mb', extended: true}))
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// security features enabled in production
if (app.get('env') === "production") {
    // redirects http to https
    app.use(secure());

    // helmet with defaults
    app.use(helmet());
}

app.use(cors(global_config.corsOptions));
app.options('*', cors(global_config.corsOptions));

app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({limit: '10mb',  extended: true }));
app.use(cookieParser());

app.use(express.static('dist'));
app.use(router);

module.exports = app;
