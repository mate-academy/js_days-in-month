'use strict';

function daysInMonth(month, year) {
  if(month % 1 === 0 
    && typeof month === 'number' 
    && month <= 12 
    && year % 1 === 0 
    && typeof year === 'number') {
      return new Date(year, month, 0).getDate();
    }
    throw 'exception';
}
console.log(daysInMonth(5, 2019));
 // 31
console.log(daysInMonth(5, '2019'));
 // exception
console.log(daysInMonth(2, 2020));
 // 29
console.log(daysInMonth(2.2, 2020));
 // exception
console.log(daysInMonth(2, 2100));
 // 28
console.log(daysInMonth(13, 2100));
 // exception