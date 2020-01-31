'use-strict';

const express = require('express'),
    controller = require('../Controllers/news');

const Router = express();


Router.get('/', controller.getNews);
Router.post('/', controller.postNews);
Router.patch('/edit/:id_news', controller.patchNews);
Router.delete('/edit/:id_news', controller.deleteNews);
module.exports = Router;