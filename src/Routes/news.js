'use-strict';

const express = require('express'),
    controller = require('../Controllers/news');

const Router = express();


Router.get('/', controller.getNews);
Router.post('/', controller.postNews);
Router.patch('/:id_news', controller.patchNews);
module.exports = Router;