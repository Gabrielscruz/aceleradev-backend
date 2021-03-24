const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const requireDir = require('require-dir');
// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB para
(async () => {
  try {
    await mongoose.connect('mongodb+srv://gabriel-blz:Thamiel0307@cluster0.wzxi0.mongodb.net/aceleradev?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Mongoose')
  } catch (err) {
    console.log('error connecting to Mongoose', err);
    process.exit();
  }
})();

requireDir('./src/models/');
app.use(require('./src/routes'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('running api');
});

app.listen(3001, () => {
  console.log('server listening on port 3001');
});
