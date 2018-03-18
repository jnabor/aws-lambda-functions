const AWS = require('aws-sdk')
var ses = new AWS.SES({apiVersion: '2010-12-01'});

exports.handler = (event, context, callback) => {
    let message = event.body
    console.log("message: " + event.body)
    message = message.replace(/(?:\r\\n|\r|\\n)/g, '<br />')
    console.log("new message: " + message)
    let data = "Message from: " + event.fromname + " - reply to: " + event.fromemail + "<br/><br />"
    data += message
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