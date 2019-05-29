'use strict';

function isInteger(num) {
  return (num ^ 0) === num;
}

function dateVlaidation(month, year){
  if(isInteger(year) && isInteger(month)) {
    if(month >= 1 && month <= 12) {
      return true;
    }
  }
  return false;
}

function daysInMonth(month, year) {
  if(dateVlaidation(month, year)){
    const howManyDaysInThisMonth = 33 - new Date(year, month - 1, 33).getDate();
    return howManyDaysInThisMonth;
  } else {
    throw 'Invalid input date';
  }
}