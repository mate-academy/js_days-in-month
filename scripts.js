'use strict';

function daysInMonth(month, year) {
  try {
    if ( !Number.isInteger(month) 
    || !Number.isInteger(year) 
    || month < 0 
    || month > 12 
    || year < 0 
    || typeof month !== 'number' 
    || typeof year !== 'number') {
      throw new Error('Wrong data');
    }
    let days = 32 - new Date(year, month - 1, 32).getDate();
    return days;
  }
  catch(error) {
    console.log(error.name, error.message);
  }
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception