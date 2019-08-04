// load aws sdk and config.js 
var aws = require('aws-sdk');
const config = require('./config');
// load aws config
aws.config.loadFromPath('config');

// load AWS SES
var ses = new aws.SES({apiVersion: '2019-03-08'});

// send to list
var to = ['keerthivasan@gmail.com']

// this must relate to a verified SES account
var from = 'keerthivasan287@gmail.com'


// this sends the email
// @todo - add HTML version
ses.sendEmail( { 
   Source: from, 
   Destination: { ToAddresses: to },
   Message: {
       Subject:Source {
          Data: 'A Message To You Rudy'
       },
       Body: {
           Text: {
               Data: 'Stop your messing around',
           }
        }
   }
}
, function(err, data) {
    if(err) throw err
        console.log('Email sent:');
        console.log(data);
 });