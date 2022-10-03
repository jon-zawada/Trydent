const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('../db/index');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use('/', express.static(DIST_DIR));

/* Middleware */
app.use(cors({
  origin: 'http://localhost:8080'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Routes */

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((response) => {
      if (response === null) {
        res.status(401).send({ clientCode: 'INVALID_EMAIL' });
      } else {
        bcrypt.compare(req.body.password, response.password)
          .then((isCorrectPassword) => {
            if (isCorrectPassword) {
              res.send({ email: response.email, _id: response._id });
            } else {
              res.status(401).send({ clientCode: 'INVALID_LOGIN' });
            }
          });
      }
    })
    .catch((err) => {
      res.send(err); //implement better status code
    });
});

app.get('/users', () => {

});

app.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((response) => {
      if (response !== null) {
        res.send('A user with this email already exists');
      } else {
        bcrypt.hash(req.body.password, 10)
          .then((hashedPassword) => {
            const user = new User({ email: req.body.email, password: hashedPassword });
            user.save()
              .then(() => {
                res.send('User successfully created');
              });
          });
      }
    });
    //implement catches
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Trydent listening on port ${PORT}`);
  }
});
