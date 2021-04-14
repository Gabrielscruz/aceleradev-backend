const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SuggestionSchema = new mongoose.Schema({
  suggestion: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  datapost: {
    type: Date,
    default: Date.now,
  }
})
SuggestionSchema.plugin(mongoosePaginate)
mongoose.model('Suggestion', SuggestionSchema);