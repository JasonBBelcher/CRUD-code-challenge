const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
config = require('config');
var express = require('express');
var app = express();
var uristring = '';

if (app.get('env') === 'production') {
  mongoose.set('debug', false);
  uristring = process.env.MONGODB_URI || config.get('db.URI');
}

if (app.get('env') === 'development') {
  uristring = config.get('db.URI');
}

if (app.get('env') === 'developmentlive') {
  uristring = config.get('db.URI');
}

mongoose
  .connect(uristring)
  .then(() => {
    console.log('Successfully connected to : ', uristring);
  })
  .catch(err =>
    console.log(
      'Unsucessfully connected database : ',
      uristring,
      'The error returned: ',
      err
    )
  );
