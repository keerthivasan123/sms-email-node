// Importing node_modules
const express = require('express');
const mongoose = require('mongoose');
// Getting environment variables
require('dotenv').config();
const port = process.env.PORT || 8080;
// Starting nodeJs 
const app = express();
app.listen(port, () => console.log(`Server listening in port ${port}`));
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');

// load aws sdk
var aws = require('aws-sdk');

// load aws config
aws.config.loadFromPath('config.json');

// load AWS SES
var ses = new aws.SES({apiVersion: '2010-12-01'});

// send to list
var to = ['keerthivasan287@gmail.com']

// this must relate to a verified SES account
var from = 'keerthivasan287@gmail.com'


// this sends the email
// @todo - add HTML version
ses.sendEmail( { 
   Source: from, 
   Destination: { ToAddresses: to },
   Message: {
       Subject: {
          Data: 'from aws'
       },
       Body: {
           Text: {
               Data: 'Stop your messing around',
           }
        }
   }
}, function(err, data) {
    if(err) throw err
        console.log('Email sent:');
        console.log(data);
 });


// Rendering responses
app.use('*', (req, res) => res.json({ msg: 'Server working' }));
