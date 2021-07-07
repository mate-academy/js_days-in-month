function daysInMonth(month, year) {
  const errorMessage = 'exception'
  if (Number.isInteger(month) && Number.isInteger(year) && month <= 12) {
    return new Date(year, month, 0).getDate();
  } else {
    return errorMessage;
  }
}

console.log(daysInMonth(5, 2020));
console.log(daysInMonth(5, '2019'));
console.log(daysInMonth(2, 2020));
console.log(daysInMonth(2.2, 2020));
console.log(daysInMonth(2, 2100));
console.log(daysInMonth(13, 2100));
