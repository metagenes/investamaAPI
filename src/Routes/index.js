'use-strict';

const express = require('express'),
    news = require('./news');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        message: "News API"
    });
})



Router.use('/news', news);




module.exports = Router;