const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// routing to individual paths is done on the front end
module.exports = app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use(express.static(path.join(__dirname, '/public')))
  .get('*', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')))
  .use((req, res, next) => {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  })
  .use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
  })
  .listen(1337, (req, res, next) => console.log("listening on 1337"));
