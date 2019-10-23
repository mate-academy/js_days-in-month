'use strict';

function daysInMonth(month, year) {
  try {
    if (month > 12 || !Number.isInteger(month) || !Number.isInteger(year)) {
      throw new Error("exception");
    }

    return new Date(year, month, 0).getDate();
  }

  catch(error) {
    return error.message;
  }
}