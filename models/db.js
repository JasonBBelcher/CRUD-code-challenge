const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
config = require('config');
console.log(config.get('db.URI'));
var uristring =
  process.env.MONGODB_URI ||
  config.get('db.URI') ||
  'mongodb://localhost:27017/targetsdb';
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
