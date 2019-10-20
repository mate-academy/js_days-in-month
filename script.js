'use strict';

function daysInMonth(month, year) {
  try {
    if (!isCorrectMonth(month) || !isCorrectYear(year)) {
      throw new Error();
    }
    switch(month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31;
      case 4: case 6: case 9: case 11:
        return 30;
      case 2:
        return isLeapYear(year) ? 29 : 28;
    }
  } catch {
    return `exception`;
  }
}

function isCorrectMonth(month) {
  if (typeof month === 'number' && Number.isInteger(month) && month > 0 && month < 13) {
    return true;
  }
  return false;
}

function isCorrectYear(year) {
  if (typeof year === 'number' && Number.isInteger(year)) {
    return true;
  }
  return false;
}

function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}