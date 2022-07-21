const express = require('express');
const app = express();
const {
  port
} = require('./config');


// ROUTES
const apiRouter = require('./routes/api');

app.use('/', apiRouter);



app.listen(port, () => {
  console.log('Server is listening at: http://localhost:3000');
});