const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;

var uristring =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/targetsdb';
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
