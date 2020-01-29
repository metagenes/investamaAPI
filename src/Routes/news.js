'use-strict';

const express = require('express'),
    controller = require('../Controllers/news');

const Router = express();


Router.get('/', controller.getNews);
Router.post('/', controller.postNews);
Router.patch('/', controller.patchNews);
module.exports = Router;