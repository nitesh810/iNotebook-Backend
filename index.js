// server.js or app.js
const express = require('express');
const mongoose = require('mongoose');

const db = require('./db');
const app = express();
const port = 4400;

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
