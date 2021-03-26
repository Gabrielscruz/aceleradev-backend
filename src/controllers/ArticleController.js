const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = {
  async Articleslist(req, res) {
    let query = {}
    if (req.query.tipo !== '') {
      query = { tipo: req.query.tipo }
    }
    const { page = 1 } = req.query;
    const articles = await Article.paginate(query, { page: page, limit: 9 })

    return res.json(articles)
  },
  async Article(req, res) {
    const articles = await Article.findById(req.params.id);
    return res.json(articles)
  },
  async createArticle(req, res) {
    const thumbnail = `https://aceleradev-backend.herokuapp.com/uploads/${req.file.filename}`
    const articles = await Article.create({ ...req.body, thumbnail });
    return res.json(`new Article successfully created (${articles.title})`);
  },
  async update(req, res) {
    const [autor, title, urlgithub, content, previewamount, urlyoutube, thumbnail, tipo] = req.body

    const article = await Article.findOneAndUpdate(req.params.id, { ...autor, title, urlgithub, content, $inc: { previewamount: 1 }, urlyoutube, thumbnail, tipo }, { new: true });
    return res.json(article)
  },
  async destroy(req, res) {
    await Article.findOneAndDelete(req.params.id);
    return res.send(`Deleted Article id : ${req.params.id}`)
  }
}