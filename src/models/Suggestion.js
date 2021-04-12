const mongoose = require('mongoose');
const SuggestionSchema = new mongoose.Schema({
  suggestion: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  datapost: {
    type: Date,
    default: Date.now,
  },

})

mongoose.model('Suggestion', SuggestionSchema);