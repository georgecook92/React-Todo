var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log(now.unix());

var timestamp = 1465933467;

var currentMoment = moment.unix(timestamp);
console.log('current moment: ', currentMoment.format('Do MMMM, YYYY @ hh:mm A'));
