const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Trydent', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connection was made to MongoDB');
  }
});

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
