const {format} = require('timeago.js');
const {timestamp} = require('timeago.js');

const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return format(timestamp);
};

module.exports = helpers;