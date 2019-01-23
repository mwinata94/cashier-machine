const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.static(path.join(__dirname, '/react/build')));
app.use(routes);

module.exports = app;