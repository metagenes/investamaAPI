'use-strict';

const express = require('express'),
    economy = require('./economy'),
    news = require('./news');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        message: "News API"
    });
})



Router.use('/news', news);
Router.use('/economy', economy);




module.exports = Router;