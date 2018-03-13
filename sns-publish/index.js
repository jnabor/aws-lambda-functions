const AWS = require('aws-sdk')
var sns = new AWS.SNS({apiVersion: '2010-03-31'});

exports.fn = (event, context, callback) => {
    let params = {
        Message: '{ "default" : "Test Message from Lambda" }',
        MessageAttributes: {
            'attribute1': {
                DataType: 'String', /* required */
                StringValue: 'String value of message attribute'
            }
        },
        MessageStructure: 'json',
        Subject: 'Subject in Test',
        TargetArn: ''
    }

    sns.publish(params, function(err, data) {
        if (err) {
            console.log(err, err.stack)
        } else {
            console.log(data)
        }
    })
}
