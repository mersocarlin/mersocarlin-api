require('babel-core/register');
require('babel-polyfill');


var app = require('../src/');
app.start(require('../config'))
  .catch(function (error) {
    console.error(error);
  });
