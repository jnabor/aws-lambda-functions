exports.handler = (event, context, callback) => {
    // TODO implement
    const type =  event.type
    if (type == 'all') {
        callback(null, 'All the data is here!')
    } else if (type == 'single') {
        callback(null, 'The single user data is here!')
    } else {
        callback(null, 'Hello from lambda')
    }
};