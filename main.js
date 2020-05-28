'use strict';

function dateValidation(month, year){
  if(
  Number.isInteger(year) 
  && Number.isInteger(month) 
  && month >= 1 
  && month <= 12
  ) {
    return true;
  }
  return false;
}

function daysInMonth(month, year) {
  if(dateValidation(month, year)){
    const howManyDaysInThisMonth = 33 - new Date(year, month - 1, 33).getDate();
    return howManyDaysInThisMonth;
  } else {
    throw new Error('Invalid input date');
  }
}