const express = require('express');
const app = express();
const path = require('path');

// routing to individual paths is done on the front end
module.exports = app
  .use(express.static(path.join(__dirname, '/public')))
  .get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')))
  .listen(1337, (req, res, next) => console.log("listening on 1337"));
