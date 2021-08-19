'use strict';

const createTicket = require('./handlers/create');

const create = (event, context, callback) => {
    const data = JSON.parse(event.body);
    createTicket(data)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};


module.exports = {
    create,
};
