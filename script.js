'use strict';

function daysInMonth(month, year) {
  try {
    if (!isCorrectMonth(month) || !isCorrectYear(year)) {
      throw new Error();
    }
    
    const days = new Date(year, month, 0).getDate();
    
    return days;
    
  } catch {
    return `exception`;
  }
}

function isCorrectMonth(month) {
  return (Number.isInteger(month) && month > 0 && month < 13);
}

function isCorrectYear(year) {
  return (Number.isInteger(year));
}

function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
