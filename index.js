// Importing node_modules
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
var aws     = require('aws-sdk');
// Getting environment variables
require('dotenv').config();
const port = process.env.PORT || 8080;
// Starting nodeJs 
const app = express();
app.listen(port, () => console.log(`Server listening in port ${port}`));
var ses = require('node-ses')
  , client = ses.createClient({ key: 'key', secret: 'secret' });
 
// Give SES the details and let it construct the message for you.
client.sendEmail({
   to: 'keerthivasan287@gmail.com'
 , from: 'keerthivasan287@gmail.com'
 , cc: 'theWickedWitch@nerds.net'
 , bcc: ['canAlsoBe@nArray.com', 'forrealz@.org']
 , subject: 'greetings'
 , message: 'your <b>message</b> goes here'
 , altText: 'plain text'
}, function (err, data, res) {
    if(err) console.log(err);
});


// Rendering responses
app.use('*', (req, res) => res.json({ msg: 'Server working' }));
