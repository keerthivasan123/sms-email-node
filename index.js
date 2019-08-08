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

// Create unique bucket name
var bucketName = 'node-sdk-sample-' + uuid.v4();
// Create name for uploaded object key
var keyName = require('./config');

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});


// Rendering responses
app.use('*', (req, res) => res.json({ msg: 'Server working' }));
