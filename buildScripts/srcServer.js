//es5 - CommonJS
// var express = require('express');
// var path = require('path');
// var open = require('open');

// var port = 3000;
// var app = express();

//es6 or es6 modules
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', function(req, res) {
  // Hard coding for simplicity.  Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "LastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "LastName": "Norton", "email": "tnorton@gmail.com"},
    {"id": 3, "firstName": "Tina", "LastName": "Lee", "email": "lee.tina@gmail.com"}
  ]);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
