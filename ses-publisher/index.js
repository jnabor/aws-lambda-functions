const AWS = require('aws-sdk')
var ses = new AWS.SES({apiVersion: '2010-12-01'});

exports.handler = (event, context, callback) => {
    // TODO implement
    callback(null, 'Hello from Lambda');
    
    var params = {
        Destination: {
            ToAddresses: ["sonabstudios@gmail.com"]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: "Test from lambda! This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>."
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: "This is the message body in text format."
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: "Test email"
            }
        }, 
        ReplyToAddresses: [
        ], 
        ReturnPath: "", 
        ReturnPathArn: "", 
        Source: "", 
        SourceArn: ""
    }
    
    ses.sendEmail(params, function(err, data) {
         if (err) {
             console.log(err, err.stack)
         } else {
             console.log(data);
         }
    })
}