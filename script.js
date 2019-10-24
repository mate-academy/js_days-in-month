'use strict';

function daysInMonth(month,year) {
  try {
    let listDays =  {
      1 : 31,
      3: 31,
      4 : 30,
      5 : 31,
      6 : 30,
      7 : 31,
      8 : 31,
      9 : 30,
      10 : 31,
      11 : 30,
      12 : 31,
    }
    if (!Number.isInteger(year) || !Number.isInteger(month)) {
      throw new Error();
    }
    if (month > 12 || month < 1) {
      throw new Error();
    }
    if (month == 2) {
      if ((year % 4) === 0 && (year % 100) !== 0 || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    } else {
      return listDays[month];
    }
  } catch (e) {
    return 'exception';
  }
}

console.log(daysInMonth(5, 2019));// 31
console.log(daysInMonth(5, '2019'));// exception
console.log(daysInMonth(2, 2020));// 29
console.log(daysInMonth(2.2, 2020));// exception
console.log(daysInMonth(2, 2100));// 28
console.log(daysInMonth(13, 2100));// exception
console.log(daysInMonth(0, 2109));// exception
