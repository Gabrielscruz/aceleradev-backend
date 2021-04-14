const mongoose = require('mongoose');
const Suggestion = mongoose.model('Suggestion');

module.exports = {
  async createSuggestion(req, res) {
    console.log(req.body)
    await Suggestion.create(req.body);
    return res.json(`new Suggestion successfully created`);
  },
}