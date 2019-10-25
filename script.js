'use strict'

function daysInMonth(month, year) {
  try {
    if (!Number.isInteger(month) || !Number.isInteger(year) ||
      month <= 0 || year <= 0 || month > 12) {
      throw new Error();
    }
    return new Date(year, month, 0).getDate();
  } catch (error) {
    return 'exception';
  }
}

console.log(daysInMonth(5, 2019));    // 31
console.log(daysInMonth(5, '2019'));  // 'exception'
console.log(daysInMonth(2, 2020));    // 29
console.log(daysInMonth(2.2, 2020));  // 'exception'
console.log(daysInMonth(2, 2100));    // 28
console.log(daysInMonth(13, 2100));   // 'exception'
