  var initApp = function(){
    var dayContent = document.getElementById("day-content");
    var moment = require('moment');

    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('week');
    var weekEnd = currentDate.clone().endOf('week');

    var days = [];
    for (i = 0; i <= 6; i++) {
       days.push(moment(weekStart).add(i, 'days'));
    };
    for (i = 0; i < days.length; i++) {
      if (i === 0) {
        dayContent.innerHTML += '<div class="columns">' +
              '<div class="column">' +
                '<div class="columns">' +
                  '<div class="column is-3">' +
                    '<div>Day</div>' +
                    '<div>' + days[i].format("ddd") + ' ' + days[i].format("D") + '</div>' +
                  '</div>' +
                  '<div class="column">' +
                    '<div class="columns">' +
                      '<div class="column is-2 has-text-centered">' +
                        '<div>time</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                      '</div>' +
                      '<div class="column">' +
                        '<div>description</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="column">' +
                '<div class="columns">' +
                  '<div class="column">' +
                    '<div>task</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                  '</div>' +
                  '<div class="column is-2 has-text-centered">' +
                    '<div>done</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>';
      } else {
        dayContent.innerHTML += '<div class="columns">' +
              '<div class="column">' +
                '<div class="columns">' +
                  '<div class="column is-3">' +
                    '<div>' + days[i].format("ddd") + ' ' + days[i].format("D") + '</div>' +
                  '</div>' +
                  '<div class="column">' +
                    '<div class="columns">' +
                      '<div class="column is-2 has-text-centered">' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                      '</div>' +
                      '<div class="column">' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                        '<div>-</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="column">' +
                '<div class="columns">' +
                  '<div class="column">' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                  '</div>' +
                  '<div class="column is-2 has-text-centered">' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                    '<div>-</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>';
      }
    }
    console.log(days);
    console.log(moment('01/19/2016').format("MMMM Do,dddd"));
  };

  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    initApp();
  } else {
    document.addEventListener("DOMContentLoaded", initApp);
  }

