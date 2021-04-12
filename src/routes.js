const express = require('express');
const routes = express();
const multer = require('multer');
const configmulter = require('./config/upload')
const ArticleController = require('./controllers/ArticleController');
const SuggestionController = require('./controllers/SuggestionController');

const upload = multer(configmulter)

routes.get('/articles', ArticleController.Articleslist);
routes.get('/articles/:id', ArticleController.Article);
routes.post('/articles', upload.single('thumbnail'), ArticleController.createArticle);
routes.put('/articles/:id', ArticleController.update);
routes.delete('/articles/:id', ArticleController.destroy);
routes.post('/sugestao', SuggestionController.createSuggestion);

module.exports = routes;