const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({region: 'ap-southeast-1', apiVersion: '2012-08-10'})

exports.handler = (event, context, callback) => {
    const type =  event.type
    if (type == 'all') {
        const params = {
            TableName: 'compare-yourself'
        }
        dynamodb.scan(params, function(err, data) {
            if (err) {
                console.log(err)
                callback(err)
            } else {
                console.log(data)
                const items = data.Items.map(
                (dataField) => {
                    return {
                        age: dataField.Age.N,
                        height: dataField.Height.N,
                        income: dataField.Income.N
                    }
                })
                callback(null, items)                
            }    
        })
    } else if (type == 'single') {
        const params = {
            Key: {
                "UserId": {
                    S: "user_0.3548123858018204"
                }
            },
            TableName: "compare-yourself"
        }
        dynamodb.getItem(params, function(err, data) {
            if (err) {
                console.log(err)
                callback(err)
            } else {
                console.log(data)
                callback(null, [{age: +data.Item.Age.N, height: +data.Item.Height.N, income: +data.Item.Income.N}])
            }    
        })
        
    } else {
        callback(null, 'Hello from lambda')
    }
};