'use strict'

function daysInMonth (month, year) {
  try {
    if (!Number.isInteger(year) || year < 0 || !Number.isInteger(month) || month <= 0 || month > 12) {
      throw new Error();
    }

    return new Date(year, month, 0).getDate();

  } catch {
    alert('INPUT EXCEPTION');
  }
}

