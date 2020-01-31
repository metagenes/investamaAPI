'use-strict';

const express = require('express'),
    controller = require('../Controllers/economy');

const Router = express();


Router.get('/', controller.getEconomy);
Router.post('/', controller.postEconomy);
Router.patch('/edit/:id_news', controller.patchEconomy);
Router.delete('/edit/:id_news', controller.deleteEconomy);
module.exports = Router;