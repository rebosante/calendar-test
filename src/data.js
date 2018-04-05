var fetch = require('node-fetch');
var moment = require('moment');

var currentDate = moment();
var weekStart = currentDate.clone().startOf('week');
var weekEnd = currentDate.clone().endOf('week');
var test = moment('01/19/2016').format("dddd, MMMM Do");

var days = [];
for (i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days'));
};
for (i = 0; i < days.length; i++) {
    console.log(days[i].format("D"));
    console.log(days[i].format("ddd"));
}
console.log(days);
console.log(moment('01/19/2016').format("MMMM Do,dddd"));

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
getDataFrom('https://api.abalin.net/get/namedays?day=12&month=9&country=es');

function getDataFrom(url) {
    fetch(url)
        .then(response => response.json())
        .then(responseText => {
            let resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
            console.log(resp.data);
            return resp.data
            // resolve(resp); //这个resp会被外部接收
        }).catch(err => {
            console.log(err);
            //reject(err);
        });
}

module.exports = test