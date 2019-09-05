const express = require('express');
const helmet = require('helmet');
const db = require('../data/db')

const apiRouter = require('./api-router.js');
console.log('environment:', process.env.NODE_ENV);

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
