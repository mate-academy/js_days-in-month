"use strict"

function daysInMonth(month, year) {
  try {
    return daysAmountInMonth(month, year);
  } catch (error) {
    return error.message;
  }
}

function daysAmountInMonth(month, year) {
  if ((Number.isInteger(year)&& Number.isInteger(month)) && (year > 0 && month > 0) &&month <= 12) {
      const monthFirstDay = new Date(year, month - 1, 1);
      const nextMonthFirstDay = new Date(year, month, 1);
      const daysAmount = (nextMonthFirstDay.getTime() - monthFirstDay.getTime())/(3600000*24);
      return daysAmount;
  } else {
    throw new TypeError("exeption");
  }
}

console.log(daysInMonth(5, 2019)); // 31
console.log(daysInMonth(5, '2019')); // exception
console.log(daysInMonth(2, 2020)); // 29
console.log(daysInMonth(2.2, 2020)); // exception
console.log(daysInMonth(2, 2100)); // 28
console.log(daysInMonth(13, 2100)); // exception