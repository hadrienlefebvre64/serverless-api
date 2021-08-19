'use strict';

module.exports = async (data) => {
    const params = {
        Ticket: {
            name: data.name,
            quantity: data.quantity,
            addedAt: Date.now(),
        }
    };
    // return dynamoDb.put(params).promise()
    //     .then(result => params.Item)
    return console.log('HHHHHHHHHHHHHHHH', params);
    // Here call the Hubspot create API
};
