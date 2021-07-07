'use strict'

function daysInMonth(month, year) {
  try {
    if (!Number.isInteger(year) || !Number.isInteger(month) || month > 12 || month < 1) {
      throw new Error();
    }
    return new Date(year, month, 0).getDate();
  } catch(error) {
    return 'exception';
  }
}
