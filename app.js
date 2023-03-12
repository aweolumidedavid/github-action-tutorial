/* eslint-disable linebreak-style */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const v1Route = require('./src/routes/index');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());
app.use('/', v1Route);

module.exports = app;