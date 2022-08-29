const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./src/config/cors');
const { errorHandler } = require('./src/response/error.handler');
const authRoutes = require('./src/routes/auth.routes');

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

// Routes
app.use('/auth', authRoutes);

app.use(errorHandler);

module.exports = app;
