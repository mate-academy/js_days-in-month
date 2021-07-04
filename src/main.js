'use strict';

function daysInMonth(month, year) {
  if (!Number.isInteger(month) || !Number.isInteger(year) || month > 12 || month <= 0) {
    throw new Error('Year and month must be positive integers. ' +
      'Month must be in the range from 1 to 12 inclusive.')
  }
  return new Date(year, month, 0).getDate()
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
