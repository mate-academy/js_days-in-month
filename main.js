'use strict';

function daysInMonth(month, year) {

	if (typeof year === 'number' && year % 1 === 0 &&  month < 13) {
		return new Date(year, month, 0 ).getDate();
    } else { 
    	throw new Error (`Invalid data`); 
    }
}



console.log(daysInMonth(5, 2009)); // 31
console.log(daysInMonth(5, '2019')); // exception
console.log(daysInMonth(2, 2020)); // 29
console.log(daysInMonth(2.2, 2020)); // exception
console.log(daysInMonth(2, 2100)); // 28
console.log(daysInMonth(13, 2019)); // exception
