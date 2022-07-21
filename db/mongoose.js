const mongoose = require('mongoose');
const {
  database
} = require('../config');

// Połączenie do bazy danych 
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});