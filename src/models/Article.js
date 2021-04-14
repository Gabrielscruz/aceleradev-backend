const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  urlgithub: {
    type: String,
    required: true,
  },
  urlyoutube: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    default: 'Gabriel da Silva Cruz'
  },
  datapost: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  previewamount: {
    type: Number,
    default: 0,
  }
});

ArticleSchema.plugin(mongoosePaginate)

mongoose.model('Article', ArticleSchema);