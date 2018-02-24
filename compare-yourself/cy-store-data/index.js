exports.fn = (event, context, callback) => {
    // TODO implement
    console.log(event)
    const age = event.age;
    
    callback(null, age * 2);
};
