const express = require('express');
const app = express();
const {
  port
} = require('./config');
const apiRouter = require('./routes/api');

// db
require('./db/mongoose');

// ROUTES
app.use('/', apiRouter);



// server

app.listen(port, () => {
  console.log('Server is listening at: http://localhost:3000');
});