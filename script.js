function daysInMonth(month, year) {
  if (month < 0 || year < 0 || month > 12 || typeof month !== 'number' || typeof year !== 'number'
  || year % 1 !== 0 || month % 1 !== 0) {
    return console.log('exception');
  } else {
    return new Date(year, month, 0).getDate();
  }
}
console.log(daysInMonth(5,2019));