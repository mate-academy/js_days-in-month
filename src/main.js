'use strict';

function daysInMonth(month, year) {
  if (Number.isInteger(month) && Number.isInteger(year) && month < 13 && month !== 0) {
    let daysInMon = new Date(year, month, 0).getDate();
      console.log(daysInMon)
  } else {
    console.log('exception')
  }
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
