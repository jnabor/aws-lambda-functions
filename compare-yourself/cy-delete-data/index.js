const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

exports.handler = (event, context, callback) => {
    // TODO implement
    const params = {
        Key: {
          "UserId": {
              S: "user_0.008648539472237315"
          }
        },
        TableName: "compare-yourself"
    }
    dynamodb.deleteItem(params, function(err, data) {
        if (err) {
            console.log(err)
            callback(err)
        } else {
            console.log(data)
            callback(null, 'deleted')
        }
    })
};