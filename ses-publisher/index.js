const AWS = require('aws-sdk')
var ses = new AWS.SES({apiVersion: '2010-12-01'});

exports.handler = (event, context, callback) => {
    // TODO implement
    let data = "Message from: " + event.fromname + " @" + event.fromemail + "<br/><br />"
    data += event.body
    var params = {
        Destination: {
            ToAddresses: [event.to]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: data
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: event.subject
            }
        }, 
        ReplyToAddresses: [], 
        ReturnPath: "", 
        ReturnPathArn: "", 
        Source: "", 
        SourceArn: ""
    }
    
    ses.sendEmail(params, function(err, data) {
         if (err) {
             console.log(err, err.stack)
             callback(err)
         } else {
             console.log(data)
             callback(null, data)
         }
    })
}