"use strict";

function daysInMonth(month, year) {
  if (
    Number.isFinite(month) &&
    Number.isInteger(month) &&
    month <= 12 &&
    Number.isFinite(year) &&
    Number.isInteger(year)
  ) {
    return new Date(year, month, 0).getDate();
  }
  throw new Error("exception");
}
console.log(daysInMonth(11, 2019));
// 31
console.log(daysInMonth(5, "2019"));
// exception
console.log(daysInMonth(2, 2020));
// 29
console.log(daysInMonth(2.2, 2020));
// exception
console.log(daysInMonth(2, 2100));
// 28
console.log(daysInMonth(13, 2100));
// exception
