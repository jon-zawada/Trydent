const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use('/', express.static(DIST_DIR));

/* Middleware */
app.use(cors({
  origin: 'http://localhost:8080'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Routes */
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
