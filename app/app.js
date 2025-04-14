const express = require('express');
const app = express();

//Routes

const primeiroRouter = require('../routes/primeiroRouter');

app.use('/api/v1/first', primeiroRouter);

module.exports = app;