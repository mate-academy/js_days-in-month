'use strict';

function daysInMonth(month, year) {
  try{
    if (Number.isInteger(year) && Number.isInteger(month) && month <= 12 && month > 0){
      return new Date(year, month, 0).getDate();
    }
    throw new Error('exception') ;
  
  }catch (e) {
    return e;
 }
};

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception
