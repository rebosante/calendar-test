// var fetch = require('node-fetch');
// var moment = require('moment');
//
// var currentDate = moment();
// var weekStart = currentDate.clone().startOf('week');
// var weekEnd = currentDate.clone().endOf('week');
// var test = moment('2016-04-23T09:54:51').format("dddd, MMMM Do");
//
// var days = [];
// for (i = 0; i <= 6; i++) {
//     days.push(moment(weekStart).add(i, 'days'));
// };
//
// var saints = [];
// //days.forEach(getSaintsFrom);
// console.log(days);
// // console.log(moment('2014-04-23T09:54:51').format("MMMM Do,dddd"));
// // var url = 'https://api.abalin.net/get/namedays?day=' + item.format("D") + '&month=' + item.format("M") + '&country=es';
// function getSaintsFrom (day, month) {
//     var url = 'https://api.abalin.net/get/namedays?day=' + day + '&month=' + month + '&country=es';
//   return fetch(url)
//         .then(response => response.json()).then(responseText => {
//             let resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
//             return resp.data['name_es'];
//             // saints.splice(index, 0, resp.data['name_es'])
//             // resolve(resp); //这个resp会被外部接收
//         }).catch(err => {
//             console.log(err);
//             //reject(err);
//         });
// };
//
// var promises = [];
//
// days.forEach(function(item, index) {
//   promises.push(
//     getSaintsFrom(item.format("D"), item.format("M"))
//       .then((data) => {
//             saints.splice(index, 0, data);
//         }).catch ((error) => {
//             console.log('Error: ', error);
//         })
//     );
// });
//
// Promise.all(promises).then(() => {
//       console.log('finish', saints)
//     }
// );
//
// module.exports = {
//     mom: moment,
//     ts: test,
//     weekday: days,
//     st: saints
// }