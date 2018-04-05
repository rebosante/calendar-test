const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const moment = require('moment');
const currentDate = moment();
const weekStart = currentDate.clone().startOf('week');
const weekEnd = currentDate.clone().endOf('week');
const firstDay =weekStart.format("MMMM Do");
const lastDay = weekEnd.format("MMMM Do");
const days = {};
const promises = [];
for (i = 0; i <= 6; i++) {
  days[i] = { position: i, fullday: moment(weekStart).add(i, 'days') };
};
// console.log(moment('2014-04-23T09:54:51').format("MMMM Do,dddd"));
function getSaintsFrom(day, month, pos) {
  const url = `https://api.abalin.net/get/namedays?day=${day}&month=${month}&country=es`;
  return fetch(url)
    .then(response => response.json()).then(responseText => {
      const resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
      days[pos].saints = resp.data['name_es'];
      // resolve(resp);
    }).catch(err => {
      console.log(err);
      //reject(err);
    });
  };
for (const key in days) {
  if (days.hasOwnProperty(key)) {
    promises.push(
      getSaintsFrom(days[key].fullday.format("D"), days[key].fullday.format("M"), days[key].position)
        .then((data) => {
        // I used it when the function returned a value
      }).catch ((error) => {
        console.log('Error: ', error);
       })
    );
  }
}
// API URL('https://api.abalin.net/get/namedays?day=18&month=9&country=es');
/* GET home page. */
router.get('/', (req, res, next) => {
  Promise.all(promises).then(() => {
    // console.log('finish', days)
    res.render('index', { fDay: firstDay, lDay:lastDay, moment: moment, days: days });
  });
});

module.exports = router;