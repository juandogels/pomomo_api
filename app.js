const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('Connected to MongoDB')
);
app.listen(3000);