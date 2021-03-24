const express = require('express');
const routes = express();
const multer = require('multer');
const configmulter = require('./config/upload')
const ArticleController = require('./controllers/ArticleController');

const upload = multer(configmulter)

routes.get('/articles', ArticleController.Articleslist);
routes.get('/articles/:id', ArticleController.Article);
routes.post('/articles', upload.single('thumbnail'), ArticleController.createArticle);
routes.put('/articles/:id', ArticleController.update);
routes.delete('/articles/:id', ArticleController.destroy);
module.exports = routes;