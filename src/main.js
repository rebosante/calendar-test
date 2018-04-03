var moment = require('moment');

var currentDate = moment();
var weekStart = currentDate.clone().startOf('week');
var weekEnd = currentDate.clone().endOf('week');

var days = [];
for (i = 0; i <= 6; i++) {

   days.push(moment(weekStart).add(i, 'days').format("MMMM Do,dddd"));

};
console.log(days);
console.log(moment('01/19/2016').format("MMMM Do,dddd"));