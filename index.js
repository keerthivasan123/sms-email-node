// Importing node_modules
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
// Getting environment variables
require('dotenv').config();
const port = process.env.PORT || 8080;


// Starting nodeJs 
const app = express();
app.listen(port, () => console.log(`Server listening in port ${port}`));

// Rendering responses
app.use('*', (req, res) => res.json({ msg: 'Server working' }));
